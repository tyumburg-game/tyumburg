import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Слишком короткий логин!")
    .max(50, "Слишком длинный логин!")
    .required("Логин обязательное поле"),
  firstName: Yup.string()
    .min(2, "Слишком короткое имя!")
    .max(50, "Слишком длинное имя!")
    .required("Имя обязательное поле"),

  secondName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Слишком длинная фамилия!")
    .required("Фамилия обязательное поле"),

  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Пароль обязательное поле")
    .min(4, "Пароль слишком короткий - должен быть больше 4 символов"),

  rePassword: Yup.string()
    .required('Повторить пароль обязательно')
    .oneOf([Yup.ref('password'), null], "Пароли не совпадают"),

  phone: Yup.string()
    .required("Телефон вводить обязательно")
    .matches(
      /^((\+7|7|8)+([0-9]){10})$/,
      "Введите корректный телефон"
    ),
});
