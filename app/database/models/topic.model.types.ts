import {
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelCtor,
} from "sequelize";
import { TopicInDB } from "../../types/topic";

interface TopicDBModel
  extends Model<
      InferAttributes<TopicDBModel>,
      InferCreationAttributes<TopicDBModel>
    >,
    TopicInDB {}

type ITopicModel = ModelCtor<TopicDBModel>;

export { TopicDBModel, ITopicModel };
