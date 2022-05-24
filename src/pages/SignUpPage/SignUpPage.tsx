import { useState } from "react";
import {
  Formik,
  Form,
  FormikValues,
} from "formik";
import { signUpSchema } from "utils/validationFields";
import InputField from "components/InputField/InputField";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import { CenterPageLayout } from "components/Layouts/CenterPageLayout/CenterPageLayout";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";

export function SignUpPage() {
  const [inputs] = useState<FormikValues>({
    password: "",
    rePassword: "",
    login: "",
    phone: "",
    firstName: "",
    secondName: "",
    email: "",
  });

  return (
    <CenterPageLayout>
      <Formik
        initialValues={inputs}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        <Form className="sign-up-page__form">
          <Modal fixed={false}>
            <Modal.Header title="Регистарция"/>
            <Modal.Content>
              <InputField
                type="text"
                label="E-mail"
                name="email"
              />
              <InputField
                type="text"
                label="Логин"
                name="login"
              />
              <InputField
                type="text"
                label="Имя"
                name="firstName"
              />
              <InputField
                type="text"
                label="Фамилия"
                name="secondName"
              />
              <InputField
                type="tel"
                label="Телефон"
                name="phone"
              />
              <InputField
                type="password"
                label="Пароль"
                name="password"
              />
              <InputField
                type="password"
                label="Повтор пароля"
                name="rePassword"
              />
            </Modal.Content>
            <Modal.Footer>
              <ButtonsGroup>
                <CustomLink to={PATHS.SIGN_IN} mode="secondary">
                  Уже есть аккаунт?
                </CustomLink>
                <Button type="submit"
                        mode="primary"
                >
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
