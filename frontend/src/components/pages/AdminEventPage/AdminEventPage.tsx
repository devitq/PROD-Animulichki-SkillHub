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



const AdminEventPage = () =>{
    const { t } = useTranslation();
    let wfew = JSON.stringify(eventList());
    console.log(typeof wfew);
    console.log(wfew );


    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
      fetchData(); 
    }, []);
  
    const fetchData = () => {
      eventList() // Вызываем функцию eventList из файла api.ts
        .then((data: Event[]) => {
          setEvents(data); // Устанавливаем полученные данные в состояние
        })
        .catch((error: any) => {
          console.error('Произошла ошибка:', error); // Обрабатываем ошибку, если она возникла
        });
    };

    return(
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
      <Button onClick={eventList}>{t("createEvent")}</Button>
      
      <div className={less["cont_2"]}>
      {events.map((event) => (
          <li key={event.created_at}>
            <div>Название: {event.title}</div>
            <div>Дата: {event.updated_at}</div>
            {/* Добавьте другие свойства вашего объекта, если они есть */}
          </li>
        ))}
          <VacancyCard></VacancyCard>
      <VacancyCard></VacancyCard>
      <VacancyCard></VacancyCard>
</div>
      </div>
    )
}
export default AdminEventPage

