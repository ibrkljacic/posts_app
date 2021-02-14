import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, FlexLayout, Text } from '~/ui';

function Comment({ comment }) {
  const { body, email } = comment;

  return (
    <FlexLayout bg="gray-400" flexDirection="column" space={2} p={4}>
      <Text color="gray-600" variant="s-spaced-bold">
        {email}
      </Text>
      <Text color="black" variant="s-spaced">
        {body}
      </Text>
    </FlexLayout>
  );
}

function Post({ post }) {
  const history = useHistory();
  const [showComments, setShowComments] = useState(false);

  const { body, comments, id, title, user } = post;

  return (
    <FlexLayout flexDirection="column" key={id} p={4} space={8} sx={{ boxShadow: 'depth-1-gray' }}>
      <FlexLayout alignItems="flex-start" space={15}>
        <Text
          color="red-500"
          variant="2xl-spaced-bold"
          sx={{ flexGrow: '1' }}
          onClick={() => history.push(`/post/${id}`)}
        >
          {title}
        </Text>
        <Text color="gray-600" variant="m-spaced-bold" sx={{ flexShrink: '0' }}>
          {user.name}
        </Text>
      </FlexLayout>
      <Text variant="m-spaced-bold" sx={{ textIndent: '24px' }}>
        {body}
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

export default Post;
