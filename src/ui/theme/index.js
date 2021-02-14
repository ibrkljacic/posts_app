import borders from './borders';
import colors from './colors';
import radii from './radii';
import shadows from './shadows';
import sizes from './sizes';
import space from './space';
import typography from './typography';
import zIndices from './zIndices';

// base colors required by theme UI
const themeUiColors = {
  background: colors.white,
  primary: colors['gray-400'],
  text: colors['gray-700'],

  modes: {
    dark: {
      background: colors['gray-700'],
      primary: colors['gray-500'],
      text: colors['gray-400'],
    },
  },
};

export default {
  borders,
  colors: { ...colors, ...themeUiColors },
  radii,
  shadows,
  sizes,
  space,
  text: typography.variants,
  zIndices,
};
