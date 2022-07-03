import Button from "components/Button/Button";
import { ButtonsGroup } from "components/ButtonsGroup/ButtonsGroup";
import CustomLink from "components/CustomLink/CustomLink";
import Modal from "components/Modal/Modal";
import { PATHS } from "Routes/paths";

type GameOverModalProps = {
  score: number;
  isOpen: boolean;
  handleNewGame: () => void;
};

export function GameOverModal(props: GameOverModalProps) {
  const { score, isOpen, handleNewGame } = props;

  return <>
          {isOpen &&
          <Modal className="game-page__modal">
            <Modal.Header title="Игра окончена!" />
            <Modal.Content>
              <p className="game-page__modal-text">Ваш счёт: {score}</p>
            </Modal.Content>
            <Modal.Footer>
              <ButtonsGroup>
                <Button mode="primary" onClick={handleNewGame}>
                  Заново
                </Button>
                <CustomLink to={PATHS.START} mode="secondary">
                  На главную
                </CustomLink>
              </ButtonsGroup>
            </Modal.Footer>
          </Modal>}
        </>

};
