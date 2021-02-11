import PT from 'prop-types';

import { Box, FlexLayout, Icon, theme } from '~/ui';
import { withLabel } from '~/ui/hocs';

const variantsMap = {
  primary: {
    iconLeft: null,
  },
  searchable: {
    iconLeft: 'search',
  },
};

function TextInput({ placeholder = '', sx = {}, type = 'text', value = '', variant = 'primary', onChange = () => {} }) {
  const { iconLeft } = variantsMap[variant];

  return (
    <FlexLayout
      alignItems="center"
      bg="white"
      space={2}
      sx={{
        border: 'border-gray',
        borderRadius: 's',
        height: 'input-m-height',
        width: '100%',
        px: 3,
        ...sx,
      }}
    >
      {iconLeft && <Icon color="bali-hai" icon="search" />}
      <Box
        as="input"
        placeholder={placeholder}
        sx={{
          ...theme.text['m-spaced'],
          bg: 'white',
          border: 'none',
          borderRadius: 'm',
          flexGrow: '1',
          height: '100%',
          outline: 'none',
        }}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FlexLayout>
  );
}

TextInput.propTypes = {
  placeholder: PT.string,
  sx: PT.object,
  type: PT.string,
  value: PT.string,
  variant: PT.oneOf(Object.keys(variantsMap)),
  onChange: PT.func,
};

export default withLabel(TextInput);
