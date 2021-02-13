import { logout } from '~/api';
import { removeAccessToken } from '~/auth';
import { Button, FlexLayout, Icon } from '~/ui';

function handleOnLogoutClick() {
  logout().then(() => {
    removeAccessToken();
    window.location.reload();
  });
}

function Navbar() {
  return (
    <FlexLayout
      alignItems="center"
      bg="background"
      justifyContent="space-between"
      px={8}
      sx={{ borderBottom: 'border-red', height: '64px', position: 'sticky', top: 0, width: '100%', zIndex: 'navbar' }}
    >
      <Icon color="red-500" icon="logo" size="xl" />
      <Button iconLeft="logOut" text="LOG OUT" variant="link" onClick={handleOnLogoutClick} />
    </FlexLayout>
  );
}

export default Navbar;
