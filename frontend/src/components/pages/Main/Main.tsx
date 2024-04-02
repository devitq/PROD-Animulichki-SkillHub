import less from "./Main.module.less"
import { useTranslation } from "react-i18next";
import { Input } from "../../shared/ui/input";
import { submitRegister } from "../../widgets/Header/AuthAPI";
import { Button } from "../../shared/ui/button";
import { Textarea } from "../../shared/ui/textarea";
import { Link, useNavigate } from "react-router-dom";



const Main = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={less["general-content"]}>
            <div className={less["general-left"]}>
                <form className={less["input-form"]} onSubmit={(event) => submitRegister(event, navigate)}>
                    <h1 className={less["title-form"]}>{t("entrance")}</h1>
                    <Input type="text" name="first_name" placeholder="First name" className="mb-4" />
                    <Input type="text" name="last_name" placeholder="Last name" className="mb-4" />
                    <Input type="date" name="birth_date" placeholder="Date" className="mb-4" />
                    <Input type="email" name="email" placeholder="Email" className="mb-4" />
                    
                    <Textarea name="about" placeholder="About" className="mb-4" />

                    <Button>{t("buttonLoginInSystem")}</Button>
                </form>
                <Button variant="link" asChild><Link to={"/dash/admin"}>{t("iorganizer")}</Link></Button>

            </div>
            <div className={less["general-right"] + " shadow"}>
            </div>

        </div>
    )
}
export default Main;