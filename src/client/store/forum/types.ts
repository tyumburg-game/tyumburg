import { Nullable } from "types/util";
import { TopicForum } from "api/forum/forum-api.types";

export type ForumState = {
  topics: Array<TopicForum> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: Nullable<string>;
};
