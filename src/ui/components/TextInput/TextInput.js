import PT from 'prop-types';
import * as React from 'react';

import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { Box, FlexLayout, Icon, styles, theme } from '~/ui';
import { withLabel } from '~/ui/hocs';

const variantsMap = {
  primary: {
    borderStyles: { borderBottom: 'border-gray-light' },
    iconLeft: null,
    pl: 3,
    pr: 3,
  },
  searchable: {
    borderStyles: { borderBottom: 'border-gray-light' },
    iconLeft: 'search',
    pl: 11,
    pr: 3,
  },
};

function TextInput({
  isDisabled = false,
  message,
  placeholder = '',
  sx = {},
  type = 'text',
  value = '',
  variant = 'primary',
  onChange = () => {},
}) {
  useConsoleLog(message);

  const { borderStyles, iconLeft, pl, pr } = variantsMap[variant];

  return (
    <FlexLayout
      alignItems="center"
      bg="transparent"
      isDisabled={isDisabled}
      space={2}
      sx={{
        ...sx,
        ...styles.interactions.clickable,
        ...borderStyles,
        height: 'input-m-height',
        width: '100%',
        position: 'relative',

        '&:focus-within': {
          borderColor: 'red-500',
          color: 'red-500',
          transition: 'all ease .15s',
        },
      }}
    >
      {iconLeft && <Icon icon="search" sx={{ position: 'absolute', left: '12px' }} />}
      <Box
        as="input"
        placeholder={placeholder}
        sx={{
          ...theme.text['m-spaced'],
          bg: 'transparent',
          color: 'text',
          border: 'none',
          caretColor: 'red-500',
          flexGrow: '1',
          height: '100%',
          outline: 'none',
          pl,
          pr,
          zIndex: 'default',

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

export default withLabel(withMessage(TextInput));
// storybook exports
export const TextInputComponent = TextInput;
export const textInputVariantsMap = variantsMap;
