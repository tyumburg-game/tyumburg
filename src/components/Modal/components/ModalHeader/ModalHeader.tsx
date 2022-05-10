import { ReactNode } from "react";
import "./ModalHeader.css";

type ModalHeaderProps = {
  title?: string;
  children?: ReactNode;
};

export default function ModalHeader(props: ModalHeaderProps) {
  const { children, title } = props;

  return (
    <div className="modal-header">
      {children ? children : <div className="modal-header__title">{title}</div>}
    </div>
  );
}
