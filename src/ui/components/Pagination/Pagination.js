import range from 'lodash/range';
import PT from 'prop-types';

import { FlexLayout, Text } from '~/ui';

function Pagination({ forcePage, pageCount, onPageChange = () => {} }) {
  const pageNumbers = range(1, pageCount + 1);

  return (
    <FlexLayout alignItems="center" flexWrap="wrap" justifyContent="center" space={2}>
      {pageNumbers.map((page) => {
        const isActive = page === forcePage;

        return (
          <FlexLayout
            alignItems="center"
            bg={isActive ? 'red-500' : 'gray-500'}
            color={isActive ? 'gray-400' : 'black'}
            flexShrink="0"
            justifyContent="center"
            key={page}
            m={1}
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

Pagination.propTypes = {
  forcePage: PT.number.isRequired,
  pageCount: PT.number.isRequired,
  onPageChange: PT.func,
};

export default Pagination;
