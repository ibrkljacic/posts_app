import PT from 'prop-types';
import React from 'react';
import { Box as ThemeBox } from 'theme-ui';

import { styles } from '~/ui';

function Box({ isDisabled = false, myRef, sx = {}, ...rest }) {
  const clickableStyles = rest.onClick ? styles.interactions.clickable : {};

  return <ThemeBox disabled={isDisabled} ref={myRef} sx={{ ...clickableStyles, ...sx }} {...rest} />;
}

Box.propTypes = {
  isDisabled: PT.bool,
  sx: PT.object,
};

export default React.forwardRef((props, ref) => {
  return <Box {...props} myRef={ref} />;
});

// storybook exports
export const BoxComponent = Box;
