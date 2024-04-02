import less from "./Landing.module.less"
import '../../../i18n'
import { Button } from "../../shared/ui/button"
import { Label } from "@radix-ui/react-menubar"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Landing() {
    const { t } = useTranslation();

  return (
      <><div className={less.block}></div>
        <h1 className={less.landing}>{t("landingLogo")}</h1>
        <div className={less["info-block"]}>
            <Label className={less["desc-text"]}>{t("landingDesc")}</Label>
            <Button variant="outline" asChild><Link to={"login"}> {t("buttonGoTOReg")}</Link></Button>
        </div>
        </>
  )
}

export default Landing