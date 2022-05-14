import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Modal from "components/Modal/Modal";
import { useLink } from "hooks/use-link";
import { FC } from "react";
import { PATHS } from "Routes/paths";

const PasswordChange: FC = () => {
  const navigate = useLink();

  return (
    <Modal>
      <Modal.Header title="Изменить пароль" />
      <Modal.Content>
        <Input onChange={() => {}} value="" label="Старый пароль" />
        <Input onChange={() => {}} value="" label="Новый пароль" />
        <Input onChange={() => {}} value="" label="Повторите новый пароль" />
      </Modal.Content>
      <Modal.Footer className="action-buttons">
        <Button mode="secondary" onClick={navigate(PATHS.PROFILE)}>
          Отменить
        </Button>
        <Button mode="primary" onClick={(event) => console.log("click", event)}>
          Сохранить пароль
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PasswordChange;
