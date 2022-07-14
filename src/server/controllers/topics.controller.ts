import { TopicModel } from "../database";
import { NewTopicDB, Topic } from "../types/topic";
import { USER_MODEL_NAME } from "../database/models";

const TOPCIS_LIMIT = 20;

async function getTopicById(id: number): Promise<Nullable<Topic>> {
  const topic = await TopicModel.findOne({
    where: { id },
    include: [USER_MODEL_NAME],
    paranoid: false,
    attributes: ["id", "title", "content"],
  });

  return topic != null ? (topic.get() as unknown as Topic) : null;
}

async function createNewTopic(newTopic: NewTopicDB): Promise<NewTopicDB> {
  // @ts-ignore
  return TopicModel.create(newTopic, { returning: true });
}

async function getAllTopics(
  limit: number = TOPCIS_LIMIT
): Promise<Nullable<Topic[]>> {
  const topics = await TopicModel.findAll({
    limit,
    include: [USER_MODEL_NAME],
    paranoid: false,
    attributes: ["id", "title", "content"],
  });

  return topics as unknown as Topic[];
}

const topicsController = {
  getTopicById,
  createNewTopic,
  getAllTopics,
};

export { topicsController };
