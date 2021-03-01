import { isUserAuthenticated } from '~/auth';
import ContentWindow from '~/components/ContentWindow';
import { FlexLayout, Toast } from '~/ui';

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
      <Toast.Container />
    </>
  );
}

export default MainLayout;
