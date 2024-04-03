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
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../shared/ui/card"


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
    <ResizablePanelGroup className={less["full-content"]} direction="horizontal">
      <ResizablePanel defaultSize={60} maxSize={60}>
        <div className={less["main-admin"]}>
          <CreateTeam />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
      <h4>Members: {players.length}</h4>
      {players.map((event) => (
        <Card className={`${less["card"]} flex flex-row `}>
        <div className="flex flex-col">
          <CardHeader className="p-0">
            <CardTitle className="p-0">{`${event.first_name} | ${event.email}`}</CardTitle>
          </CardHeader >
          <CardContent className="p-0 mt-2">
            <p>{t("skills")}:</p>
            <p>{event.bio}</p>
        
          </CardContent>
          </div>
        </Card>
      ))}

      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
export default AdminPage;
