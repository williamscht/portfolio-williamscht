import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Booki from "../pages/Booki"; 
import Kasa from "../pages/Kasa";
import NinaCarducci from "../pages/NinaCarducci";
import SophieBluel from "../pages/SophieBluel";
import MonVieuxGrimoire from "../pages/MonVieuxGrimoire";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/booki", element: <Booki /> },
      { path: "/kasa", element: <Kasa /> },
      { path: "/nina", element: <NinaCarducci /> },
      { path: "/sophiebluel", element: <SophieBluel /> },
      { path: "/grimoire", element: <MonVieuxGrimoire /> },
      { path: "*", element: <h1>Page non trouvée</h1> },
    ],
  },
]);