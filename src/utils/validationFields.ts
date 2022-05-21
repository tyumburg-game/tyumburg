import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Login is required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  secondName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),

  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),

  rePassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], "Passwords don't match"),

  phone: Yup.string()
    .required("Телефон вводить обязательно")
    .matches(
      /^((\+7|7|8)+([0-9]){10})$/,
      "Введите корректный телефон"
    ),
});
