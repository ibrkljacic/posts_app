import range from 'lodash/range';

import { FlexLayout, Text } from '~/ui';

function Pagination({ forcePage, pageCount, onPageChange }) {
  const pageNumbers = range(1, pageCount + 1);

  return (
    <FlexLayout alignItems="center" justifyContent="center" space={2}>
      {pageNumbers.map((page) => {
        const isActive = page === forcePage;

        return (
          <FlexLayout
            alignItems="center"
            bg={isActive ? 'red-500' : 'gray-500'}
            color={isActive ? 'gray-400' : 'black'}
            justifyContent="center"
            key={page}
            p={1}
            sx={{ borderRadius: 's', height: '32px', width: '32px' }}
            onClick={() => onPageChange(page)}
          >
            <Text>{page}</Text>
          </FlexLayout>
        );
      })}
    </FlexLayout>
  );
}

export default Pagination;
