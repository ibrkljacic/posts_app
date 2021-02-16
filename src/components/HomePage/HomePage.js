import { PageLayout } from '~/components/Shared';
import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';

import Login from './Login';

function HomePage({ message }) {
  useConsoleLog(message);

  return (
    <PageLayout>
      <Login />
    </PageLayout>
  );
}

export default withMessage(HomePage);
