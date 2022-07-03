import { BaseAPI } from "../base-api";
import { TopicForum } from 'api/forum/forum-api.types';

class ForumAPI extends BaseAPI {
  constructor() {
    super("", "http://localhost:3000");
  }

  getTopics() {
    return this.instance.get<TopicForum>("/api/topics/id/3", {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    });
  }
}

export const forumApi = new ForumAPI();
