import { useTranslation } from "react-i18next";
import { Button } from "../../shared/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../shared/ui/card"
import less from "./PlayerCard.module.less";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../shared/ui/dialog";
import { Separator } from "../../shared/ui/separator";

const PlayerCard = () =>{
  const { t } = useTranslation();


    return(
        <Card className={`${less["card"]} flex flex-row `}>
<div className="flex flex-col">
  <CardHeader className="p-0">
    <CardTitle className="p-0">Lorem ipsum</CardTitle>
  </CardHeader >
  <CardContent className="p-0 mt-2">
    <p>{t("skills")}:</p>
    <p>{t("viewingProfile")}:</p>

  </CardContent>
  <Dialog>
  <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-1">{t("open")}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>фио</DialogTitle>
      <DialogDescription>
        <Separator></Separator>
        такой то такой то

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  </div>
</Card>

    )
}
export default PlayerCard;