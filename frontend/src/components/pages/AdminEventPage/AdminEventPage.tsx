import { Input } from "../../shared/ui/input";
import VacancyCard from "../../entities/VacancyCard/VacancyCard";
import less from "./AdminEventPage.module.less"
import { useTranslation } from "react-i18next";
import { Button } from "../../shared/ui/button";
import { Textarea } from "../../shared/ui/textarea";
import { eventList, submitAddEvent } from "./AdminEventAPI";
import { Switch } from "../../shared/ui/switch";
import { Label } from "../../shared/ui/label";
import { useEffect, useState } from "react";



const AdminEventPage = () => {
  const { t } = useTranslation();


  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    eventList().then((data) => {
        setEvents(data)
    }).catch(error => {
      console.error('Возникла ошибка с получением:', error)
    })
  }, []);


  return (
    <div className={less["admin-event__page"]}>
      <div className={less["cont_1"]}>
        <form className={less["input-form"]} onSubmit={(event) => submitAddEvent(event)}>
          <h1 className={less["title-titleform"]}>{t("createEvent")}</h1>
          <Input type="text" name="title" placeholder="Event name" />
          <Input type="date" name="start_date" placeholder="Start Date" />
          <Input type="date" name="end_date" placeholder="End Date" />

          <Textarea name="description" placeholder="About Event" />
          <div className={less["liner-block"]}>
            <Switch name="is_online" />
            <Label htmlFor="airplane-mode">Онлайн мероприятие</Label>
          </div>
          <Button>{t("createEvent")}</Button>
        </form>

      </div>
      <div className={less["cont_2"]}>
      {events.map((event) => (
        <VacancyCard title={event.title} date={event.start_date} desc={event.description} cardId={event.id} admin={true}></VacancyCard>

      ))}
      </div>
    </div>
  )
}
export default AdminEventPage

