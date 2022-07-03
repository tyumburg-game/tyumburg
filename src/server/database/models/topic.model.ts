import { DataTypes } from "sequelize";

const TOPIC_MODEL_NAME = "topic";
const TopicModelParams = {
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
  user_id: {
    type: DataTypes.INTEGER,
  },
};

export { TOPIC_MODEL_NAME, TopicModelParams };
