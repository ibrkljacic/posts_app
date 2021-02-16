import { BrowserRouter } from 'react-router-dom';

import MainLayout from '~/components/MainLayout';
import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';

function App({ message }) {
  useConsoleLog(message);

  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default withMessage(App);
