import {BaseAPI} from "../base-api";
import {TopicForum} from "./forum-api.types";
import {env} from "../../constants/env"

class ForumAPI extends BaseAPI {
  constructor() {
    super("", env.HOST_API_2);


  }

  getTopics() {
    console.log("env.HOST_API_2", env.HOST_API_2)
    return this.instance.get<Array<TopicForum>>("/api/topics?limit=10", {});
  }

  getTopic(id: number) {
    return this.instance.get<TopicForum>(`/api/topics/id/${id}`, {});
  }
}

export const forumApi = new ForumAPI();
