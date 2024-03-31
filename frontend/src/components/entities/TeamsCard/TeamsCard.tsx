import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../shared/ui/card"
import less from "./TeamsCard.module.less";

const TeamsCard = () =>{
    return(
        <Card className={`${less["card"]} flex flex-row`}>
        <div className={less["card-img"]}></div>
<div className="flex flex-col">
  <CardHeader >
    <CardTitle>Lorem ipsum</CardTitle>
    <CardDescription>Lorem ipsum</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Lorem ipsum dolor sit amet consectetur. Lorem justo sit nunc commodo nam fames dui ac ullamcorper. Laoreet faucibus semper adipiscing lobortis.</p>
  </CardContent>

  </div>
</Card>

    )
}
export default TeamsCard;