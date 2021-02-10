import PT from 'prop-types';
import React from 'react';

import { Box, FlexLayout, Icon, LoadingSpinner, Text } from '~/ui';
import { iconKeyPropTypes } from '~/ui/components/Icon';

const variantsMap = {
  primary: {
    border: 'border-gray',
    bg: 'transparent',
    hoverStyles: {
      border: 'border-red',
      color: 'red-500',
      transition: 'all ease .25s',
    },
  },
};

const sizesMap = {
  m: {
    iconSize: 's',
    px: 6,
    py: 3,
    space: 2,
    textVariant: 'm-spaced-bold-caps',
  },
  l: {
    iconSize: 'm',
    px: 8,
    py: 3,
    space: 2,
    textVariant: 'm-spaced-bold-caps',
  },
};

const Button = React.forwardRef(
  (
    {
      iconLeft,
      iconRight,
      isDisabled = false,
      isLoading = false,
      size = 'm',
      sx = {},
      text,
      variant = 'primary',
      onClick = () => {},
    },
    ref
  ) => {
    const { bg, border, hoverStyles } = variantsMap[variant];
    const { iconSize, px, py, space, textVariant } = sizesMap[size];

    return (
      <Box
        bg={bg}
        isDisabled={isDisabled || isLoading}
        px={px}
        py={py}
        ref={ref}
        sx={{
          border,
          position: 'relative',
          height: 'fit-content',
          width: 'fit-content',
          ...sx,

          '&:hover': hoverStyles,
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
        {isLoading && (
          <LoadingSpinner size={size} sx={{ bottom: 0, left: 0, position: 'absolute', right: 0, top: 0 }} />
        )}
      </Box>
    );
  }
);

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
