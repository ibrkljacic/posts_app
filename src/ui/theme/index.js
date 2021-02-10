import colors from './colors';
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
  colors: { ...colors, ...themeUiColors },
  space,
  text: typography.variants,
};
