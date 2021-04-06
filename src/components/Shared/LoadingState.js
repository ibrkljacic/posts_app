import { FlexLayout, LoadingSpinner } from '~/ui';

function LoadingState() {
  return (
    <FlexLayout flexGrow="1" justifyContent="center">
      <LoadingSpinner color="red-500" size="xl" />
    </FlexLayout>
  );
}

export default LoadingState;
