import { Route } from 'react-router-dom';

import ContentWindow from '~/components/ContentWindow';
import { FlexLayout } from '~/ui';
import { ToastMessageContainer } from '~/ui/components/Toast';

import Footer from './Footer';
import Navbar from './Navbar';

function MainLayout() {
  return (
    <>
      <FlexLayout alignItems="center" flexDirection="column" sx={{ minHeight: '100vh' }}>
        <Route path="*" component={Navbar} />
        <ContentWindow />
        <Route path="*" component={Footer} />
      </FlexLayout>
      <ToastMessageContainer />
    </>
  );
}

export default MainLayout;
