import { Button } from "../../shared/ui/button"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../../shared/ui/resizable"
import less from "./Admin.module.less"
import PlayerCard from "../../entities/PlayerCard/PlayerCard"
import { useTranslation } from "react-i18next"
import CreateTeam from "../../widgets/CreateTeams/CreateTeams"
import { Link } from "react-router-dom"

const AdminPage = () =>{
    const { t } = useTranslation();
    return(
        <ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={95} maxSize={95}>
    <div className={less["main-admin"]}>
    <Button asChild><Link to={"skill-tree"}>{t("EditTree")}</Link></Button>

    <CreateTeam/>
    </div>

  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel>
    <PlayerCard/>
    <PlayerCard/>
    <PlayerCard/>
    <PlayerCard/>

  </ResizablePanel>
</ResizablePanelGroup>
    )
}
export default AdminPage