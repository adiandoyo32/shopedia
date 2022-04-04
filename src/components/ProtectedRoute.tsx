import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../redux/hooks";

const ProtectedRoute = () => {
  const isAuth = useAuth();
  const location = useLocation();

  if (isAuth) return <Outlet />;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
