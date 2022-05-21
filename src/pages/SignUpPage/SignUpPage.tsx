import { useState } from "react";
import {
  Formik,
  Form,
  FormikProps,
  FormikValues,
} from "formik";
import { validationSchema } from 'utils/validationFields';
import FormikField from "components/FormikField/FormikField";
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
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        {(formik: FormikProps<FormikValues> ) =>
          <Form className="sign-up-page__form">
            <Modal fixed={false}>
              <Modal.Header title="Регистарция" />
              <Modal.Content>
                <FormikField
                  type="email"
                  label="E-mail"
                  name="email"
                  formik={formik}
                />
                <FormikField
                  type="text"
                  label="Логин"
                  name="login"
                  formik={formik}
                />
                <FormikField
                  type="text"
                  label="Имя"
                  name="firstName"
                  formik={formik}
                />
                <FormikField
                  type="text"
                  label="Фамилия"
                  name="secondName"
                  formik={formik}
                />
                <FormikField
                  type="tel"
                  label="Телефон"
                  name="phone"
                  formik={formik}
                />
                <FormikField
                  type="password"
                  label="Пароль"
                  name="password"
                  formik={formik}
                />
                <FormikField
                  type="password"
                  label="Повтор пароля"
                  name="rePassword"
                  formik={formik}
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
        }
      </Formik>
    </CenterPageLayout>
  );
}
