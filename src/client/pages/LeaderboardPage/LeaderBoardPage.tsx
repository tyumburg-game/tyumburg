import Modal from "components/Modal/Modal";
import { PATHS } from "Routes/paths";
import CustomLink from "components/CustomLink/CustomLink";
import "./LeaderboardPage.css"

type Player = {
  login: string;
  firstName: string;
  secondName: string;
  score: number;
};

export function LeaderboardPage() {
  const data: Array<Player> = [
    { login: "u1", firstName: "Вася", secondName: "Иванов", score: 650 },
    { login: "u2", firstName: "Петя", secondName: "Егоров", score: 550 },
    { login: "u3", firstName: "Слава", secondName: "Слава", score: 450 },
    { login: "u4", firstName: "Марина", secondName: "Ильина", score: 250 },
    { login: "u5", firstName: "Даша", secondName: "Малинова", score: 350 },
    { login: "u6", firstName: "Настя", secondName: "Красная", score: 240 },
    { login: "u7", firstName: "Семен", secondName: "Черный", score: 150 },
  ]

  return (
    <Modal>
      <Modal.Header title="Таблица лидеров" />
      <Modal.Content>
        <div className="main-menu leaderboard-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Место</th>
                <th>Имя</th>
                <th>Счет</th>
              </tr>
            </thead>
            <tbody>
              {data.map((player: Player, index: number) =>
                <tr key={player.login}>
                  <td>{index + 1}</td>
                  <td>{`${player.firstName} ${player.secondName}`}</td>
                  <td>{player.score}</td>
                </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </Modal.Content>
      <Modal.Footer className="buttons-group_align-right">
        <CustomLink to={PATHS.START} mode="primary">
          На главную
        </CustomLink>
      </Modal.Footer>
    </Modal>
  );
}
