/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { noop } from "lodash";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import Input from "components/Input/Input";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";
import { selectUser, selectUserLoading } from "store/auth/selectors";
import { authActions } from "store/auth/actions";
import { User } from "api/auth/auth-api.types";
import { Nullable } from "types/util";

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

export function ProfilePage() {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectUserLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [inputs, setInputs] = useState<ProfileInputs>(setUserFields(user));

  useEffect(() => {
    dispatch(authActions.getUser());
  }, [dispatch]);

  useEffect(() => {
    if (user !== null) {
      setInputs(setUserFields(user));
    }
  }, [user]);

  const handleLogoutClick: VoidFunction = () => {
    navigate(PATHS.SIGN_IN);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Валидация и редактирование профиля.");
  };

  return (
    <CenterPageLayout>
      <form action="#" className="sign-up-page__form" onSubmit={handleSubmit}>
        <Modal fixed={false}>
          <Modal.Header title="Редактировать аккаунт" />
          {isLoading && (
            <Modal.Content>
              <div>Loading</div>
            </Modal.Content>
          )}
          {!isLoading && (
            <Modal.Content>
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
            </Modal.Content>
          )}
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
