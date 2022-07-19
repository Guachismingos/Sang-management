//CSS
import "../styles/style.css";
import "bootswatch/dist/lux/bootstrap.min.css";

import { Container } from "react-bootstrap";

import Header from "./Header";

import routes from "../router/routes";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./../router/PrivateRoute";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

const Layout = () => {
  return (
    <Container fluid>
      <Header />
      <Routes>
            {routes.map(({ path, Component, name, childs }) =>
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
                      <Route
                        exact
                        key={name}
                        path={path}
                        element={<Component />}
                      />
                    ))}
                  </Route>
                </Route>
              )
            )}
            <Route exact path="/login" element={<PrivateRoute />}>
              <Route exact path="/login" element={<Login />} />
            </Route>
            <Route exact path="/*" element={<Navigate to="/panel" replace />} />
          </Routes>
    </Container>
  );
};

export default Layout;
