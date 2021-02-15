import { useEffect, useState } from 'react';

import { getPosts } from '~/api';
import { PageLayout } from '~/components/Shared';
import { FlexLayout, LoadingSpinner, Text, TextInput } from '~/ui';
import { showToast } from '~/ui/components/Toast';

import Pagination from './Pagination';
import Post from './Post';

const PAGE_SIZE = 10;

function PostsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [filterValue, setFilterValue] = useState('');
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res))
      .catch(() => showToast('Something went wrong. Please try again!'))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredPosts = posts.filter((post) => post.user.name.toLowerCase().includes(filterValue.toLowerCase()));

  const currentPosts = filteredPosts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return isLoading ? (
    <FlexLayout justifyContent="center" flexGrow="1">
      <LoadingSpinner color="red-500" size="xl" />
    </FlexLayout>
  ) : (
    <PageLayout title="Posts">
      <TextInput
        placeholder="Filter posts by user"
        sx={{ mb: 12 }}
        value={filterValue}
        variant="searchable"
        onChange={(value) => {
          setFilterValue(value);
          if (currentPage !== 1) {
            setCurrentPage(1);
          }
        }}
      />
      <>
        {currentPosts.length ? (
          <FlexLayout flexDirection="column" space={10}>
            <FlexLayout flexDirection="column" space={6}>
              {currentPosts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </FlexLayout>
            <Pagination
              forcePage={currentPage}
              pageCount={Math.ceil(filteredPosts.length / PAGE_SIZE)}
              onPageChange={setCurrentPage}
            />
          </FlexLayout>
        ) : (
          <Text color="red-500" variant="m-spaced-bold">
            No posts match your filter.
          </Text>
        )}
      </>
    </PageLayout>
  );
}

export default PostsPage;
