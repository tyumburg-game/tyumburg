import { useEffect, useState } from "react";

export function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  useEffect(() => {
    // TODO реализовать при добавлении авторизации
    const checkAuth = async () => {
      const res = await true;
      setIsAuth(res);
    };

    checkAuth();
  }, []);

  return isAuth;
}
