import { HTMLInputTypeAttribute, useId } from "react";
import block from "bem-cn";
import {Field, ErrorMessage} from "formik";
import "./Input.css";
import "./ValidationMessage/ValidationMessage.css"

type InputProps = {
  label: string;
  type?: HTMLInputTypeAttribute;
  id?: string;
  className?: string;
  name: string;
  error?: boolean
};

type Mode = "default" | "error";

const b = block("input");

export default function FormikField(props: InputProps) {
  const {
    type = "text",
    className,
    id = useId(),
    label,
    error = false,
    name
  } = props;
  const mode: Mode = error ? "error" : "default"

  return (
    <div className={b.mix(className)}>
    <label htmlFor={id} className={b("label")}>
      {label}
    </label>
    <div className={b("field-wrapper", { mode })}>
      <Field type={type}
             name={name}
             id={id}
             className={b("field", { mode })}
      />
    </div>
    <div className={b("comment")}>
      <ErrorMessage name={name}>{msg => <div className="validation-message">{msg}</div>}</ErrorMessage>
    </div>
  </div>
  );
}
