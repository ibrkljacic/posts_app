import capitalize from 'lodash/capitalize';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from '~/api';
import { Comment, LoadingState, PageLayout } from '~/components/Shared';
import { Button, Divider, FlexLayout, Text, Toast } from '~/ui';

function PostViewPage() {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [showComments, setShowComments] = useState(true);

  useEffect(() => {
    getPost(postId)
      .then((res) => setPost(res))
      .catch(() => Toast.show('Something went wrong. Please try again!'));
  }, [postId]);

  if (!post) {
    return <LoadingState />;
  }

  const { body, comments, title, user } = post;

  return (
    <PageLayout hasBack title={title}>
      <FlexLayout flexDirection="column" space={6}>
        <Text color="red-500" variant="m-spaced-bold">
          {user.name}
        </Text>
        <Divider />
        <Text variant="l-spaced-bold">{capitalize(body)}</Text>
        <Divider />
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

export default PostViewPage;
