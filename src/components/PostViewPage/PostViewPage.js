import capitalize from 'lodash/capitalize';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from '~/api';
import { PageLayout } from '~/components/Shared';
import { Box, FlexLayout, LoadingSpinner, Text } from '~/ui';
import { showToast } from '~/ui/components/Toast';

function PostViewPage() {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);

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
        <FlexLayout flexDirection="column" space={4}>
          <Text color="red-500" variant="s-spaced-bold">
            Comments
          </Text>
          {comments.map((comment) => {
            const { body, email } = comment;

            return (
              <FlexLayout
                bg="gray-400"
                flexDirection="column"
                key={comment.id}
                space={2}
                p={4}
                sx={{ borderRadius: 'm' }}
              >
                <Text color="gray-600" variant="s-spaced-bold">
                  {email}
                </Text>
                <Text color="black" variant="s-spaced">
                  {body}
                </Text>
              </FlexLayout>
            );
          })}
        </FlexLayout>
      </FlexLayout>
    </PageLayout>
  );
}

export default PostViewPage;
