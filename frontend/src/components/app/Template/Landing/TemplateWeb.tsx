import { Outlet } from "react-router"
import Header from "../../../widgets/Header/Header"
import less from "./TemplateWeb.module.less"
import { ThemeProvider } from "../../../theme-provider"
const TemplateWeb = () => {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Header />
            <div className={less['page-maket']}>

            </div>

            <Outlet />
        </ThemeProvider>
    )
}
export default TemplateWeb