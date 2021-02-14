import capitalize from 'lodash/capitalize';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Comment } from '~/components/Shared';
import { Button, FlexLayout, Text } from '~/ui';

function Post({ post }) {
  const history = useHistory();
  const [showComments, setShowComments] = useState(false);

  const { body, comments, id, title, user } = post;

  return (
    <FlexLayout flexDirection="column" key={id} p={4} space={8} sx={{ boxShadow: 'depth-1' }}>
      <FlexLayout alignItems="flex-start" justifyContent="space-between" space={10}>
        <Text
          color="red-500"
          variant="2xl-spaced-bold"
          sx={{ '&:hover': { textDecoration: 'underline' } }}
          onClick={() => history.push(`/post/${id}`)}
        >
          {capitalize(title)}
        </Text>
        <Text color="gray-600" variant="m-spaced-bold" sx={{ flexShrink: '0' }}>
          {user.name}
        </Text>
      </FlexLayout>
      <Text textAlign="justify" variant="m-spaced-bold" sx={{ textIndent: '24px' }}>
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

export default Post;
