import { Input } from "../../ui/input";
import VacancyCard from "../../entities/VacancyCard/VacancyCard";
import { Textarea } from "../../shared/ui/textarea";
import { Button } from "../../shared/ui/button";
import less from "./SkillTree.module.less"
import { t } from "i18next";
import { Switch } from "../../shared/ui/switch";
import { addEvent } from "../../widgets/Header/AuthAPI";


const SkillTree = () => {


    
    return (
        <div className={less["general"]}>
            <div className={less["left"]}>
                <form className={less["input-form"]} onSubmit={(event) => addEvent(event)}>
                    <Input type="text" name="title" placeholder="Event name" />
                    <Input type="text" name="description" placeholder="Last name" />
                    <Input type="date" name="start_date" placeholder="Start date" />
                    <Input type="date" name="end_date" placeholder="End date" />
                    <Textarea name="description" placeholder="Description" />
                    <Switch/>
                    <Button>{t("buttonLoginInSystem")}</Button>
                </form>
            </div>
            <div className={less["right"]}>
                <VacancyCard ></VacancyCard>
                <VacancyCard ></VacancyCard>
            </div>
        </div>
    );
}
 export default SkillTree;