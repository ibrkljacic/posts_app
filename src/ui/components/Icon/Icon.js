import PT from 'prop-types';
import React from 'react';
import InlineSvg from 'react-inlinesvg';

import { Box, styles } from '~/ui';
import * as icons from '~/ui/assets/icons';

const sizeMap = {
  xs: '16px',
  s: '20px',
  m: '24px',
  l: '28px',
  xl: '32px',
};

function Icon({ color, icon, isDisabled, size = 'm', sx, onClick, ...rest }) {
  const iconSrc = icons[icon]; // eslint-disable-line import/namespace
  if (!iconSrc) {
    return null;
  }

  const clickableStyles = onClick ? styles.interactions.clickable : {};

  return (
    <Box
      isDisabled={isDisabled}
      sx={{
        height: sizeMap[size],
        width: sizeMap[size],
        ...clickableStyles,
        ...sx,
        alignItems: 'center',
        color,
        display: 'flex',
        flexGrow: '0',
        flexShrink: '0',
        justifyContent: 'center',
        svg: {
          height: '100%',
          width: '100%',
        },
      }}
      onClick={onClick}
      {...rest}
    >
      <InlineSvg src={iconSrc} />
    </Box>
  );
}

export const iconKeyPropTypes = PT.oneOf(Object.keys(icons));

Icon.propTypes = {
  color: PT.string,
  icon: iconKeyPropTypes.isRequired,
  isDisabled: PT.bool,
  size: PT.oneOf(Object.keys(sizeMap)),
  sx: PT.object,
  onClick: PT.func,
};

export default Icon;
