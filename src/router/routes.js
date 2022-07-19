import Login from "../pages/Login";
import Panel from "./../pages/Panel";

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
];

export default routes;
