import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { FC } from "react";

const Main: FC = () => {
  return (
    <>
      <Modal>
        <Modal.Header title="Меню"></Modal.Header>
        <Modal.Content>
          <Button
            mode="primary"
            onClick={(event) => console.log("click", event)}
          >
            Primary
          </Button>
        </Modal.Content>
        <Modal.Footer>
          <Button
            mode="primary"
            onClick={(event) => console.log("click", event)}
          >
            Primary
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Main;
