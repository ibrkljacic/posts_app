import ContentWindow from '~/components/ContentWindow';
import { FlexLayout } from '~/ui';

function MainLayout() {
  return (
    <FlexLayout sx={{ bottom: 0, left: 0, position: 'fixed', right: 0, top: 0 }}>
      <ContentWindow />
    </FlexLayout>
  );
}

export default MainLayout;
