import less from "./Landing.module.less"
import '../../../i18n'
import { Button } from "../../shared/ui/button"
import { Label } from "@radix-ui/react-menubar"
import { useTranslation } from "react-i18next";

function Landing() {
    const { t } = useTranslation();

  return (
      <><div className={less.block}></div>
        <h1 className={less.landing}>{t("landingLogo")}</h1>
        <div className={less["info-block"]}>
            <Label className="mt-10 mb-1">Lorem ipsum dolor sit amet consectetur. Tincidunt nunc duis interdum feugiat viverra tellus eu amet fermentum. Metus nulla lacinia egestas scelerisque porta urna et massa. Id ut vel aliquet lorem velit. Blandit interdum enim suspendisse non at sem nulla diam ullamcorper.</Label>
            <Button variant="outline">{t("buttonGoTOReg")}</Button>
        </div>
        </>
  )
}

export default Landing