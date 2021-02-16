import PT from 'prop-types';
import React from 'react';
import { Box as ThemeBox } from 'theme-ui';

import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { styles } from '~/ui';

function Box({ isDisabled = false, message, myRef, sx = {}, ...rest }) {
  useConsoleLog(message);

  const clickableStyles = rest.onClick ? styles.interactions.clickable : {};

  return <ThemeBox disabled={isDisabled} ref={myRef} sx={{ ...clickableStyles, ...sx }} {...rest} />;
}

Box.propTypes = {
  isDisabled: PT.bool,
  sx: PT.object,
};

const BoxWithMessage = withMessage(Box);

export default React.forwardRef((props, ref) => {
  return <BoxWithMessage {...props} myRef={ref} />;
});

// storybook exports
export const BoxComponent = Box;
