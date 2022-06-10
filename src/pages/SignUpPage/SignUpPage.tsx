import { useCallback, useState } from "react";
import { Formik, Form } from "formik";
import { useActions } from "react-redux-actions-hook";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/use-app-dispatch";
import { signUpSchema } from "utils/validationFields";
import InputField from "components/InputField/InputField";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";
import { SignUpRequestData } from "api/auth/auth-api.types";

import { register } from "store/auth";
import { notificationsActions } from "store/notifications";

export function SignUpPage() {
  const [inputs] = useState<SignUpRequestData>({
    password: "",
    re_password: "",
    login: "",
    phone: "",
    first_name: "",
    second_name: "",
    email: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setNotification } = useActions(notificationsActions);

  const onSubmit = useCallback(
    async (values: SignUpRequestData) => {
      try {
        await dispatch(register(values)).unwrap();
        navigate(PATHS.SIGN_IN);
      } catch (e: unknown) {
        if (typeof e === "string") {
          setNotification({ message: e });
        } else {
          setNotification({ message: "Unable to register" });
        }
      }
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
