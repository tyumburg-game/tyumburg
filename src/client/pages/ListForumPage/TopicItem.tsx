import { TopicForum } from "../../api/forum/forum-api.types";
import {Nullable} from '../../types/util';
import "./TopicItem.css"

export function TopicItem(props: {topic: Nullable<TopicForum>}) {
  const { topic } = props

  if (!topic)
    return <div />

  const d = new Date(topic.user.createdAt);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  const hours = new Intl.DateTimeFormat('ru', { hour: 'numeric' }).format(d);
  const minutes = new Intl.DateTimeFormat('ru', { minute: 'numeric' }).format(d);

  const createdAt = `${da}-${mo}-${ye} ${hours}:${minutes}`

  return (
    <div className="topicItem-wrapper">
      <div>
        <h3 className="h3-title">{topic.title}</h3>
      </div>
      <div>
        <p>{topic.content}</p>
      </div>
      <ul className="topicItem-meta">
        <li>Author: {topic.user.first_name} {topic.user.display_name}</li>
        <li>Created: {createdAt}</li>
      </ul>
      <hr/>
    </div>
  )
}
