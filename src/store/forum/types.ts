import { Nullable } from "types/util";
import { TopicForum } from "api/forum/forum-api.types";

export type ForumState = {
  topic: Nullable<TopicForum>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: Nullable<string>;
};
