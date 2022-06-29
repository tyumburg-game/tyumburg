import { DataTypes } from "sequelize";
import { sequelize } from "../static-connection";
import { ITopicModel, TopicDBModel } from "./topic.model.types";

const TOPIC_MODEL_NAME = "Topic";
const TopicModel: ITopicModel = sequelize.define<TopicDBModel>(
  TOPIC_MODEL_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    author_id: {
      type: DataTypes.INTEGER,
    },
  }
);

export { TOPIC_MODEL_NAME, TopicModel };
