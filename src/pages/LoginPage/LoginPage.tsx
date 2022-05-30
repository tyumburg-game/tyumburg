import { useCallback, useState } from "react";
import { Form, Formik } from "formik";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";
import InputField from "components/InputField/InputField";
import { signInSchema } from "utils/validationFields";
import { useActions } from "hooks/use-actions";
import { SignInRequestData } from "api/auth/auth-api.types";

export function LoginPage() {
  const [inputs] = useState<SignInRequestData>({
    login: "",
    password: "",
  });

  const { signIn } = useActions();

  const onSubmit = useCallback(
    (values: SignInRequestData) => {
      signIn(values);
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
