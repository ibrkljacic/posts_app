import { FlexLayout, Text } from '~/ui';

function Footer() {
  return (
    <FlexLayout justifyContent="space-between" px={8} py={4} sx={{ width: '100%' }}>
      <Text variant="s-spaced">@IBRKLJACIC</Text>
      <Text variant="s-spaced">{new Date().getFullYear()}</Text>
    </FlexLayout>
  );
}

export default Footer;
