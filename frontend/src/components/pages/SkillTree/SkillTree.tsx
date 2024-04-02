import { Input } from "../../ui/input";
import VacancyCard from "../../entities/VacancyCard/VacancyCard";
import { Textarea } from "../../shared/ui/textarea";
import { Label } from "../../shared/ui/label";
import { Button } from "../../shared/ui/button";
import less from "./SkillTree.module.less";
import { Switch } from "../../shared/ui/switch";
import { addEvent } from "../../widgets/Header/AuthAPI";
import { Link } from "react-router-dom";
import { ToastAction } from "../../shared/ui/toast"
import { useToast } from "../../shared/ui/use-toast"

import { buttonVariants } from "../../ui/button";

const SkillTree = () => {
    const { toast } = useToast()

  return (
    <div className={`${less["general"]} container`}>
      <div className={less["left"]}>
        <Link
          to={"/dash/admin"}
          className={`border ${buttonVariants({ variant: "outline" })} mb-4`}
        >
          ⟵ Back
        </Link>

        <h3
          className={"text-2xl font-semibold leading-none tracking-tight mb-5"}
        >
          Create event
        </h3>
        <form
          className={less["input-form"]}
          onSubmit={(event) => {
            addEvent(event);
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          <Input
            type="text"
            name="title"
            placeholder="Event name"
            className="mb-3"
          />
          <Input
            type="date"
            name="start_date"
            placeholder="Start date"
            className="mb-3"
          />
          <Input
            type="date"
            name="end_date"
            placeholder="End date"
            className="mb-3"
          />
          <Textarea
            name="description"
            placeholder="Description"
            className="mb-3"
          />
          <div className="flex items-center space-x-2">
            <Switch className="mb-3" id="is_online" />
            <Label htmlFor="is_online">Is online</Label>
          </div>
          <br />
          <Button>Create</Button>
        </form>
      </div>
      <div className={less["right"]}>
        <VacancyCard></VacancyCard>
        <VacancyCard></VacancyCard>
      </div>
    </div>
  );
};
export default SkillTree;
