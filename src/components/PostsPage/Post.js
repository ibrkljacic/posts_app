import capitalize from 'lodash/capitalize';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Comment } from '~/components/Shared';
import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { Button, FlexLayout, Text, theme } from '~/ui';

function Post({ message, post }) {
  const history = useHistory();
  const [showComments, setShowComments] = useState(false);

  useConsoleLog(message);

  const { body, comments, id, title, user } = post;

  return (
    <FlexLayout flexDirection="column" key={id} p={4} space={6} sx={{ boxShadow: 'depth-1' }}>
      <FlexLayout flexDirection="column" space={4}>
        <Text
          variant="2xl-spaced-bold"
          sx={{ '&:hover': { textDecoration: `underline ${theme.colors['red-500']}` } }}
          onClick={() => history.push(`/post/${id}`)}
        >
          {capitalize(title)}
        </Text>
        <Text color="red-500" variant="m-spaced-bold" sx={{ flexShrink: '0' }}>
          {user.name}
        </Text>
      </FlexLayout>
      <Text variant="m-spaced-bold" sx={{ hyphens: 'auto' }}>
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
          <FlexLayout flexDirection="column" space={4} p={2}>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </FlexLayout>
        )}
      </FlexLayout>
    </FlexLayout>
  );
}

export default withMessage(Post);
