import { Navigate, Outlet } from "react-router-dom";
import { useMeQuery } from "../services/auth";

const ProtectedRoute = () => {
  const { data: user, isLoading, isError } = useMeQuery();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;