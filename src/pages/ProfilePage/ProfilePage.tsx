import { FormEventHandler, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";
import { useAppSelector } from "hooks/use-app-selector";
import { useAppDispatch } from "hooks/use-app-dispatch";
import { fetchUser, selectUser } from "store/user";
import { RootState } from "store/types";
import { FormFields } from "pages/ProfilePage/FormFields";
import { getUserFields } from "pages/ProfilePage/helpers/get-user-fields";
import { logout } from "store/auth";

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
    dispatch(logout());
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
    content = <FormFields inputs={getUserFields(user.user)} />;
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
