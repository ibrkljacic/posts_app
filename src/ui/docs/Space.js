import { Box, FlexLayout, Text, theme } from '~/ui';

const { space } = theme;

function Space() {
  return (
    <FlexLayout flexDirection="column" space={4}>
      {space.map((width, i) => {
        return (
          <FlexLayout alignItems="center" key={i} space={8}>
            <Text sx={{ flex: '0 0 80px' }} variant="m-spaced-bold">
              {i} ({width})
            </Text>
            <Box bg="gray-500" py={2} sx={{ flex: 'none', width }} />
          </FlexLayout>
        );
      })}
    </FlexLayout>
  );
}

export default Space;
