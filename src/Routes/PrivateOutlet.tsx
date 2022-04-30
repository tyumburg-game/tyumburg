import { useAuth } from "hooks/use-auth";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";


export function PrivateOutlet() {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to={PATHS.SIGN_IN} />;
  }