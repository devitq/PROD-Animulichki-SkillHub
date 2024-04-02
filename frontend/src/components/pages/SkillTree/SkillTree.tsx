import { Input } from "../../ui/input";
import { Textarea } from "../../shared/ui/textarea";
import { Label } from "../../shared/ui/label";
import { Button } from "../../shared/ui/button";

import less from "./SkillTree.module.less";
import { Switch } from "../../shared/ui/switch";
import { Link } from "react-router-dom";
import { ToastAction } from "../../shared/ui/toast";
import { useToast } from "../../shared/ui/use-toast";
import { buttonVariants } from "../../ui/button";
import { addEvent, submitRegister } from "../../widgets/Header/AuthAPI";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { TrashIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../shared/ui/dialog";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { eventList } from "../AdminEventPage/AdminEventAPI";

const SkillTree = () => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    eventList()
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Возникла ошибка с получением:", error);
      });
  }, []);

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
              title: "Event created!",
              description: `Event ${event.title} created successfully!`,
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
        {/* {events.map((event) => (
          <Card className={`${less["card"]} flex flex-row `}>
            <div className="flex flex-col">
              <CardHeader className={less["header"]}>
                <div className={less["up"]}>
                  <CardTitle className="p-0">{event.title}</CardTitle>
                  <CardDescription>
                    Дата начала: {event.start_date}
                  </CardDescription>
                </div>
                {false && (
                  <Button size="icon" variant="ghost">
                    <TrashIcon />
                  </Button>
                )}
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p>{event.description}</p>
              </CardContent>
              <Button>
                {" "}
                <Link to={`../admin/${event.id}`}>Event Management</Link>
              </Button>
            </div>
          </Card>
        ))} */}
      </div>
      <div className="shadow"></div>
    </div>
  );
};
export default SkillTree;
