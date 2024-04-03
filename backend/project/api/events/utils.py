from collections import deque


def get_teams(event):  # noqa: C901, PLR0912
    members_max = 3
    min_front = 1
    min_back = 2


    def bfs(tree):
        result = []
        queue = deque([tree])
        while queue:
            node = queue.popleft()
            if isinstance(node, dict):
                for key, value in node.items():
                    result.append(key)
                    queue.append(value)
            elif isinstance(node, list):
                for item in node:
                    if isinstance(item, dict):
                        for key, value in item.items():
                            result.append(key)
                            queue.append(value)
                    elif isinstance(item, int) and item == 1:
                        return result
        return result

    def sort_and_divide_users(users):
        sorted_users = dict(
            sorted(users.items(), key=lambda x: (x[1][1], x[1][2]))
        )

        frontend_users = {
            name: skills
            for name, skills in sorted_users.items()
            if skills[0] == "Frontend"
        }
        backend_users = {
            name: skills
            for name, skills in sorted_users.items()
            if skills[0] == "Backend"
        }

        return frontend_users, backend_users

    db_users = event.users.all().only("skills", "id")
    users = {}

    for user in db_users:
        users[str(user.id)] = tuple(bfs(user.skills))

    frontend_users, backend_users = sort_and_divide_users(users)
    teams = []
    while len(frontend_users) >= min_front and len(backend_users) >= min_back:
        try:
            team = []

            for i in range(min_front):  # noqa: B007
                team.append(frontend_users.popitem())  # noqa: PERF401

            for i in range(min_back):  # noqa: B007
                team.append(backend_users.popitem())  # noqa: PERF401

            if len(team) < members_max:
                for i in range(min_front):  # noqa: B007
                    if len(team) >= members_max:
                        break
                    if frontend_users:
                        team.append(frontend_users.popitem())

                for i in range(min_back):  # noqa: B007
                    if len(team) >= members_max:
                        break
                    if backend_users:
                        team.append(backend_users.popitem())
            teams.append(team)
        except KeyError:
            pass
    return teams
