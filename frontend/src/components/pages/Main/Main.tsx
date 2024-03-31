import SearchBar from "../../features/SearchBar/SearchBar";
import TeamsCard from "../../entities/TeamsCard/TeamsCard";
import less from "./Main.module.less"


const Main = () => {
    return (
        <><div><SearchBar title="Вакансии" />
        </div><div className={less["general-content"]}>
                <TeamsCard />
            </div></>
    )
}
export default Main;