import capitalize from 'lodash/capitalize';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Comment } from '~/components/Shared';
import { Button, FlexLayout, Text, theme } from '~/ui';

function Post({ post }) {
  const history = useHistory();
  const [showComments, setShowComments] = useState(false);

  const { body, comments, id, title, user } = post;

  return (
    <FlexLayout flexDirection="column" key={id} p={4} space={6} sx={{ boxShadow: 'depth-1' }}>
      <FlexLayout flexDirection="column" space={4}>
        <Text
          sx={{ '&:hover': { textDecoration: `underline ${theme.colors['red-500']}` } }}
          variant="2xl-spaced-bold"
          onClick={() => history.push(`/post/${id}`)}
        >
          {capitalize(title)}
        </Text>
        <Text color="red-500" sx={{ flexShrink: '0' }} variant="m-spaced-bold">
          {user.name}
        </Text>
      </FlexLayout>
      <Text sx={{ hyphens: 'auto' }} variant="m-spaced-bold">
        {capitalize(body)}
      </Text>
      <FlexLayout flexDirection="column" space={2}>
        <Button
          iconLeft={showComments ? 'chevronUp' : 'chevronDown'}
          size="s"
          text={showComments ? 'Hide Comments' : 'Show Comments'}
          variant="link"
          onClick={() => setShowComments(!showComments)}
        />
        {showComments && (
          <FlexLayout flexDirection="column" p={2} space={4}>
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </FlexLayout>
        )}
      </FlexLayout>
    </FlexLayout>
  );
}

export default Post;
