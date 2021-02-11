import '~/styles/index.css';

import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';

import App from '~/components/App';
import { theme } from '~/ui';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
