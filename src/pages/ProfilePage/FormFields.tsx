import { noop } from "lodash";
import Input from "components/Input/Input";
import { ProfileInputs } from "pages/ProfilePage/types";

export function FormFields(props: { inputs: ProfileInputs }) {
  const { inputs } = props;

  return (
    <>
      <Input
        onChange={noop}
        value={inputs.email}
        label="Почта"
        disabled
        type="email"
        name="email"
      />
      <Input
        onChange={noop}
        value={inputs.login}
        label="Логин"
        disabled
        name="login"
      />
      <Input
        onChange={noop}
        value={inputs.first_name}
        label="Имя"
        disabled
        name="firstName"
      />
      <Input
        onChange={noop}
        value={inputs.second_name}
        label="Фамилия"
        disabled
        name="secondName"
      />
      <Input
        onChange={noop}
        value={inputs.display_name}
        label="Имя в чате"
        disabled
        name="display_name"
      />
      <Input
        onChange={noop}
        value={inputs.phone}
        label="Телефон"
        disabled
        type="tel"
        name="phone"
      />
    </>
  );
}
