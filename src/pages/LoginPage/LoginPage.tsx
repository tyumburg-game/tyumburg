import { useState } from "react";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import Input from "components/Input/Input";

export function LoginPage() {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  return (
    <CenterPageLayout>
      <Modal fixed={false}>
        <Modal.Header title="Вход" />
        <Modal.Content>
          <Input
            onChange={(event) => setLogin(event.target.value)}
            value={login}
            label="Логин"
          />
          <Input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            value={password}
            label="Пароль"
          />
        </Modal.Content>
        <Modal.Footer>
          <ButtonsGroup>
            <Button onClick={() => {}} mode="secondary">
              Нет аккаунта
            </Button>
            <Button mode="primary" onClick={() => {}}>
              Войти
            </Button>
          </ButtonsGroup>
        </Modal.Footer>
      </Modal>
    </CenterPageLayout>
  );
}
