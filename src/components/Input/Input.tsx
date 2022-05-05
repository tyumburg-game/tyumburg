import block from "bem-cn";
import "./Input.css";

const b = block("input");

export enum TypesInput {
  Button = "button",
  Checkbox = "checkbox",
  Hidden = "hidden",
  Password = "password",
  Radio = "radio",
  Reset = "reset",
  Submit = "submit",
  Text = "text",
}

export type Event = {
  [k: string]: any
};

type InputProps = {
  type: TypesInput;
  value?: string;
  placeholder?: string;
  mode?: "secondary" | "require";
  classNames?: string | string[];
  onChange(event: Event): void;
  onFocus(event: Event): void;
  onBlur(event: Event): void;
}

export default function Input(props: InputProps) {
  const {
    type = TypesInput.Text,
    value = "",
    placeholder = "",
    mode = "secondary",
    classNames = [],
    onChange,
    onFocus,
    onBlur
  } = props;

  return <input
    type={type}
    value={value}
    placeholder={placeholder}
    className={b({ mode }).mix(classNames)}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
  />
}
