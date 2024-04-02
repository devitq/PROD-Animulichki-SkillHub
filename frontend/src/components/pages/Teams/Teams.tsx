import { useTranslation } from "react-i18next";
import TeamsCard from "../../entities/TeamsCard/TeamsCard";
import SearchBar from "../../features/SearchBar/SearchBar";
import less from "./Teams.moadule.less"


const Teams = () => {
    const { t } = useTranslation();

    return (
        <div><SearchBar title={t("teams")}/>
                <TeamsCard />
        </div>
    )
}
export default Teams;