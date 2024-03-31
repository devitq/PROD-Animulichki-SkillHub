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

const router = createBrowserRouter([
  {
    path: "*",
    element: <TemplateWeb />,
    children: [{
      path: "",
      element: <Landing />,
    }]
  },
  {
    path: "dash",
    element: <General />,
    children: [{
      path: "main",
      element: <Main />,
    },
    {
      path: "teams",
      element: <Teams />,
    },
    {
      path: "my-teams",
      element: <MyTeams />,
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
