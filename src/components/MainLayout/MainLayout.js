import { isUserAuthenticated } from '~/auth';
import ContentWindow from '~/components/ContentWindow';
import { FlexLayout } from '~/ui';
import { ToastMessageContainer } from '~/ui/components/Toast';

import Footer from './Footer';
import Navbar from './Navbar';

function MainLayout() {
  return (
    <>
      <FlexLayout alignItems="center" flexDirection="column" sx={{ minHeight: '100vh' }}>
        {isUserAuthenticated && <Navbar />}
        <ContentWindow />
        {isUserAuthenticated && <Footer />}
      </FlexLayout>
      <ToastMessageContainer />
    </>
  );
}

export default MainLayout;
