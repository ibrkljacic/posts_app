import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import colors from '../src/ui/theme/colors';

import './index.css';

const theme = create({
  colorSecondary: colors['red-500'],
  base: 'dark',
});

addons.setConfig({ theme });
