import PT from 'prop-types';
import React from 'react';

import { Box, styles } from '~/ui';

function FlexLayout({
  alignItems,
  children,
  flex,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  space = 0,
  sx,
  ...rest
}) {
  const clickableStyles = rest.onClick ? styles.interactions.clickable : {};
  const marginDirection = flexDirection === 'column' ? 'mb' : 'mr';

  return (
    <Box
      sx={{
        ...clickableStyles,
        ...sx,
        alignItems,
        display: 'flex',
        flex,
        flexDirection,
        flexGrow,
        flexShrink,
        flexWrap,
        justifyContent,
        '> :not(:last-child)': {
          [marginDirection]: space,
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

FlexLayout.propTypes = {
  alignItems: PT.string,
  children: PT.node,
  flex: PT.string,
  flexDirection: PT.string,
  flexGrow: PT.string,
  flexShrink: PT.string,
  flexWrap: PT.string,
  justifyContent: PT.string,
  space: PT.oneOfType([PT.number, PT.string]),
  sx: PT.object,
};

export default FlexLayout;
