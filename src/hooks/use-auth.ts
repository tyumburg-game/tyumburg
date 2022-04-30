import { useEffect, useState } from "react";

export function useAuth() {
    const [isAuth, setIsAuth] = useState<boolean>(true);

    const checkAuth = async() => {
        // TODO реализовать при добавлении авторизации
        setIsAuth(true);
    }

    useEffect(() => {
        checkAuth();
    },[])

    return isAuth;
}