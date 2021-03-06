import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import Input from "components/Input/Input";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";

type EditProfileInputName =
  | "displayName"
  | "login"
  | "phone"
  | "firstName"
  | "secondName"
  | "email";
type EditProfileInputState = {
  value: string;
  isValid?: boolean;
};
type EditProfileInputs = Record<EditProfileInputName, EditProfileInputState>;

export function EditProfilePage() {
  const [inputs, setInputs] = useState<EditProfileInputs>({
    displayName: {
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // TODO: Валидация и редактирование профиля.
  };

  return (
    <CenterPageLayout>
      <form action="#" className="sign-up-page__form" onSubmit={handleSubmit}>
        <Modal fixed={false}>
        <Modal.Header title="Редактировать аккаунт" />
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
            value={inputs.displayName.value}
            label="Имя в чате"
            name="display_name"
          />
          <Input
            onChange={setInput}
            value={inputs.phone.value}
            label="Телефон"
            type="tel"
            name="phone"
          />
        </Modal.Content>
        <Modal.Footer>
          <ButtonsGroup>
            <CustomLink to={PATHS.PROFILE} mode="secondary">
              Отменить
            </CustomLink>
            <Button type="submit" mode="primary">
              Сохранить изменения
            </Button>
          </ButtonsGroup>
          </Modal.Footer>
        </Modal>
      </form>
    </CenterPageLayout>
);
}
