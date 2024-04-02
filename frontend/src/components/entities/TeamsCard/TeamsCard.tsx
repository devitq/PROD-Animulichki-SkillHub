import { Button } from "../../shared/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../shared/ui/card"
import less from "./TeamsCard.module.less";
import { useTranslation } from "react-i18next";

const TeamsCard = () =>{
  const { t } = useTranslation();

    return(
        <Card className={`${less["card"]} flex flex-row`}>
        <div className={less["card-img"]}></div>
<div className="flex flex-col">
  <CardHeader className="p-0 pl-2">
    <CardTitle>Lorem ipsum</CardTitle>
    <CardDescription>Lorem ipsum</CardDescription>
  </CardHeader>
  <CardContent className="p-0 pl-2 mt-4">
    <p>Lorem ipsum dolor sit amet consectetur. Lorem justo sit nunc commodo nam fames dui ac ullamcorper. Laoreet faucibus semper adipiscing lobortis.</p>
  </CardContent>
  <Button  className="mt-5 ml-2">{t("respondRequest")}</Button>

  </div>
</Card>

    )
}
export default TeamsCard;