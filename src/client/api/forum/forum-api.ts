import {BaseAPI} from '../base-api';
import {TopicForum} from './forum-api.types';

class ForumAPI extends BaseAPI {
  constructor() {
    super("", "http://localhost:3000");
  }

  getTopics() {
    return this.instance.get<TopicForum>("/api/topics/id/3", {});
  }
}

export const forumApi = new ForumAPI();
