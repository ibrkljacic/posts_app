import { useState } from 'react';

import { Button, FlexLayout, Icon, LoadingSpinner, Text, TextInput } from '~/ui';

function App() {
  const [text, setText] = useState('');
  return (
    <FlexLayout flexDirection="column" space={4}>
      <Text color="red-500">This is</Text>
      <Text color="red-500">a test</Text>
      <Icon icon="arrowRight" />
      <LoadingSpinner size="l" />
      <Button iconRight="arrowRight" variant="secondary" text="test" />
      <TextInput variant="searchable" value={text} onChange={setText} />
    </FlexLayout>
  );
}

export default App;
