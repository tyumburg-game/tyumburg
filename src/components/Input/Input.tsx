import { ChangeEvent, ReactNode, useId } from "react";
import block from "bem-cn";
import "./Input.css";

type InputProps = {
  value: string;
  label: string;
  type?: "text" | "number";
  mode?: "default" | "error";
  id?: string;
  classNames?: string | string[];
  name?: string;
  comment?: ReactNode;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

const b = block("input");

export default function Input(props: InputProps) {
  const {
    value,
    type = "text",
    classNames = [],
    mode = "default",
    id = useId(),
    label,
    comment,
    name = useId(),
    onChange,
  } = props;
  return (
    <div className={b.mix(classNames)}>
      {label && (
        <label htmlFor={id} className={b("label")}>
          {label}
        </label>
      )}
      <div className={b("field-wrapper", { mode })}>
        <input
          value={value}
          id={id}
          onChange={onChange}
          type={type}
          name={name}
          className={b("field", { mode })}
        />
      </div>
      {comment && <div className={b("comment")}>{comment}</div>}
    </div>
  );
}
