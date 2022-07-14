import { useCallback, useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useActions } from "react-redux-actions-hook";
import { useAppDispatch } from "hooks/use-app-dispatch";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";
import InputField from "components/InputField/InputField";
import { signInSchema } from "utils/validationFields";
import { SignInRequestData } from "api/auth/auth-api.types";
import { signIn } from "store/auth";
import { notificationsActions } from "store/notifications";
import { oAuthApi } from "api/oauth/api";
import { OAuthPaths } from "api/oauth/paths";
import "./LoginPage.css";

export function LoginPage() {
  const [inputs] = useState<SignInRequestData>({
    login: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setNotification } = useActions(notificationsActions);

  const onOAuth = useCallback(async () => {
    try {
      const result = await oAuthApi.getServiceId();

      if (result) {
        window.location.replace(
          `${OAuthPaths.providerURL}&client_id=${result.service_id}&redirect_uri=${OAuthPaths.redirectURI}`
        );
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const onSubmit = useCallback(
    async (values: SignInRequestData) => {
      try {
        await dispatch(signIn(values)).unwrap();
        navigate(PATHS.START);
      } catch (e: unknown) {
        if (typeof e === "string") {
          setNotification({ message: e });
        } else {
          setNotification({ message: "Unable to log in" });
        }
      }
    },
    [inputs]
  );

  return (
    <CenterPageLayout>
      <Formik
        initialValues={inputs}
        validationSchema={signInSchema}
        onSubmit={onSubmit}
      >
        <Form className="login-page__form">
          <Modal fixed={false}>
            <Modal.Header title="Вход" />
            <Modal.Content>
              <InputField type="text" label="Логин" name="login" />
              <InputField type="password" label="Пароль" name="password" />
              <Button
                className="login-page__button-yandex"
                onClick={onOAuth}
                mode="secondary"
              >
                войти через Яндекс
              </Button>
            </Modal.Content>
            <Modal.Footer>
              <ButtonsGroup>
                <CustomLink to={PATHS.SIGN_UP} mode="secondary">
                  Нет аккаунта
                </CustomLink>
                <Button type="submit" mode="primary">
                  Войти
                </Button>
              </ButtonsGroup>
            </Modal.Footer>
          </Modal>
        </Form>
      </Formik>
    </CenterPageLayout>
  );
}
