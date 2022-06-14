# tyumburg

## Описание ([ссылка на проект](https://tyumburg.herokuapp.com/))

- Данный проект является практическим, для повышения навыков работы с React
  библиотекой
- Основная цель создать игру Тетрис на Canvas.
- Привязать к игре: Регистрацию, Авторизацию, Профиль (вывод данных),
  Редактирование профиля, Изменить пароль от аккаунта, Логаут.
- Все страницы переходят без перезагрузки как SPA

на данный момент скомпилированная версия сайта находится на публичном домене

[ссылка на проект](https://tyumburg.herokuapp.com/)

## Установка

Как установить проект локально:

- `npm run start` — запуск версии для разработчика
- `npm run build` — запуск версии для сборки проекта

## Дизайн проекта

[ссылка на дизайн Игры Тетрис на ресурсе figma](https://www.figma.com/file/BmdOMrXU10u4YoTBCuW6IR/Tymburg-game)

## npm-пакеты

* Пакеты устанавливаются с
  флагом `-E` (`--save-exact`): https://docs.npmjs.com/cli/v8/commands/npm-install#save-exact

## Политики по веткам

* `main` - целевая ветка, в которую мерджится код в конце спринта из `sprint_*`
  -веток
  * **Требования**
    * 2 аппрува
* `sprint_*` - целевые ветки для каждого спринта. Отводятся от `main` в начале
  спринта
  * **Требования**
    * 1 аппрув
* `task/tyum-X-*` - ветки, в которых выполяется работа. `tyum-X` соответствует
  номеру задачи в Trello: https://trello.com/b/6B73GE3O/tyumburg-game.
  Например, `task/tyum-3-prettier` - настройка Prettier.

## Environments

В корне проекта создать файл `.evn` с переменным окружения.
Структура файла:

* `SSR_PORT=8080`
* `SSR_PORT_INTERNAL=3000`
* `POSTGRES_PORT=8765`
* `POSTGRES_USER=postgres`
* `POSTGRES_PASSWORD=newPassword`
