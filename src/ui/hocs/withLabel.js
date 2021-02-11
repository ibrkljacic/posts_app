import { FlexLayout, Text } from '~/ui';

function withLabel(WrappedComponent) {
  function WithLabel({ label, ...rest }) {
    return (
      <FlexLayout flexDirection="column" space={2}>
        {label && <Text variant="m-spaced">{label}</Text>}
        <WrappedComponent {...rest} />
      </FlexLayout>
    );
  }

  return WithLabel;
}

export default withLabel;
