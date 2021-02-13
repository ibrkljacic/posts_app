import { FlexLayout, Text } from '~/ui';

function PageLayout({ children, sx = {}, title }) {
  return (
    <FlexLayout color="gray-700" flexGrow="1" my={8} sx={{ width: 'page-size', ...sx }}>
      {title && <Text variant="3xl-spaced-bold">{title}</Text>}
      {children}
    </FlexLayout>
  );
}

export default PageLayout;
