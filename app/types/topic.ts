import { User } from "./user";

export interface TopicInDB {
  id: number;
  title: string;
  author_id: number;
  content: string;
}

export type Topic = Omit<TopicInDB, "id" | "author_id"> & {
  author: User;
};

export type NewTopicDB = Omit<TopicInDB, "id">;
