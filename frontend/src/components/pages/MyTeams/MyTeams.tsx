import TeamCard from "../../widgets/TeamCard/TeamCard";
import UserProfile from "../../features/UserProfile/UserProfile";
import less from "./MyTeams.module.less"
import CreateTeam from "../../widgets/CreateTeam/CreateTeam";


const MyTeams = () => {
    return (
        <>
        <UserProfile />
        <TeamCard/>
        <CreateTeam/>
        </>
    )
}
export default MyTeams;