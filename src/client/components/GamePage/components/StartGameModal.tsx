import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import Modal from "components/Modal/Modal";

type StartGameModalProps = {
  isOpen: boolean;
  handleNewGame: () => void;
};

export function StartGameModal(props: StartGameModalProps) {
  const { isOpen, handleNewGame } = props;

  return <>
          {isOpen &&
          <Modal className="game-page__modal">
            <Modal.Header title="Добро пожаловать в игру Тетрис!" />
            <Modal.Content>
              <p className="game-page__modal-text">
                В этой игре нужно выкладывать ряды из падающих фигур. Для управления
                используйте клавиши:{" "}
              </p>
              <p className="game-page__modal-text">
                ◀️▶️[стрелки влево-вправо] - для перемещения фигуры
              </p>
              <p className="game-page__modal-text">
                ️🔼️⏹️️[стрелку вверх и пробел] - для поворота фигуры
              </p>
              <p className="game-page__modal-text">
                🔽[стрелку вниз] - для быстрого перемещения фигуры вниз
              </p>
            </Modal.Content>
            <Modal.Footer>
              <ButtonsGroup>
                <Button mode="primary" onClick={handleNewGame}>
                  Старт
                </Button>
              </ButtonsGroup>
            </Modal.Footer>
          </Modal>}
        </>

}
