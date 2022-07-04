import { CenterPageLayout } from 'components/Layouts/CenterPageLayout/CenterPageLayout';
import Modal from 'components/Modal/Modal';
import {useAppSelector} from 'hooks/use-app-selector';
import {getTopics, selectTopics} from 'store/forum';
import {RootState} from 'store/types';
import {useAppDispatch} from 'hooks/use-app-dispatch';
import {useEffect} from 'react';
import {TopicItem} from './TopicItem';
import "./ListForumPage.css"
import {PATHS} from '../../Routes/paths';
import CustomLink from '../../components/CustomLink/CustomLink';

export function ListForumPage() {
  const topic = useAppSelector(selectTopics);
  const topicLoadingStatus = useAppSelector(
    (state: RootState) => state.topics.status
  );
  const error = useAppSelector((state: RootState) => state.topics.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopics());
  }, [dispatch]);

  let content;

  if (topicLoadingStatus === "loading") {
    content = "Loading...";
  } else if (topicLoadingStatus === "succeeded") {
    if (topic && topic.topics && topic.topics.length > 0) {
      content = topic.topics.map(itemTopic => <TopicItem topic={itemTopic} />);
    } else {
      content = <p>123</p>;
    }
  } else if (topicLoadingStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <CenterPageLayout>
      <Modal className="modal-forum">
        <Modal.Header title="Форум" />
        <Modal.Content>
          {content}
        </Modal.Content>
        <Modal.Footer>
          <CustomLink to={PATHS.START} mode="primary">
            На главную
          </CustomLink>
        </Modal.Footer>
      </Modal>
    </CenterPageLayout>
  )
}
