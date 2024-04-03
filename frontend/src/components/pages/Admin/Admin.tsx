import { Button } from "../../shared/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../shared/ui/resizable";
import less from "./Admin.module.less";
import PlayerCard from "../../entities/PlayerCard/PlayerCard";
import { useTranslation } from "react-i18next";
import CreateTeam from "../../widgets/CreateTeams/CreateTeams";
import { UserList } from "../AdminEventPage/AdminEventAPI";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const { t } = useTranslation();


    const [players, setPlayerList] = useState<Event[]>([]);



    useEffect(() => {

var index = window.location.pathname.indexOf("/dash/admin/") + "/dash/admin/".length;

var result = window.location.pathname.substring(index);

      UserList(result)
        .then((data) => {
          setPlayerList(data);
        })
        .catch((error) => {
          console.error("Возникла ошибка с получением:", error);
        });
    }, []);
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={95} maxSize={95}>
        <div className={less["main-admin"]}>
          <Button>{t("EditTree")}</Button>
          <CreateTeam />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
      {players.map((event) => (
        <div>{event.first_name}</div>
      ))}
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
export default AdminPage;
