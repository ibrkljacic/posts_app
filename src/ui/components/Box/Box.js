import PT from 'prop-types';
import React from 'react';
import { Box as ThemeBox } from 'theme-ui';

import { styles } from '~/ui';

const Box = React.forwardRef(({ isDisabled = false, sx = {}, ...rest }, ref) => {
  const clickableStyles = rest.onClick ? styles.interactions.clickable : {};

  return <ThemeBox disabled={isDisabled} ref={ref} sx={{ ...clickableStyles, ...sx }} {...rest} />;
});

Box.propTypes = {
  isDisabled: PT.bool,
  sx: PT.object,
};

export default Box;
