import PT from 'prop-types';
import InlineSvg from 'react-inlinesvg';

import { Box, styles } from '~/ui';
import * as icons from '~/ui/assets/icons';

const sizesMap = {
  xs: '16px',
  s: '20px',
  m: '24px',
  l: '28px',
  xl: '32px',
};

function Icon({ color, icon, size = 'm', sx = {}, ...rest }) {
  const iconSrc = icons[icon]; // eslint-disable-line import/namespace
  if (!iconSrc) {
    return null;
  }

  const clickableStyles = rest.onClick ? styles.interactions.clickable : {};

  return (
    <Box
      sx={{
        height: sizesMap[size],
        width: sizesMap[size],
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
  size: PT.oneOf(Object.keys(sizesMap)),
  sx: PT.object,
};

export default Icon;
// storybook exports
export const iconSizesMap = sizesMap;
