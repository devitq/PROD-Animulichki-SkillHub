import TemplateWeb from "./components/app/Template/Landing/TemplateWeb";
import General from "./components/app/Template/General/General";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";
import Main from "./components/pages/Main/Main";
import Teams from "./components/pages/Teams/Teams";
import MyTeams from "./components/pages/MyTeams/MyTeams";
import Successful from "./components/pages/Successful/Successful";
import AdminPage from "./components/pages/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "",
    element: <TemplateWeb />,
    children: [{
      path: "",
      element: <Landing />,
    }]
  },
  {
    path: "*",
    element: <General />,
    children: [{
      path: "login",
      element: <Main />,
    },
    // {
    //   path: "teams",
    //   element: <Teams />,
    // },
    // {
    //   path: "my-teams",
    //   element: <MyTeams />,
    // },
    {
      path: "successful",
      element: <Successful />,
    }]
  },
    {
      path: "dash",
      element: <General />,
      children: [{
      path: "admin",
      element: <AdminPage />,
    },
  ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
