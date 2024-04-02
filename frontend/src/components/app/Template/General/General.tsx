import { ThemeProvider } from "../../../theme-provider"
import '../../../../i18n'
import less from "./General.module.less"
import Header from "../../../widgets/Header/Header"
import { Outlet } from "react-router"

function General() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
       <Header />
      <div className={less['page-maket']}>
      <div className={less["main-content"]}>
      <Outlet/>
    </div>
    </div>
    </ThemeProvider>

  )
}

export default General