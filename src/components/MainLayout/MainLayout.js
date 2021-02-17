import { isUserAuthenticated } from '~/auth';
import ContentWindow from '~/components/ContentWindow';
import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { FlexLayout, Toast } from '~/ui';

import Footer from './Footer';
import Navbar from './Navbar';

function MainLayout({ message }) {
  useConsoleLog(message);

  return (
    <>
      <FlexLayout alignItems="center" flexDirection="column" sx={{ minHeight: '100vh' }}>
        {isUserAuthenticated && <Navbar />}
        <ContentWindow />
        {isUserAuthenticated && <Footer />}
      </FlexLayout>
      <Toast.Container />
    </>
  );
}

export default withMessage(MainLayout);
