import { useCallback, useState } from "react";
import { Formik, Form } from "formik";
import { signUpSchema } from "utils/validationFields";
import InputField from "components/InputField/InputField";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";
import { SignUpRequestData } from "api/auth/auth-api.types";
import { useActions } from "hooks/use-actions";

export function SignUpPage() {
  const [inputs] = useState<SignUpRequestData>({
    password: "dsfsdfdfssdf@afsdf.asd",
    re_password: "dsfsdfdfssdf@afsdf.asd",
    login: "dsfsdfdfssdf",
    phone: "+79888765432",
    first_name: "FGHJKLL",
    second_name: "FGHJKLL",
    email: "dsfsdfdfssdf@afsdf.asd",
  });

  const { signUp } = useActions();

  const onSubmit = useCallback(
    (values: SignUpRequestData) => {
      signUp(values);
    },
    [inputs]
  );

  return (
    <CenterPageLayout>
      <Formik
        initialValues={inputs}
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
      >
        <Form className="sign-up-page__form">
          <Modal fixed={false}>
            <Modal.Header title="Регистрация" />
            <Modal.Content>
              <InputField type="text" label="E-mail" name="email" />
              <InputField type="text" label="Логин" name="login" />
              <InputField type="text" label="Имя" name="first_name" />
              <InputField type="text" label="Фамилия" name="second_name" />
              <InputField type="tel" label="Телефон" name="phone" />
              <InputField type="password" label="Пароль" name="password" />
              <InputField
                type="password"
                label="Повтор пароля"
                name="re_password"
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
        </Form>
      </Formik>
    </CenterPageLayout>
  );
}
