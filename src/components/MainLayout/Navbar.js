import { useHistory } from 'react-router-dom';
import { useColorMode } from 'theme-ui';

import { logout } from '~/api';
import { removeAccessToken } from '~/auth';
import { routesEnum } from '~/routes';
import { FlexLayout, Icon, Menu, Switch } from '~/ui';

function handleOnLogoutClick() {
  logout().then(() => {
    removeAccessToken();
    window.location.reload();
  });
}

function Navbar() {
  const [colorMode, setColorMode] = useColorMode();
  const history = useHistory();

  return (
    <FlexLayout
      alignItems="center"
      bg="background"
      justifyContent="space-between"
      px={8}
      sx={{ borderBottom: 'border-red', height: '64px', position: 'sticky', top: 0, width: '100%', zIndex: 'navbar' }}
    >
      <Icon color="red-500" icon="logo" size="xl" onClick={() => history.push(routesEnum.HOME_PAGE)} />
      <FlexLayout alignItems="center" space={8}>
        <Switch
          icon={colorMode === 'default' ? 'sun' : 'moon'}
          value={colorMode === 'default'}
          onChange={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
        />
        <Menu
          anchorElement={<Icon icon="menu" size="l" />}
          options={[
            { icon: 'user', text: 'My Profile', onClick: () => console.log('TODO') },
            { icon: 'logOut', text: 'Log Out', onClick: handleOnLogoutClick },
          ]}
        />
      </FlexLayout>
    </FlexLayout>
  );
}

export default Navbar;
