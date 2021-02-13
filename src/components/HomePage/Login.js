import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { login } from '~/api';
import { isUserAuthenticated, setAccessToken } from '~/auth';
import { useEnter } from '~/hooks/interaction';
import { routesEnum } from '~/routes';
import { Button, FlexLayout, Text, TextInput } from '~/ui';
import { showToast } from '~/ui/components/Toast';

function handleOnLoginClick({ username, password }) {
  login({ username, password })
    .then((res) => {
      setAccessToken(res.accessToken);
      window.location.reload();
    })
    .catch(() => showToast('Incorrect username or password!'));
}

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEnter(() => handleOnLoginClick({ username, password }));

  if (isUserAuthenticated) {
    history.push(routesEnum.POSTS_PAGE);
  }

  return (
    <FlexLayout
      alignItems="center"
      bg="white"
      flexDirection="column"
      m="0 auto"
      p={8}
      space={6}
      sx={{ borderRadius: 's', boxShadow: 'depth-1', height: 'fit-content', width: 'modal-width' }}
    >
      <Text color="red-500" variant="3xl-spaced-bold">
        LOG IN
      </Text>
      <TextInput label="Username" value={username} onChange={setUsername} />
      <TextInput label="Password" type="password" value={password} onChange={setPassword} />
      <Button
        isDisabled={!username.length || !password.length}
        isFullWidth
        text="Log In"
        sx={{ mt: 4 }}
        variant="secondary"
        onClick={() => handleOnLoginClick({ username, password })}
      />
    </FlexLayout>
  );
}

export default Login;
