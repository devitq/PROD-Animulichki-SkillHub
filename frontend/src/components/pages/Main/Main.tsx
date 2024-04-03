import less from "./Main.module.less";
import { useTranslation } from "react-i18next";
import { Input } from "../../shared/ui/input";
import { submitRegister } from "../../widgets/Header/AuthAPI";
import { Button } from "../../shared/ui/button";
import { Textarea } from "../../shared/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteEvent, eventList } from "../AdminEventPage/AdminEventAPI";
import VacancyCard from "../../entities/VacancyCard/VacancyCard";
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

const Main = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    <div className={less["general-content"]}>
      <div className={less["general-left"]}>
        {events.map((event) => (
                <Card className={`${less["card"]} flex flex-row `}>
                    <div className="flex flex-col">
                        <CardHeader className={less["header"]}>
                            <div className={less["up"]}>
                                <CardTitle className="p-0">{event.title}</CardTitle>
                                <CardDescription>Start Date: {event.start_date}</CardDescription>
                            </div>
                            {false && (
                                <Button size="icon" variant="ghost" onClick={() => deleteEvent(event.id)}><TrashIcon /></Button>
                            )}
                        </CardHeader>
                        <CardContent className="p-0 mt-4" >
                            <p>{event.description}</p>
                        </CardContent>
                        <Dialog>
                            <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">{t("respondRequest")}</DialogTrigger>
                            <DialogContent className={less["model-content"]}>
                                <DialogHeader>
                                    <DialogTitle><h1 className={less["title-form"]}>{t("entrance")}</h1></DialogTitle>
                                    </DialogHeader>
                                        <form className={less["input-form"]} onSubmit={(event) => submitRegister(event, navigate)}>
                                            <div className={less["novis"]}><Input type="text" name="event" value={event.id} placeholder="Event" /></div>
                                            <Input type="text" name="first_name" placeholder="First name" />
                                            <Input type="text" name="last_name" placeholder="Last name" />
                                            <Input type="date" name="birth_date" placeholder="Date" />
                                            <Input type="email" name="email" placeholder="Email" />
                                            <Textarea name="bio" placeholder="About" />

                                            <Button>{t("buttonLoginInSystem")}</Button>
                                        </form>
                            </DialogContent>
                        </Dialog>

                    </div>
                </Card>
            ))}
        <Button variant="link" asChild>
          <Link to={"/dash/skill-tree"}>{t("iorganizer")}</Link>
        </Button>
      </div>
      <div className={less["general-right"] + " shadow"}></div>
    </div>
  );
};

export default Main;
