import { FormEventHandler, useState } from "react";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import Input from "components/Input/Input";
import { PATHS } from "Routes/paths";
import CustomLink from "components/Link/Link";

type SignUpInputName =
  | "password"
  | "rePassword"
  | "login"
  | "phone"
  | "firstName"
  | "secondName"
  | "email";
type SignUpInputState = {
  value: string;
  isValid?: boolean;
};
type SignUpInputs = Record<SignUpInputName, SignUpInputState>;

export function SignUpPage() {
  const [inputs, setInputs] = useState<SignUpInputs>({
    password: {
      value: "",
    },
    rePassword: {
      value: "",
    },
    login: {
      value: "",
    },
    phone: {
      value: "",
    },
    firstName: {
      value: "",
    },
    secondName: {
      value: "",
    },
    email: {
      value: "",
    },
  });

  function setInput(inputName: SignUpInputName, value: string) {
    setInputs({ ...inputs, [inputName]: value });
  }

  const SignUpSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Валидация и регистарция.");
  };

  return (
    <CenterPageLayout>
      <form action="#" className="sign-up-page__form" onSubmit={SignUpSubmit}>
        <Modal fixed={false}>
          <Modal.Header title="Регистарция" />
          <Modal.Content>
            <Input
              onChange={(event) => setInput("email", event.target.value)}
              value={inputs.email.value}
              label="Почта"
              type="email"
            />
            <Input
              onChange={(event) => setInput("login", event.target.value)}
              value={inputs.login.value}
              label="Логин"
            />
            <Input
              onChange={(event) => setInput("firstName", event.target.value)}
              value={inputs.firstName.value}
              label="Имя"
            />
            <Input
              onChange={(event) => setInput("secondName", event.target.value)}
              value={inputs.secondName.value}
              label="Фамилия"
            />
            <Input
              onChange={(event) => setInput("phone", event.target.value)}
              value={inputs.phone.value}
              label="Телефон"
              type="tel"
            />
            <Input
              onChange={(event) => setInput("password", event.target.value)}
              type="password"
              value={inputs.password.value}
              label="Пароль"
            />
            <Input
              onChange={(event) => setInput("rePassword", event.target.value)}
              type="password"
              value={inputs.rePassword.value}
              label="Повтор пароля"
            />
          </Modal.Content>
          <Modal.Footer>
            <ButtonsGroup>
              <CustomLink to={PATHS.SIGN_IN} mode="secondary">
                Уже есть аккаунт?
              </CustomLink>
              <Button type="submit" mode="primary">
                Зарегистрироваться
              </Button>
            </ButtonsGroup>
          </Modal.Footer>
        </Modal>
      </form>
    </CenterPageLayout>
  );
}
