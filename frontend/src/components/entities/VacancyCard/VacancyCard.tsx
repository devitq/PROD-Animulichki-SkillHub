import { useTranslation } from "react-i18next";
import { Button } from "../../shared/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../shared/ui/card"
import less from "./VacancyCard.module.less";
import { TrashIcon } from "lucide-react";
import { deleteEvent } from "../../pages/AdminEventPage/AdminEventAPI";

interface VacancyCardProms{
  title: string;
  date: string;
  desc: string;
  cardId: string;
  admin: boolean;
}

const VacancyCard = ({title, date, desc,cardId, admin = false} : VacancyCardProms) =>{
  const { t } = useTranslation();


    return(
        <Card className={`${less["card"]} flex flex-row `}>
<div className="flex flex-col">
  <CardHeader className={less["header"]}>
    <div className={less["up"]}>
    <CardTitle className="p-0">{title}</CardTitle>
    <CardDescription>Дата начала: {date}</CardDescription>
    </div>
{admin &&(
    <Button size="icon" variant="ghost" onClick={() => deleteEvent(cardId)}><TrashIcon/></Button>
    )}
  </CardHeader>
  <CardContent className="p-0 mt-4">
    <p>{desc}</p>
  </CardContent>
      <Button  className="mt-2">{t("respondRequest")}</Button>
  </div>
</Card>

    )
}
export default VacancyCard;