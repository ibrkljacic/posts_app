import { Box, FlexLayout, Text } from '~/ui';

function PageLayout({ children, sx = {}, title }) {
  return (
    <FlexLayout
      color="gray-700"
      flexDirection="column"
      flexGrow="1"
      py={8}
      space={8}
      sx={{ width: 'page-size', zIndex: 'page', ...sx }}
    >
      {title && (
        <Text as="h1" variant="3xl-spaced-bold">
          {title}
        </Text>
      )}
      <Box sx={{ flexGrow: '1' }}>{children}</Box>
    </FlexLayout>
  );
}

export default PageLayout;
