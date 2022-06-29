import { shuffle } from "lodash";
import { NewUser } from "../types/user";
import { getRandomInt } from "../utils/values-generators";
import { NewTopicDB } from "../types/topic";
import { words, sentences } from "../constants/text-examples";
import { models } from "./models";
import { TopicModel } from "./models/topic.model";

const USERS_COUNT = 10;
const TOPICS_COUNT = 20;
const { UserModel } = models;

const fillDatabase = async (): Promise<void> => {
  await UserModel.sync({ force: true });
  await TopicModel.sync({ force: true });
  await Promise.all(
    new Array(USERS_COUNT).fill(undefined).map(async () => {
      await UserModel.create(generateUser());
    })
  );
  await Promise.all(
    new Array(TOPICS_COUNT).fill(undefined).map(async () => {
      await TopicModel.create(generateTopic());
    })
  );
};

function generateUser(): NewUser {
  const [firstName, secondName] = [
    words[getRandomInt(0, words.length)],
    words[getRandomInt(0, words.length)],
  ].map((item) => capitalizeFirstLetter(item));

  return {
    avatar: words[getRandomInt(0, words.length)],
    email: words[getRandomInt(0, words.length)],
    login: words[getRandomInt(0, words.length)],
    phone: words[getRandomInt(0, words.length)],
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
    author_id: getRandomInt(0, USERS_COUNT),
  };
}

function capitalizeFirstLetter(val: string) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

export { fillDatabase };
