import Color from 'color';

import { FlexLayout, Text } from '~/ui';

// based on https://gist.github.com/vladimirbrasil/bd139851ff757a1c8cb46fac93e733eb
function coerceRgb(color) {
  if (!color.match(/rgba/gi)) {
    return color;
  }

  function coerce(color, alpha, backgroundColor = 1) {
    return parseInt(255 * ((1 - alpha) * backgroundColor + alpha * color));
  }

  const [sourceR, sourceG, sourceB, sourceA] = color.match(/\d+\.*\d*/g);

  const r = coerce(sourceR, sourceA);
  const g = coerce(sourceG, sourceA);
  const b = coerce(sourceB, sourceA);

  return `rgb(${r}, ${g}, ${b})`;
}

export default function ColorPalette({ colorKey, colorMap }) {
  const colors = Object.keys(colorMap).filter((color) => color.startsWith(colorKey));

  return (
    <FlexLayout flex="0 0 250px" flexDirection="column">
      {colors
        .slice()
        .sort((a, b) => (a < b ? 1 : -1))
        .map((colorKey) => {
          const colorValue = colorMap[colorKey];
          const textColor = Color(coerceRgb(colorValue)).isLight() ? 'black' : 'white';
          return (
            <FlexLayout key={colorKey} bg={colorKey} p={3} justifyContent="space-between">
              <Text color={textColor} variant="s-spaced">
                {colorKey}
              </Text>
              <Text color={textColor} variant="s-spaced">
                {colorValue}
              </Text>
            </FlexLayout>
          );
        })}
    </FlexLayout>
  );
}
