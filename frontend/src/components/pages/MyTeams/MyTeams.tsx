import TeamCard from "../../widgets/TeamInfoBlock/TeamInfoBlock";
import UserProfile from "../../features/UserProfile/UserProfile";
import less from "./MyTeams.module.less"
import CreateTeam from "../../widgets/CreateTeams/CreateTeams";


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