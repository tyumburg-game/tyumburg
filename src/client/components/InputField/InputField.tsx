import { HTMLInputTypeAttribute, useId } from "react";
import { Field } from "formik";
import Input from "components/Input/Input";
import "../Input/ValidationMessage/ValidationMessage.css"

type InputProps = {
  label: string;
  type?: HTMLInputTypeAttribute;
  id?: string;
  className?: string;
  name: string;
};

type Mode = "default" | "error";

export default function InputField(props: InputProps) {
  const {
    type = "text",
    className,
    id = useId(),
    label,
    name
  } = props;

return (
    <Field name={name}>
      {({field, form: {errors: {[name]: errorName}}}: any) => {
        const mode: Mode = errorName ? "error" : "default"
        const errorMsg = errorName ? errorName.toString() : "";

        return (
          <Input label={label}
                 id={id}
                 mode={mode}
                 value={field.value}
                 name={field.name}
                 className={className}
                 type={type}
                 onChange={field.onChange}
                 comment={<div className="validation-message">{errorMsg}</div>}
        />)
        }
      }
      </Field>
  );
}
