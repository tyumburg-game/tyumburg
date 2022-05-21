import { HTMLInputTypeAttribute, ReactNode, useId } from "react";
import block from "bem-cn";
import {Field, FormikProps, FormikValues, ErrorMessage} from "formik";
import "../Input/Input.css";

type InputProps = {
  label: string;
  type?: HTMLInputTypeAttribute;
  id?: string;
  className?: string;
  name: string;
  comment?: ReactNode;
  formik: FormikProps<FormikValues>;
};

type Mode = "default" | "error";

const b = block("input");

export default function FormikField(props: InputProps) {
  const {
    type = "text",
    className,
    id = useId(),
    label,
    comment,
    name,
    formik
  } = props;

  const { errors, touched } = formik;

  const mode: Mode = errors && errors[name] ? "error" : "default"

    console.log(errors && errors[name], "label", label, "comment ->", comment);

  return (
    <div className={b.mix(className)}>
    <label htmlFor={id} className={b("label")}>
      {label}
    </label>
    <div className={b("field-wrapper", { mode })}>
      <Field type={type}
             name={name}
             id={id}
             className={errors.email && touched.email ?
               b("field", { mode }) : b("field", { mode })}
      />
    </div>
    <div className={b("comment")}>
      <ErrorMessage name={name}>{msg => <div>{msg}</div>}</ErrorMessage>
    </div>
  </div>
  );
}
