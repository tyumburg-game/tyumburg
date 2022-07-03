import { CenterPageLayout } from 'components/Layouts/CenterPageLayout/CenterPageLayout';
import Modal from 'components/Modal/Modal';
import {useAppSelector} from 'hooks/use-app-selector';
import {getTopic, selectTopic} from 'store/forum';
import {RootState} from 'store/types';
import {useAppDispatch} from 'hooks/use-app-dispatch';
import {useEffect} from 'react';

export function ListForumPage() {
  const topic = useAppSelector(selectTopic);
  const topicLoadingStatus = useAppSelector(
    (state: RootState) => state.topic.status
  );
  const error = useAppSelector((state: RootState) => state.user.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopic());
  }, [dispatch]);

  let content;

  if (topicLoadingStatus === "loading") {
    content = "Loading...";
  } else if (topicLoadingStatus === "succeeded") {
    console.log(topic)
    content = <p>test</p>;
  } else if (topicLoadingStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <CenterPageLayout>
      <Modal>
        <Modal.Header title="Форум" />
        <Modal.Content>
          ${content}
        </Modal.Content>
      </Modal>
    </CenterPageLayout>
  )
}
