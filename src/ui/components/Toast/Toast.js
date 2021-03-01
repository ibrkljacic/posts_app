import PT from 'prop-types';

import { FlexLayout, Text } from '~/ui';

const sizesMap = {
  m: '560px',
};

function Toast({ size = 'm', text }) {
  return (
    <FlexLayout bg="red-500" p={4} sx={{ borderRadius: 's', width: sizesMap[size] }}>
      <Text color="white" variant="m-spaced">
        {text}
      </Text>
    </FlexLayout>
  );
}

Toast.propTypes = {
  size: PT.oneOf(Object.keys(sizesMap)),
  text: PT.string.isRequired,
};

export default Toast;
