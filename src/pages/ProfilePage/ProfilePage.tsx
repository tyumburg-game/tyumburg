import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "components/Modal/Modal";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import Input from "components/Input/Input";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";

type ProfileInputName =
  | "displayName"
  | "login"
  | "phone"
  | "firstName"
  | "secondName"
  | "email";
type ProfileInputState = {
  value: string;
  isValid?: boolean;
};
type ProfileInputs = Record<ProfileInputName, ProfileInputState>;

export function ProfilePage() {
  const [inputs, setInputs] = useState<ProfileInputs>({
    displayName: {
      value: "chickChick",
    },
    login: {
      value: "loginChik",
    },
    phone: {
      value: "+7(999)444-22-44",
    },
    firstName: {
      value: "Chik",
    },
    secondName: {
      value: "Cirik",
    },
    email: {
      value: "chik.chirik@email.com",
    },
  });

  function setInput(e: ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const ProfileSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Валидация и редактирование профиля.");
  };

  return (
    <CenterPageLayout>
      <form action="#" className="sign-up-page__form" onSubmit={ProfileSubmit}>
        <Modal fixed={false}>
          <Modal.Header title="Редактировать аккаунт" />
          <Modal.Content>
            <Input
              onChange={setInput}
              value={inputs.email.value}
              label="Почта"
              disabled
              type="email"
              name="email"
            />
            <Input
              onChange={setInput}
              value={inputs.login.value}
              label="Логин"
              disabled
              name="login"
            />
            <Input
              onChange={setInput}
              value={inputs.firstName.value}
              label="Имя"
              disabled
              name="firstName"
            />
            <Input
              onChange={setInput}
              value={inputs.secondName.value}
              label="Фамилия"
              disabled
              name="secondName"
            />
            <Input
              onChange={setInput}
              value={inputs.displayName.value}
              label="Имя в чате"
              disabled
              name="display_name"
            />
            <Input
              onChange={setInput}
              value={inputs.phone.value}
              label="Телефон"
              disabled
              type="tel"
              name="phone"
            />
          </Modal.Content>
          <Modal.Footer>
            <ButtonsGroup direction="vertical" className="buttons-group_align-right">
              <CustomLink to={PATHS.EDIT_PROFILE} mode="secondary">
                Изменить информацию
              </CustomLink>
              <CustomLink to={PATHS.PASSWORD_CHANGE} mode="secondary">
                Изменить пароль
              </CustomLink>
              <CustomLink to={PATHS.START} mode="dangerous">
                Выйти
              </CustomLink>
            </ButtonsGroup>
          </Modal.Footer>
        </Modal>
      </form>
    </CenterPageLayout>
  );
}
