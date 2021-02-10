import { Button, FlexLayout, Icon, LoadingSpinner, Text } from '~/ui';

function App() {
  return (
    <FlexLayout flexDirection="column" space={4}>
      <Text color="red-500">This is</Text>
      <Text color="red-500">a test</Text>
      <Icon icon="arrowRight" />
      <LoadingSpinner size="l" />
      <Button isLoading text="test" />
    </FlexLayout>
  );
}

export default App;
