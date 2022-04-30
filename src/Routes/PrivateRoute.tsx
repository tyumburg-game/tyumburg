import { useAuth } from "hooks/use-auth";
import React, { HTMLProps } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";

interface IPrivateRouteProps extends HTMLProps<unknown> {
}

export function PrivateRoute({ children }: IPrivateRouteProps) {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to={PATHS.SIGN_IN} />;
  }