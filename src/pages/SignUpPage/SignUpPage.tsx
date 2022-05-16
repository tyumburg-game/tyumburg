import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import Input from "components/Input/Input";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";

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

  function setInput(e: ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
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
              onChange={setInput}
              value={inputs.email.value}
              label="Почта"
              type="email"
              name="email"
            />
            <Input
              onChange={setInput}
              value={inputs.login.value}
              label="Логин"
              name="login"
            />
            <Input
              onChange={setInput}
              value={inputs.firstName.value}
              label="Имя"
              name="firstName"
            />
            <Input
              onChange={setInput}
              value={inputs.secondName.value}
              label="Фамилия"
              name="secondName"
            />
            <Input
              onChange={setInput}
              value={inputs.phone.value}
              label="Телефон"
              type="tel"
              name="phone"
            />
            <Input
              onChange={setInput}
              type="password"
              value={inputs.password.value}
              label="Пароль"
              name="password"
            />
            <Input
              onChange={setInput}
              type="password"
              value={inputs.rePassword.value}
              label="Повтор пароля"
              name="rePassword"
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
