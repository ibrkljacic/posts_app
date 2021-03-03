import { Canvas } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from 'theme-ui';

import { theme } from '~/ui';

function withTheme(Component) {
  return function Wrapped({ children, ...rest }) {
    return (
      <Component {...rest}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Component>
    );
  };
}

export const parameters = {
  docs: {
    components: {
      Canvas: withTheme(Canvas),
    },
  },
  options: {
    storySort: {
      order: [
        'Overview',
        ['UI System', 'Docs'],
        'Specs',
        'Components',
        ['Core', 'Feedback', 'Input', 'Interaction', 'Input', 'Navigation'],
      ],
    },
  },
};
