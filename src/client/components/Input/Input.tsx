import { ChangeEvent, HTMLInputTypeAttribute, ReactNode, useId } from "react";
import block from "bem-cn";
import "./Input.css";

type InputProps = {
  value: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  mode?: "default" | "error";
  id?: string;
  className?: string;
  name?: string;
  comment?: ReactNode;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

const b = block("input");

export default function Input(props: InputProps) {
  const {
    value,
    type = "text",
    disabled = false,
    className,
    mode = "default",
    id = useId(),
    label,
    comment,
    name = useId(),
    onChange,
  } = props;

  return (
    <div className={b.mix(className)}>
      <label htmlFor={id} className={b("label")}>
        {label}
      </label>
      <div className={b("field-wrapper", { mode })}>
        <input
          value={value}
          id={id}
          onChange={onChange}
          disabled={disabled}
          type={type}
          name={name}
          className={b("field", { mode, disabled })}
        />
      </div>
      <div className={b("comment")}>{comment ?? null}</div>
    </div>
  );
}
