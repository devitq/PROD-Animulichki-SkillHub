import { Textarea } from "../../shared/ui/textarea";
import { Input } from "../../shared/ui/input";
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from "../../shared/ui/sheet";
import less from "./CreateTeam.module.less"
import { Button } from "../../shared/ui/button";

const CreateTeam = () =>{
    return(
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent className="w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Создание команды</SheetTitle>
      <SheetDescription>
        Тут вы можете создать свою команду для участия, к примеру.... в хакатонах
        <Input placeholder="Название"></Input>
        <Input type="number" placeholder="Возрастное ограничение"></Input>
        <Textarea placeholder="Описание"></Textarea>
        <Button>Создать команду</Button>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    )
}
export default CreateTeam;