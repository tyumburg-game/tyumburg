# tyumburg

## npm-пакеты
* Пакеты устанавливаются с флагом `-E` (`--save-exact`): https://docs.npmjs.com/cli/v8/commands/npm-install#save-exact

## Политики по веткам
* `main` - целевая ветка, в которую мерджится код в конце спринта из `sprint_*`-веток
  * **Требования**
    * 2 аппрува
* `sprint_*` - целевые ветки для каждого спринта. Отводятся от `main` в начале спринта
  * **Требования**
    * 1 аппрув
* `task/tyum-X-*` - ветки, в которых выполяется работа. `tyum-X` соответствует номеру задачи в Trello: https://trello.com/b/6B73GE3O/practicum-game. Например, `task/tyum-3-prettier` - настройка Prettier. 
