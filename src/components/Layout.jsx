import { Box } from "@mui/material";

import { Navigate, Route, Routes } from "react-router-dom";

import PrivateRoute from "../router/PrivateRoute";

import routes from "../router/routes";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  const { path: loginPath, Component: LoginComponent } = routes[0];

  return (
    <Box className="animate__animated animate__fadeIn animate__fast">
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
      <Footer />
    </Box>
  );
};

export default Layout;
