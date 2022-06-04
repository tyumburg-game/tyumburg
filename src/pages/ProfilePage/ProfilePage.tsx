import { FormEventHandler, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { noop } from "lodash";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import Input from "components/Input/Input";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";
import { User } from "api/auth/auth-api.types";
import { Nullable } from "types/util";
import { useAppSelector } from "hooks/use-app-selector";
import { useAppDispatch } from "hooks/use-app-dispatch";
import { fetchUser, selectUser } from "store/user";
import { RootState } from "store/types";

type ProfileInputName =
  | "display_name"
  | "login"
  | "phone"
  | "first_name"
  | "second_name"
  | "email";
type ProfileInputs = Record<ProfileInputName, string>;

function setUserFields(user: Nullable<User>): ProfileInputs {
  return {
    display_name: user?.display_name ?? "",

    login: user?.login ?? "",

    phone: user?.phone ?? "",

    first_name: user?.first_name ?? "",

    second_name: user?.second_name ?? "",

    email: user?.email ?? "",
  };
}

function FormFields(props: { inputs: ProfileInputs }) {
  const { inputs } = props;

  return (
    <>
      <Input
        onChange={noop}
        value={inputs.email}
        label="Почта"
        disabled
        type="email"
        name="email"
      />
      <Input
        onChange={noop}
        value={inputs.login}
        label="Логин"
        disabled
        name="login"
      />
      <Input
        onChange={noop}
        value={inputs.first_name}
        label="Имя"
        disabled
        name="firstName"
      />
      <Input
        onChange={noop}
        value={inputs.second_name}
        label="Фамилия"
        disabled
        name="secondName"
      />
      <Input
        onChange={noop}
        value={inputs.display_name}
        label="Имя в чате"
        disabled
        name="display_name"
      />
      <Input
        onChange={noop}
        value={inputs.phone}
        label="Телефон"
        disabled
        type="tel"
        name="phone"
      />
    </>
  );
}

export function ProfilePage() {
  const user = useAppSelector(selectUser);
  const userLoadingStatus = useAppSelector(
    (state: RootState) => state.user.status
  );
  const error = useAppSelector((state: RootState) => state.user.error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoadingStatus === "idle") {
      dispatch(fetchUser());
    }
  }, [userLoadingStatus, dispatch]);

  const handleLogoutClick: VoidFunction = () => {
    navigate(PATHS.SIGN_IN);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Валидация и редактирование профиля.");
  };

  let content;

  if (userLoadingStatus === "loading") {
    content = "Loading...";
  } else if (userLoadingStatus === "succeeded") {
    content = <FormFields inputs={setUserFields(user.user)} />;
  } else if (userLoadingStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <CenterPageLayout>
      <form action="#" className="sign-up-page__form" onSubmit={handleSubmit}>
        <Modal fixed={false}>
          <Modal.Header title="Редактировать аккаунт" />
          <Modal.Content>{content}</Modal.Content>
          <Modal.Footer>
            <ButtonsGroup
              direction="vertical"
              className="buttons-group_align-right"
            >
              <CustomLink to={PATHS.EDIT_PROFILE} mode="secondary">
                Изменить информацию
              </CustomLink>
              <CustomLink to={PATHS.PASSWORD_CHANGE} mode="secondary">
                Изменить пароль
              </CustomLink>
              <Button onClick={handleLogoutClick} mode="dangerous">
                Выйти
              </Button>
            </ButtonsGroup>
          </Modal.Footer>
        </Modal>
      </form>
    </CenterPageLayout>
  );
}
