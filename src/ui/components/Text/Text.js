import PT from 'prop-types';
import React from 'react';
import { Text as ThemeText } from 'theme-ui';

import { styles, theme } from '~/ui';

function Text({ as = 'span', children, color, sx, textAlign, variant = 'm-spaced', ...rest }) {
  const clickableStyle = rest.onClick ? styles.interactions.clickable : {};

  return (
    <ThemeText
      as={as}
      color={color}
      sx={{
        ...clickableStyle,
        ...sx,
        textAlign,
      }}
      variant={variant}
      {...rest}
    >
      {children}
    </ThemeText>
  );
}

Text.propTypes = {
  as: PT.any,
  children: PT.node,
  color: PT.string,
  sx: PT.object,
  textAlign: PT.string,
  variant: PT.oneOf(Object.keys(theme.text)),
};

export default Text;
