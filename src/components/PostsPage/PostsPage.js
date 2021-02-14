import { useEffect, useState } from 'react';

import { getPosts } from '~/api';
import { PageLayout } from '~/components/Shared';
import { FlexLayout, LoadingSpinner, Text, TextInput } from '~/ui';
import { showToast } from '~/ui/components/Toast';

import Post from './Post';

function PostsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [filterValue, setFilterValue] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res))
      .catch(() => showToast('Something went wrong. Please try again!'))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredPosts = posts.filter((post) => post.user.name.toLowerCase().includes(filterValue.toLowerCase()));
  console.log('filter');
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
      <>
        {filteredPosts.length ? (
          <FlexLayout flexDirection="column" space={6}>
            {filteredPosts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </FlexLayout>
        ) : (
          <Text color="gray-600" variant="m-spaced">
            No posts match your filter.
          </Text>
        )}
      </>
    </PageLayout>
  );
}

export default PostsPage;
