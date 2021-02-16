import capitalize from 'lodash/capitalize';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from '~/api';
import { Comment, PageLayout } from '~/components/Shared';
import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { Box, Button, FlexLayout, LoadingSpinner, Text } from '~/ui';
import { showToast } from '~/ui/components/Toast';

function PostViewPage({ message }) {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [showComments, setShowComments] = useState(true);

  useConsoleLog(message);

  useEffect(() => {
    getPost(postId)
      .then((res) => setPost(res))
      .catch(() => showToast('Something went wrong. Please try again!'))
      .finally(() => setIsLoading(false));
  }, []);

  const { body, comments, user } = post;

  return isLoading ? (
    <FlexLayout justifyContent="center" flexGrow="1">
      <LoadingSpinner color="red-500" size="xl" />
    </FlexLayout>
  ) : (
    <PageLayout hasBack title={post.title}>
      <FlexLayout flexDirection="column" space={6}>
        <Text color="red-500" variant="m-spaced-bold">
          {user.name}
        </Text>
        <Box bg="gray-500" sx={{ height: '1px' }} />
        <Text variant="l-spaced-bold">{capitalize(body)}</Text>
        <Box bg="gray-500" sx={{ height: '1px' }} />
        <Button
          iconRight={showComments ? 'chevronUp' : 'chevronDown'}
          size="s"
          text="Comments"
          variant="link"
          onClick={() => setShowComments(!showComments)}
        />
        {showComments && (
          <FlexLayout flexDirection="column" space={4}>
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </FlexLayout>
        )}
      </FlexLayout>
    </PageLayout>
  );
}

export default withMessage(PostViewPage);
