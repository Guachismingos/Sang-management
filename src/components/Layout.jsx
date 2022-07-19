//CSS
import "../styles/style.css";
import "bootswatch/dist/lux/bootstrap.min.css";

import { Container } from "react-bootstrap";

import Header from "./Header";

import routes from "../router/routes";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./../router/PrivateRoute";
import { Navigate } from "react-router-dom";

const Layout = () => {
  const { path: loginPath, Component: LoginComponent } = routes[0];
  
  return (
    <Container fluid>
      <Header />
      <Routes>
        {routes.slice(1).map(({ path, Component, name, childs }) =>
          !childs ? (
            <Route
              exact
              key={name}
              path={path}
              element={<PrivateRoute isPrivate />}
            >
              <Route exact path={path} element={<Component />} />
            </Route>
          ) : (
            <Route
              exact
              key={name}
              path={path}
              element={<PrivateRoute isPrivate />}
            >
              <Route exact path={path} element={<Component />}>
                {childs.map(({ path, Component, name }) => (
                  <Route exact key={name} path={path} element={<Component />} />
                ))}
              </Route>
            </Route>
          )
        )}
        <Route exact path={loginPath} element={<PrivateRoute />}>
          <Route exact path={loginPath} element={<LoginComponent />} />
        </Route>
        <Route exact path="/*" element={<Navigate to="/panel" replace />} />
      </Routes>
    </Container>
  );
};

export default Layout;
