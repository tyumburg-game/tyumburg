import { useEffect, useState } from "react";
import { authApi } from "api/auth/auth-api";

export type AuthState = "loading" | "auth" | "external";

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>("loading");

  useEffect(() => {
    async function checkAuth() {
      try {
        setAuthState("loading");
        const user = await authApi.getUser();

        if (user) {
          setAuthState("auth");
        } else {
          setAuthState("external");
        }
      } catch (e) {
        setAuthState("external");
      }
    }

    checkAuth();
  }, [setAuthState]);

  return authState;
}
