import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { FlexLayout, Text } from '~/ui';

function Footer({ message }) {
  useConsoleLog(message);

  return (
    <FlexLayout
      bg="background"
      justifyContent="space-between"
      px={8}
      py={4}
      sx={{ borderTop: 'border-red', width: '100%', zIndex: 'navbar' }}
    >
      <Text variant="s-spaced-bold">IBRKLJACIC</Text>
      <Text variant="s-spaced-bold">{new Date().getFullYear()}</Text>
    </FlexLayout>
  );
}

export default withMessage(Footer);
