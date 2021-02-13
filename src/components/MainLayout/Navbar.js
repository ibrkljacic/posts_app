import { FlexLayout, Icon, Text } from '~/ui';

function Navbar() {
  return (
    <FlexLayout
      alignItems="center"
      flexShrink="0"
      justifyContent="space-between"
      bg="gray-700"
      px={8}
      sx={{ height: 'navbar-height', position: 'sticky', top: 0, width: '100%' }}
    >
      <Icon color="red-500" icon="logo" size="xl" />
      <FlexLayout alignItems="center" space={2} onClick={() => {}}>
        <Icon icon="logOut" />
        <Text variant="s-spaced-medium-caps">LOG OUT</Text>
      </FlexLayout>
    </FlexLayout>
  );
}

export default Navbar;
