import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Слишком короткий логин!")
    .max(50, "Слишком длинный логин!")
    .required("Логин обязательное поле"),

  first_name: Yup.string()
    .min(2, "Слишком короткое имя!")
    .max(50, "Слишком длинное имя!")
    .required("Имя обязательное поле"),

  second_name: Yup.string()
    .min(2, "Слишком короткая фамилия!")
    .max(50, "Слишком длинная фамилия!")
    .required("Фамилия обязательное поле"),

  email: Yup.string()
    .email("Введите верный адрес электронной почты")
    .required("Email обязательное поле"),

  password: Yup.string()
    .required("Пароль обязательное поле")
    .min(4, "Пароль слишком короткий - должен быть больше 4 символов"),

  re_password: Yup.string()
    .required("Повторить пароль обязательно")
    .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),

  phone: Yup.string()
    .required("Телефон вводить обязательно")
    .matches(/^((\+7|7|8)+([0-9]){10})$/, "Введите корректный телефон"),
});

export const signInSchema = Yup.object().shape({
  login: Yup.string().required("Логин обязательное поле"),
  password: Yup.string().required("Пароль обязательное поле"),
});
