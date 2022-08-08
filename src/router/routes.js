import Login from "../pages/Login";
import Panel from "./../pages/Panel";
import RequirementDisplay from "./../components/requirements/RequirementDisplay";

const routes = [
  {
    path: "/login",
    name: "Inicio de Sesión",
    Component: Login,
  },
  {
    path: "/panel",
    name: "Panel Administrativo",
    Component: Panel,
  },
  {
    path: "/panel/:id",
    name: "Requerimiento",
    Component: RequirementDisplay,
  },
];

export default routes;
