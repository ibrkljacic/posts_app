import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { login } from '~/api';
import { isUserAuthenticated, setAccessToken } from '~/auth';
import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { useEnter } from '~/hooks/interaction';
import { routesEnum } from '~/routes';
import { Button, FlexLayout, Text, TextInput } from '~/ui';
import { showToast } from '~/ui/components/Toast';

function handleOnLoginClick({ email, password }) {
  login({ email, password })
    .then((res) => {
      setAccessToken(res.accessToken);
      window.location.reload();
    })
    .catch(() => showToast('Incorrect email or password!'));
}

function Login({ message }) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useConsoleLog(message);
  useEnter(() => handleOnLoginClick({ email, password }));

  if (isUserAuthenticated) {
    history.push(routesEnum.POSTS_PAGE);
  }

  return (
    <FlexLayout
      bg="transparent"
      flexDirection="column"
      m="0 auto"
      p={8}
      space={8}
      sx={{ borderRadius: 's', boxShadow: 'depth-1', maxWidth: 'modal-width' }}
    >
      <Text textAlign="center" variant="3xl-spaced-bold">
        LOG IN
      </Text>
      <FlexLayout flexDirection="column" flexGrow="1" space={6}>
        <TextInput label="Email" type="email" value={email} onChange={setEmail} />
        <TextInput label="Password" type="password" value={password} onChange={setPassword} />
      </FlexLayout>
      <Button
        isDisabled={!email.length || !password.length}
        isFullWidth
        text="Log In"
        variant="secondary"
        onClick={() => handleOnLoginClick({ email, password })}
      />
    </FlexLayout>
  );
}

export default withMessage(Login);
