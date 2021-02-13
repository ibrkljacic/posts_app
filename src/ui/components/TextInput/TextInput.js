import PT from 'prop-types';
import * as React from 'react';

import { Box, FlexLayout, Icon, styles, theme } from '~/ui';
import { withLabel } from '~/ui/hocs';

const variantsMap = {
  primary: {
    iconLeft: null,
    pl: 0,
  },
  searchable: {
    iconLeft: 'search',
    pl: 8,
  },
};

function TextInput({
  isDisabled = false,
  placeholder = '',
  sx = {},
  type = 'text',
  value = '',
  variant = 'primary',
  onChange = () => {},
}) {
  const { iconLeft, pl } = variantsMap[variant];

  return (
    <FlexLayout
      alignItems="center"
      bg="white"
      isDisabled={isDisabled}
      space={2}
      sx={{
        ...sx,
        ...styles.interactions.clickable,
        border: 'border-gray',
        borderRadius: 's',
        height: 'input-m-height',
        width: '100%',
        position: 'relative',
        px: 3,

        '&:focus-within': {
          borderColor: 'red-500',
          color: 'red-500',
          transition: 'all ease .25s',
        },
      }}
    >
      {iconLeft && <Icon icon="search" sx={{ position: 'absolute', left: '12px', zIndex: 1 }} />}
      <Box
        as="input"
        placeholder={placeholder}
        sx={{
          ...theme.text['m-spaced'],
          bg: 'transparent',
          border: 'none',
          borderRadius: 'm',
          caretColor: 'red-500',
          flexGrow: '1',
          height: '100%',
          outline: 'none',
          pl,
          zIndex: 2,

          '::placeholder': {
            color: 'gray-600',
          },
        }}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FlexLayout>
  );
}

TextInput.propTypes = {
  isDisabled: PT.bool,
  placeholder: PT.string,
  sx: PT.object,
  type: PT.string,
  value: PT.string,
  variant: PT.oneOf(Object.keys(variantsMap)),
  onChange: PT.func,
};

export default withLabel(TextInput);
// storybook exports
export const TextInputComponent = TextInput;
export const textInputVariantsMap = variantsMap;
