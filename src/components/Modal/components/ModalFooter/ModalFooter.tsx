import { ReactNode } from "react";
import "./ModalFooter.css";

type ModalFooterProps = {
  children: ReactNode;
};

export default function ModalFooter(props: ModalFooterProps) {
  const { children } = props;

  return (
    <div className="modal-footer">
      { children }
    </div>
  );
}
