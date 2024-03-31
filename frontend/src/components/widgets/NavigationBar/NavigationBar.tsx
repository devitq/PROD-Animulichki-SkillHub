import { Button } from "../../shared/ui/button";
import less from "./NavigationBar.module.less"
import { useTranslation } from 'react-i18next';
import {Columns3, ColumnsIcon, HomeIcon, } from "lucide-react";
import { Link } from "react-router-dom";

const NavigationBar = () =>{
    const { t } = useTranslation();
    return(    <nav className={less["nav-block"]}>
        <Link to={"main"}><Button className={less.button} variant='ghost' size='default'><div className="flex gap-1"><HomeIcon className={less.icon}/>{t('home')}</div></Button></Link>
        <Link to={"teams"}><Button className={less.button} variant='ghost' size='default'><div className="flex gap-1"><Columns3 className={less.icon}/>{t('teams')}</div> </Button></Link>
        <Link to={"my-teams"}><Button className={less.button} variant='ghost' size='default'><div className="flex gap-1"><ColumnsIcon className={less.icon}/>{t('myTeams')}</div></Button></Link>
            </nav>)
}
export default NavigationBar;