import { Moon, Sun } from "lucide-react"

import { Button } from "./shared/ui/button"
import { useTheme } from "./theme-provider"
import { useTranslation } from "react-i18next"
import { MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut } from "./shared/ui/menubar"
import { ResetIcon } from "@radix-ui/react-icons"



export function ModeToggle() {
  const { setTheme } = useTheme()

  const { t } = useTranslation();

  return (
    <MenubarMenu>
    <MenubarTrigger asChild>
        <Button variant="ghost" size="sm">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </MenubarTrigger>
      <MenubarContent align="end">
        <MenubarItem onClick={() => setTheme("light")}>
          {t("LightTheme")}<MenubarShortcut>⌘L</MenubarShortcut>
        </MenubarItem>
        <MenubarItem onClick={() => setTheme("dark")}>
        {t("DarkTheme")}<MenubarShortcut>⌘D</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem onClick={() => setTheme("system")}>
        {t("SystemTheme")}<MenubarShortcut><ResetIcon /></MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
      </MenubarMenu>
  )
}


