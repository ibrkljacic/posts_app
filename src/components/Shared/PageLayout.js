import capitalize from 'lodash/capitalize';
import { useHistory } from 'react-router-dom';

import { Box, Button, FlexLayout, Text } from '~/ui';

function PageLayout({ children, hasBack = false, title }) {
  const history = useHistory();

  return (
    <FlexLayout
      flexDirection="column"
      flexGrow="1"
      px={4}
      py={8}
      space={10}
      sx={{ maxWidth: 'page-size', width: '100%', zIndex: 'page' }}
    >
      {title && (
        <FlexLayout flexDirection="column" space={4}>
          {hasBack && <Button iconLeft="arrowLeft" text="Back" variant="link" onClick={history.goBack} />}
          <Text as="h1" variant="3xl-spaced-bold">
            {capitalize(title)}
          </Text>
        </FlexLayout>
      )}
      <Box>{children}</Box>
    </FlexLayout>
  );
}

export default PageLayout;
