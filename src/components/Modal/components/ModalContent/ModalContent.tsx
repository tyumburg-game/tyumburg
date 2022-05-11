import { ReactNode } from "react";
import "./ModalContent.css";

type ModalContentProps = {
  children?: ReactNode;
};

export default function ModalContent(props: ModalContentProps) {
  const { children } = props;

  return (
    <div className="modal-content">
      { children }
    </div>
  );
}
