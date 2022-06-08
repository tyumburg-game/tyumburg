import { useEffect, useState } from "react";
import { selectUser } from "store/user";
import { useAppSelector } from "hooks/use-app-selector";

export function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    setIsAuth(user.user !== null);
  }, [user]);

  return isAuth;
}
