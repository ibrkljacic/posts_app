import React, { useState } from 'react';

import { FlexLayout, Icon, Text, theme } from '~/ui';
import * as icons from '~/ui/assets/icons';

const colorOptions = Object.keys(theme.colors);
const sizeOptions = ['xs', 's', 'm', 'l', 'xl'];

function IconExplorer() {
  const [color, setColor] = useState('black');
  const [size, setSize] = useState('m');

  return (
    <FlexLayout flexDirection="column" space={8}>
      <FlexLayout alignItems="center" space={8}>
        <FlexLayout alignItems="center" space={2}>
          <Text variant="m-spaced-bold">Color</Text>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            {colorOptions.map((color) => (
              <option key={color} value={`${color}`}>
                {color}
              </option>
            ))}
          </select>
        </FlexLayout>
        <FlexLayout alignItems="center" space={2}>
          <Text variant="m-spaced-bold">Size</Text>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            {sizeOptions.map((size) => (
              <option key={size} value={`${size}`}>
                {size}
              </option>
            ))}
          </select>
        </FlexLayout>
      </FlexLayout>
      <FlexLayout flexWrap="wrap" space={2}>
        {Object.keys(icons).map((icon) => (
          <FlexLayout
            key={icon}
            alignItems="center"
            bg="gray-400"
            flexDirection="column"
            flex="0 0 150px"
            justifyContent="center"
            mb={2}
            p={4}
            space={2}
          >
            <Icon color={color} icon={icon} size={size} />
            <Text color={color} variant="m-spaced-bold">
              {icon}
            </Text>
          </FlexLayout>
        ))}
      </FlexLayout>
    </FlexLayout>
  );
}

export default IconExplorer;
