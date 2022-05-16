import { useState } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Modal from "components/Modal/Modal";
import { useLink } from "hooks/use-link";
import { PATHS } from "Routes/paths";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";

export function PasswordChangePage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const navigate = useLink();

  return (
    <CenterPageLayout>
      <Modal fixed={false}>
        <Modal.Header title="Изменить пароль" />
        <Modal.Content>
          <Input
            onChange={(event) => setOldPassword(event.target.value)}
            value={oldPassword}
            label="Старый пароль"
          />
          <Input
            onChange={(event) => setNewPassword(event.target.value)}
            value={newPassword}
            label="Новый пароль"
          />
          <Input
            onChange={(event) => setNewPasswordRepeat(event.target.value)}
            value={newPasswordRepeat}
            label="Повторите новый пароль"
          />
        </Modal.Content>
        <Modal.Footer>
          <ButtonsGroup>
            <Button mode="secondary" onClick={navigate(PATHS.PROFILE)}>
              Отменить
            </Button>
            <Button
              mode="primary"
              onClick={(event) => console.log("click", event)}
            >
              Сохранить пароль
            </Button>
          </ButtonsGroup>
        </Modal.Footer>
      </Modal>
    </CenterPageLayout>
  );
}
