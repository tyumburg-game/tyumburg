import { ReactNode } from "react";

type ModalFooterProps = {
  children: ReactNode;
};

export default function ModalFooter(props: ModalFooterProps) {
  const { children } = props;

  return (
    <div className="modal__footer">
      { children }
    </div>
  );
}
