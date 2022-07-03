import { User } from "./user";

export interface TopicInDB {
  id: number;
  title: string;
  user_id: number;
  content: string;
}

export type Topic = Omit<TopicInDB, "id" | "user_id"> & {
  user: User;
};

export type NewTopicDB = Omit<TopicInDB, "id">;
