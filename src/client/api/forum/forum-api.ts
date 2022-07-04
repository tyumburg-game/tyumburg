import {BaseAPI} from '../base-api';
import {TopicForum} from './forum-api.types';

class ForumAPI extends BaseAPI {
  constructor() {
    super("", "http://localhost:3000");
  }

  getTopics() {
    return this.instance.get<Array<TopicForum>>("/api/topics?limit=10", {});
  }

  getTopic(id: number) {
    return this.instance.get<TopicForum>(`/api/topics/id/${id}`, {});
  }
}

export const forumApi = new ForumAPI();
