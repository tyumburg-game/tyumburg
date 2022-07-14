import {env} from "../../constants/env"
import {BaseAPI} from "../base-api";
import {TopicForum} from "./forum-api.types";

class ForumAPI extends BaseAPI {
  constructor() {
    super("", env.HOST_API_2);
  }

  getTopics() {
    return this.instance.get<Array<TopicForum>>("/api/topics?limit=10", {});
  }

  getTopic(id: number) {
    return this.instance.get<TopicForum>(`/api/topics/id/${id}`, {});
  }
}

export const forumApi = new ForumAPI();
