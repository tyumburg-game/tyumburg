import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import { PageLoader } from "components/PageLoader/PageLoader";
import { PATHS } from "./paths";

export function PrivateOutlet() {
  const authState = useAuth();

  switch (authState) {
    case "loading":
      return <PageLoader />;
    case "auth":
      return <Outlet />;
    case "external":
    default:
      return <Navigate to={PATHS.SIGN_IN} />;
  }
}
