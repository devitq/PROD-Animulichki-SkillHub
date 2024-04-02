import TemplateWeb from "./components/app/Template/Landing/TemplateWeb";
import General from "./components/app/Template/General/General";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";
import Main from "./components/pages/Main/Main";
import Successful from "./components/pages/Successful/Successful";
import AdminPage from "./components/pages/Admin/Admin";
import SkillTree from "./components/pages/SkillTree/SkillTree";
import AdminEventPage from "./components/pages/AdminEventPage/AdminEventPage";

const router = createBrowserRouter([
    {
      path: "",
      element: <TemplateWeb />,
      children: [
        {
          path: "",
          element: <Landing />
        }
      ]
    },
    {
      path: "*",
      element: <General />,
      children: [
        {
          path: "login",
          element: <Main />
        },
        {
          path: "successful",
          element: <Successful />
        }
      ]
    },
    {
      path: "dash",
      element: <General />,
      children: [
        {
          path: "eventlist",
          element: <AdminEventPage />
        },
        {
          path: "admin",
          element: <AdminPage />
        },
        {
          path: "skill-tree",
          element: <SkillTree />
        }
      ]
    }  
  ])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
