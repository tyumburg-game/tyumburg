import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "Routes/paths";
import "./Main.css";

const Main: FC = () => {
  const [menuItems] = useState([
    { label: "Играть", url: PATHS.GAME },
    { label: "Профиль", url: PATHS.PROFILE },
    { label: "Таблица лидеров", url: PATHS.LEADERBOARD },
    { label: "Форум", url: PATHS.FORUM },
    { label: "Компоненты", url: PATHS.UI },
  ]);

  const navigate = useNavigate();

  return (
    <Modal>
        <Modal.Header title="Меню" />
        <Modal.Content>
          <div className="main-menu">
            {menuItems.map((item) => {
              return (
                <Button
                  mode="secondary"
                  className="main-menu__btn"
                  onClick={() => navigate(item.url)}
                  key={item.url}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        </Modal.Content>
      </Modal>
  );
};

export default Main;
