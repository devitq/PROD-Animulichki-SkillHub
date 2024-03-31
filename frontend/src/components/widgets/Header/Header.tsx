import { useTranslation } from "react-i18next";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,

    MenubarTrigger,
} from "../../shared/ui/menubar"
import {
    Dialog,
    DialogTrigger,
} from "../../shared/ui/dialog"

import less from "./Header.module.less"
import { ResetIcon } from "@radix-ui/react-icons";

import { Separator } from "../../shared/ui/separator";
import { ModeToggle } from "../../mode-toggle";
import AuthForm from "./AuthForm";


const Header = () => {
    const { t, i18n } = useTranslation();
    const handleTrans = (code: string) => {
        i18n.changeLanguage(code);
    };

    
    return (
        <header className={less.header}>
            <img className={less.logo} src='/logo.svg'></img>
            <div className={less["line-block"]}>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger >{t("flag")} {t("langCode").toUpperCase()}</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem onClick={() => handleTrans("ru")}>
                                🇷🇺 RU<MenubarShortcut>⌘R</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem onClick={() => handleTrans("en")}>
                                🇬🇧 EN <MenubarShortcut>⌘E</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem onClick={() => handleTrans("zh")}>
                                🇨🇳 ZH <MenubarShortcut>⌘Z</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem onClick={() => handleTrans(navigator.language)}>System language<MenubarShortcut><ResetIcon /></MenubarShortcut></MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <ModeToggle />

                </Menubar>
                <Separator orientation="vertical" />
                <Dialog>
                    <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">{t("entrance")}
                    </DialogTrigger>
                    <AuthForm/>
                </Dialog>
            </div>


        </header>
    )
}
export default Header;