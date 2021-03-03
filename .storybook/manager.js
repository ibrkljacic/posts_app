import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import colors from '../src/ui/theme/colors';

const theme = create({
  base: 'light',
  colorSecondary: colors['red-500'],
  textColor: colors['black'],
});

addons.setConfig({ theme });
