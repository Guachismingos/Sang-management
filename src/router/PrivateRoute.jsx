import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./../context/AuthContext";
const PrivateRoute = ({ isPrivate = false }) => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return isPrivate ? (
    currentUser ? (
      <Outlet />
    ) : (
      <Navigate replace to="/login" />
    )
  ) : !currentUser ? (
    <Outlet />
  ) : (
    <Navigate replace to="/panel" />
  );
};
export default PrivateRoute;
