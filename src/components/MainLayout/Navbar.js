import { FlexLayout, Icon, Text } from '~/ui';

function Navbar() {
  return (
    <FlexLayout
      alignItems="center"
      flexShrink="0"
      justifyContent="space-between"
      px={8}
      sx={{ height: '64px', position: 'sticky', top: 0, width: '100%' }}
    >
      <Icon color="red-500" icon="logo" size="xl" />
      <FlexLayout
        alignItems="center"
        space={2}
        sx={{ '&:hover': { color: 'red-500', transition: 'all ease .25s' } }}
        onClick={() => {}}
      >
        <Icon icon="logOut" />
        <Text variant="s-spaced">LOG OUT</Text>
      </FlexLayout>
    </FlexLayout>
  );
}

export default Navbar;
