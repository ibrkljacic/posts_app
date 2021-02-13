import { FlexLayout, Text } from '~/ui';

function Footer() {
  return (
    <FlexLayout bg="gray-700" justifyContent="space-between" px={8} py={4} space={2} sx={{ width: '100%' }}>
      <Text color="white" textAlign="center" variant="s-spaced-medium-caps">
        @ibrkljacic
      </Text>
      <Text color="white" textAlign="center" variant="s-spaced-medium">
        {new Date().getFullYear()}
      </Text>
    </FlexLayout>
  );
}

export default Footer;
