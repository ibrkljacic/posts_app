import { FlexLayout, Text } from '~/ui';

function withLabel(WrappedComponent) {
  function WithLabel({ label, ...rest }) {
    return (
      <FlexLayout flexDirection="column" space={2} sx={{ width: '100%' }}>
        {label && (
          <Text color="red-500" variant="s-spaced-bold-caps">
            {label}
          </Text>
        )}
        <WrappedComponent {...rest} />
      </FlexLayout>
    );
  }

  return WithLabel;
}

export default withLabel;
