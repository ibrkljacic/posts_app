import React from 'react';

import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { FlexLayout, Text } from '~/ui';

const sizesMap = {
  m: '560px',
};

function Toast({ message, size = 'm', text }) {
  useConsoleLog(message);

  return (
    <FlexLayout bg="red-500" p={4} sx={{ borderRadius: 's', width: sizesMap[size] }}>
      <Text color="white" variant="m-spaced">
        {text}
      </Text>
    </FlexLayout>
  );
}

export default withMessage(Toast);
