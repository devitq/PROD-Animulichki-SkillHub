import { Input } from "../../ui/input";
import { Textarea } from "../../shared/ui/textarea";
import { Button } from "../../shared/ui/button";
import less from "./SkillTree.module.less"
import { Switch } from "../../shared/ui/switch";
import { addEvent, deleteEvent, submitRegister } from "../../widgets/Header/AuthAPI";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../../ui/card";
  import { TrashIcon } from "lucide-react";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../shared/ui/dialog";
  import { t } from "i18next";
import { useEffect, useState } from "react";
import { eventList } from "../AdminEventPage/AdminEventAPI";
import { Link } from "react-router-dom";

const SkillTree = () => {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
      eventList()
        .then((data) => {
          setEvents(data);
        })
        .catch((error) => {
          console.error("Возникла ошибка с получением:", error);
        });
    }, []);
    
    return (
        <div className={less["general"]}>
            <div className={less["left"]}>
                <form className={less["input-form"]} onSubmit={(event) => addEvent(event)}>
                    <Input type="text" name="title" placeholder="Event name" />
                    <Input type="text" name="description" placeholder="Last name" />
                    <Input type="date" name="start_date" placeholder="Start date" />
                    <Input type="date" name="end_date" placeholder="End date" />
                    <Textarea name="description" placeholder="Description" />
                    <Switch/>
                    <Button>{t("buttonLoginInSystem")}</Button>
                </form>
            </div>
            <div className={less["right"]}>
            {events.map((event) => (
                <Card className={`${less["card"]} flex flex-row `}>
                    <div className="flex flex-col">
                        <CardHeader className={less["header"]}>
                            <div className={less["up"]}>
                                <CardTitle className="p-0">{event.title}</CardTitle>
                                <CardDescription>Дата начала: {event.start_date}</CardDescription>
                            </div>
                            {true && (
                                <Button size="icon" variant="ghost" onClick={() => {deleteEvent(event.id)}}><TrashIcon /></Button>
                            )}
                        </CardHeader>
                        <CardContent className="p-0 mt-4" >
                            <p>{event.description}</p>
                        </CardContent>
                                <Button> <Link to={`../admin/${event.id}`}>Event Management</Link></Button>

                    </div>
                </Card>
            ))}
            </div>
        </div>
    );
}
 export default SkillTree;