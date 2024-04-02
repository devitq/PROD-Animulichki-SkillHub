import { Textarea } from "../../shared/ui/textarea";
import { Input } from "../../shared/ui/input";
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from "../../shared/ui/sheet";
import less from "./CreateTeams.module.less"
import { Button } from "../../shared/ui/button";
import { useTranslation } from "react-i18next";
import { Label } from "../../shared/ui/label";

const CreateTeam = () =>{
  const {t} = useTranslation();
    return(
<Sheet>
  <SheetTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">{t("DistTeams")}</SheetTrigger>
  <SheetContent side='left'>
    <SheetHeader>
      <SheetTitle>{t("DistTeams")}</SheetTitle>
        <Button>{t("distribute")}!</Button>
        <div className={less["desc-block"]}><Button>{t("download")}!</Button><Label>{t("descDownload")}</Label></div>
    </SheetHeader>
  </SheetContent>
</Sheet>

    )
}
export default CreateTeam;