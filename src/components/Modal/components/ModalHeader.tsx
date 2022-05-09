import { ReactNode } from "react";

type ModalHeaderProps = {
  title?: string;
  children?: ReactNode;
};

export default function ModalHeader(props: ModalHeaderProps) {
  const { children, title } = props;

  return (
    <div className="modal__header">
      {children ? children : <div className="modal__title">{title}</div>}
    </div>
  );
}
