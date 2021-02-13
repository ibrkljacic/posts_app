import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getPosts } from '~/api';
import { PageLayout } from '~/components/Shared';
import { FlexLayout, LoadingSpinner, Text, TextInput } from '~/ui';
import { showToast } from '~/ui/components/Toast';

function PostsPage() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [filterValue, setFilterValue] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((res) => {
        setPosts(res);
      })
      .catch(() => showToast('Something went wrong. Please try again!'))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <FlexLayout justifyContent="center" flexGrow="1">
      <LoadingSpinner color="red-500" size="xl" />
    </FlexLayout>
  ) : (
    <PageLayout title="Posts">
      <TextInput
        placeholder="Filter posts by user"
        sx={{ mb: 12, width: 'modal-width' }}
        value={filterValue}
        variant="searchable"
        onChange={setFilterValue}
      />
      <FlexLayout flexDirection="column" space={6}>
        {posts.map((post) => {
          const { body, id, userId, title } = post;

          return (
            <FlexLayout
              flexDirection="column"
              key={id}
              p={4}
              space={4}
              sx={{
                boxShadow: 'depth-1',
                '&:hover': {
                  transform: 'scale(1.01)',
                  transition: 'all ease .2s',
                },
              }}
              onClick={() => history.push(`/post/${id}`)}
            >
              <Text color="red-500" variant="xl-spaced-bold">
                {title}
              </Text>
              <Text variant="m-spaced-bold" sx={{ flexGrow: 1 }}>
                {body}
              </Text>
              <Text variant="s-spaced-bold">Author: {userId}</Text>
            </FlexLayout>
          );
        })}
      </FlexLayout>
    </PageLayout>
  );
}

export default PostsPage;
