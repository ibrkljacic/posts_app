import { Box, FlexLayout, Text, theme } from '~/ui';

const { sizes } = theme;

function Sizes() {
  return (
    <FlexLayout flexDirection="column" space={4}>
      {Object.keys(sizes).map((size) => {
        const width = sizes[size];
        return (
          <FlexLayout key={size} alignItems="center" space={8}>
            <Text sx={{ flex: '0 0 250px' }} variant="m-spaced-bold">
              {size} ({width})
            </Text>
            <Box bg="gray-500" py={2} sx={{ flex: 'none', width }} />
          </FlexLayout>
        );
      })}
    </FlexLayout>
  );
}

export default Sizes;
