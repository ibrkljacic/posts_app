import capitalize from 'lodash/capitalize';
import { useHistory } from 'react-router-dom';

import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { Box, Button, FlexLayout, Text } from '~/ui';

function PageLayout({ children, hasBack = false, message, title }) {
  const history = useHistory();

  useConsoleLog(message);

  return (
    <FlexLayout
      flexDirection="column"
      flexGrow="1"
      px={4}
      py={8}
      space={10}
      sx={{ maxWidth: 'page-size', width: '100%', zIndex: 'page' }}
    >
      <FlexLayout flexDirection="column" space={4}>
        {hasBack && <Button iconLeft="arrowLeft" text="Back" variant="link" onClick={history.goBack} />}
        {title && (
          <Text as="h1" variant="3xl-spaced-bold">
            {capitalize(title)}
          </Text>
        )}
      </FlexLayout>
      <Box>{children}</Box>
    </FlexLayout>
  );
}

export default withMessage(PageLayout);
