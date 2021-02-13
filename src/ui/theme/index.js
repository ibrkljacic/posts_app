import borders from './borders';
import colors from './colors';
import radii from './radii';
import shadows from './shadows';
import sizes from './sizes';
import space from './space';
import typography from './typography';

// base colors required by theme UI
const themeUiColors = {
  background: colors.white,
  text: colors['gray-700'],
  modes: {
    dark: {
      background: colors['gray-700'],
      text: colors.white,
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
};
