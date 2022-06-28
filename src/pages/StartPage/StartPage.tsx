import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { PATHS } from "Routes/paths";
import { useLink } from "hooks/use-link";
import { setNotification } from "store/notifications";
import { signInOAuth } from "store/auth";
import { useAppDispatch } from "hooks/use-app-dispatch";
import "./StartPage.css";

export function StartPage() {
  const [menuItems] = useState([
    { label: "Играть", url: PATHS.GAME },
    { label: "Профиль", url: PATHS.PROFILE },
    { label: "Логин", url: PATHS.SIGN_IN },
    { label: "Регистрация", url: PATHS.SIGN_UP },
    { label: "Таблица лидеров", url: PATHS.LEADERBOARD },
    { label: "Форум", url: PATHS.FORUM },
    { label: "Компоненты", url: PATHS.UI },
  ]);

  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useLink();
  const checkAuthorizationCode = async () => {

    const code = new URLSearchParams(search).get("code");

    if (code) {
      try {
        await dispatch(signInOAuth(code)).unwrap();
        navigate(PATHS.START);
      } catch (e: unknown) {
        if (typeof e === "string") {
          setNotification({ message: e });
        } else {
          setNotification({ message: "Unable to log in" });
        }
      }
    }
  }

  useEffect(() => {
    checkAuthorizationCode();
  }, [])

  return (
    <Modal>
      <Modal.Header title="Меню" />
      <Modal.Content>
        <div className="main-menu">
          {menuItems.map((item) => (
            <Button
              mode="secondary"
              className="main-menu__btn"
              onClick={navigate(item.url)}
              key={item.url}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </Modal.Content>
    </Modal>
  );
}
