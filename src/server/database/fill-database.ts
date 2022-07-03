import shuffle from "lodash/shuffle";
import { NewUser } from "../types/user";
import { getRandomInt } from "../utils";
import { NewTopicDB } from "../types/topic";
import { words, sentences } from "../constants";
import { TopicModel, UserModel } from "./connect-to-database";

const USERS_COUNT = 10;
const TOPICS_COUNT = 20;

const fillDatabase = async (): Promise<void> => {
  await UserModel.sync({ force: true });
  await TopicModel.sync({ force: true });

  await Promise.all(
    new Array(USERS_COUNT).fill(undefined).map(async () => {
      // @ts-ignore
      await UserModel.create(generateUser());
    })
  );
  await Promise.all(
    new Array(TOPICS_COUNT).fill(undefined).map(async () => {
      // @ts-ignore
      await TopicModel.create(generateTopic());
    })
  );
};

function generateUser(): NewUser {
  const [firstName, secondName] = [
    words[getRandomInt(0, words.length - 1)],
    words[getRandomInt(0, words.length - 1)],
  ].map((item) => capitalizeFirstLetter(item));

  return {
    avatar: words[getRandomInt(0, words.length - 1)],
    email: words[getRandomInt(0, words.length - 1)],
    login: words[getRandomInt(0, words.length - 1)],
    phone: words[getRandomInt(0, words.length - 1)],
    display_name: [firstName, secondName].join(" "),
    first_name: firstName,
    second_name: secondName,
  };
}

function generateTopic(): NewTopicDB {
  return {
    title: capitalizeFirstLetter(
      sentences[getRandomInt(0, sentences.length - 1)]
    ),
    content: shuffle(sentences).slice(0, 4).join(". ").slice(0, 253),
    user_id: getRandomInt(1, USERS_COUNT - 1),
  };
}

function capitalizeFirstLetter(val: string) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

export { fillDatabase };
