import { useState } from "react";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import Input from "components/Input/Input";
import { PATHS } from "Routes/paths";
import { useLink } from "hooks/use-link";

export function SignUpPage() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [login, setLogin] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const [email, setEmail] = useState("");
  const navigate = useLink();

  return (
    <CenterPageLayout>
      <Modal fixed={false}>
        <Modal.Header title="Регистарция" />
        <Modal.Content>
          <Input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            label="Почта"
            type="email"
          />
          <Input
            onChange={(event) => setLogin(event.target.value)}
            value={login}
            label="Логин"
          />
          <Input
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
            label="Имя"
          />
          <Input
            onChange={(event) => setSecondName(event.target.value)}
            value={secondName}
            label="Фамилия"
          />
          <Input
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            label="Телефон"
            type="tel"
          />
          <Input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            value={password}
            label="Пароль"
          />
          <Input
            onChange={(event) => setRePassword(event.target.value)}
            type="password"
            value={rePassword}
            label="Повтор пароля"
          />
        </Modal.Content>
        <Modal.Footer>
          <ButtonsGroup>
            <Button onClick={navigate(PATHS.SIGN_IN)} mode="secondary">
              Уже есть аккаунт?
            </Button>
            <Button mode="primary" onClick={() => {}}>
              Зарегистрироваться
            </Button>
          </ButtonsGroup>
        </Modal.Footer>
      </Modal>
    </CenterPageLayout>
  );
}
