import { useColorMode } from 'theme-ui';

import { logout } from '~/api';
import { removeAccessToken } from '~/auth';
import { Button, FlexLayout, Icon, Switch } from '~/ui';

function handleOnLogoutClick() {
  logout().then(() => {
    removeAccessToken();
    window.location.reload();
  });
}

function Navbar() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <FlexLayout
      alignItems="center"
      bg="background"
      justifyContent="space-between"
      px={8}
      sx={{ borderBottom: 'border-red', height: '64px', position: 'sticky', top: 0, width: '100%', zIndex: 'navbar' }}
    >
      <Icon color="red-500" icon="logo" size="xl" />
      <FlexLayout alignItems="center" space={8}>
        <Switch
          icon={colorMode === 'default' ? 'sun' : 'moon'}
          value={colorMode === 'default'}
          onChange={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
        />
        <Button iconLeft="logOut" size="s" text="LOG OUT" variant="link" onClick={handleOnLogoutClick} />
      </FlexLayout>
    </FlexLayout>
  );
}

export default Navbar;
