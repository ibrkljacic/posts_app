import PT from 'prop-types';

import { Box, FlexLayout, Icon, Text } from '~/ui';
import { iconKeyPropTypes } from '~/ui/components/Icon';

function Switch({ icon, isDisabled = false, value, label, onChange = () => {} }) {
  return (
    <FlexLayout
      alignItems="center"
      isDisabled={isDisabled}
      space={4}
      sx={{ width: 'fit-content' }}
      onClick={() => onChange(!value)}
    >
      <FlexLayout
        alignItems="center"
        flexShrink="0"
        justifyContent={value ? 'flex-end' : 'flex-start'}
        px={1}
        sx={{ border: 'border-gray-light', borderRadius: 'pill', height: '24px', width: '40px' }}
      >
        <Box
          bg={icon ? 'transparent' : value ? 'red-500' : 'gray-500'}
          sx={{ borderRadius: 'round', height: '16px', width: '16px' }}
        >
          <Icon icon={icon} size="xs" />
        </Box>
      </FlexLayout>
      {label && <Text variant="s-spaced">{label}</Text>}
    </FlexLayout>
  );
}

Switch.propTypes = {
  icon: iconKeyPropTypes,
  isDisabled: PT.bool,
  value: PT.bool,
  label: PT.string,
  onChange: PT.func,
};

export default Switch;
