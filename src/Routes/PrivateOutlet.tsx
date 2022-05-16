import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import { PATHS } from "./paths";

export function PrivateOutlet() {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to={PATHS.SIGN_IN} />;
}
