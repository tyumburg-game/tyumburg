import Modal from "components/Modal/Modal";
import { PATHS } from "Routes/paths";
import CustomLink from 'components/CustomLink/CustomLink';
import "./LeaderboardPage.css"

export function LeaderboardPage() {
  const data = [
    {firstName: "Вася", secondName: "Иванов", score: 650},
    {firstName: "Петя", secondName: "Егоров", score: 550},
    {firstName: "Слава", secondName: "Слава", score: 450},
    {firstName: "Марина", secondName: "Ильина", score: 250},
    {firstName: "Даша", secondName: "Малинова", score: 350},
    {firstName: "Настя", secondName: "Красная", score: 240},
    {firstName: "Семен", secondName: "Черный", score: 150},
  ]


  return (
    <Modal>
      <Modal.Header title="Таблица лидеров" />
      <Modal.Content>
        <div className="main-menu leaderboard-wrapper">
          <table>
            <tr>
              <th>Место</th>
              <th>Имя</th>
              <th>Счет</th>
            </tr>

              {
                data.map((player, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{`${player.firstName} ${player.secondName}`}</td>
                      <td>{player.score}</td>
                    </tr>
                  )
                })
              }
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
