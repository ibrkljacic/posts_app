import PT from 'prop-types';

import { FlexLayout, Icon, LoadingSpinner, styles, Text } from '~/ui';
import { iconKeyPropTypes } from '~/ui/components/Icon';

const sizesMap = {
  m: {
    height: 'input-m-height',
    iconSize: 's',
    px: 3,
    space: 2,
    textVariant: 'm-spaced-bold-caps',
  },
  l: {
    height: 'input-l-height',
    iconSize: 'm',
    px: 4,
    space: 2,
    textVariant: 'm-spaced-bold-caps',
  },
};

const variantsMap = {
  primary: {
    border: 'border-gray',
    bg: 'transparent',
    color: 'red-700',
    hoverStyles: {
      border: 'border-red',
      color: 'red-500',
      transition: 'all ease .25s',
    },
  },
  secondary: {
    bg: 'red-500',
    color: 'white',
  },
};

function Button({
  iconLeft,
  iconRight,
  isDisabled = false,
  isLoading = false,
  size = 'm',
  sx = {},
  text,
  variant = 'primary',
  onClick = () => {},
}) {
  const { bg, border, color, hoverStyles } = variantsMap[variant];
  const { height, iconSize, px, space, textVariant, width } = sizesMap[size];

  return (
    <FlexLayout
      as="button"
      alignItems="center"
      justifyContent="space-between"
      isDisabled={isDisabled || isLoading}
      px={px}
      sx={{
        ...sx,
        ...styles.interactions.clickable,
        bg,
        border: border || 'unset',
        color,
        outline: 'none',
        position: 'relative',
        height,
        width: width || 'fit-content',

        '&:hover': {
          background: (theme) => `linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04)), ${theme.colors[bg]}`,
          ...hoverStyles,
        },
        '&:active': {
          background: (theme) => `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ${theme.colors[bg]}`,
        },
      }}
      onClick={onClick}
    >
      <FlexLayout
        alignItems="center"
        flexShrink="0"
        space={space}
        sx={{ visibility: isLoading ? 'hidden' : 'visible' }}
      >
        {iconLeft && <Icon icon={iconLeft} size={iconSize} />}
        <Text variant={textVariant}>{text}</Text>
        {iconRight && <Icon icon={iconRight} size={iconSize} />}
      </FlexLayout>
      {isLoading && <LoadingSpinner size={size} sx={{ bottom: 0, left: 0, position: 'absolute', right: 0, top: 0 }} />}
    </FlexLayout>
  );
}

Button.propTypes = {
  iconLeft: iconKeyPropTypes,
  iconRight: iconKeyPropTypes,
  isDisabled: PT.bool,
  isLoading: PT.bool,
  size: PT.oneOf(Object.keys(sizesMap)),
  text: PT.string.isRequired,
  variant: PT.oneOf(Object.keys(variantsMap)),
  onClick: PT.func,
};

export default Button;
// storybook exports
export const buttonSizesMap = sizesMap;
export const buttonVariantsMap = variantsMap;
