import { useState } from 'react';

import { Button, FlexLayout, Text, TextInput } from '~/ui';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <FlexLayout
      alignItems="center"
      bg="white"
      flexDirection="column"
      m="0 auto"
      p={8}
      space={6}
      sx={{ borderRadius: 'm', boxShadow: 'depth-1', height: 'fit-content', width: 'modal-width' }}
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
        onClick={() => {}}
      />
    </FlexLayout>
  );
}

export default Login;
