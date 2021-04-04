import React from 'react';

import { Box, FlexLayout, Text, theme } from '~/ui';

function Typography() {
  return (
    <FlexLayout flexDirection="column" space={8}>
      {Object.keys(theme.text).map((variant) => {
        return (
          <FlexLayout alignItems="center" justifyContent="space-between" key={variant} space={8}>
            <Box sx={{ flex: '0 0 200px' }}>
              <Text variant="m-spaced-bold">{variant}</Text>
            </Box>
            <Text sx={{ flex: 'auto' }} variant={variant}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt. Ultrices vitae auctor eu augue ut.
              Condimentum vitae sapien pellentesque habitant morbi tristique.
            </Text>
          </FlexLayout>
        );
      })}
    </FlexLayout>
  );
}

export default Typography;
