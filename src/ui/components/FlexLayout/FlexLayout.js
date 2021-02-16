import PT from 'prop-types';
import React from 'react';

import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { Box } from '~/ui';

function FlexLayout({
  alignItems,
  children,
  flex,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  message,
  myRef,
  justifyContent,
  space = 0,
  sx = {},
  ...rest
}) {
  useConsoleLog(message);

  const marginDirection = flexDirection === 'column' ? 'mb' : 'mr';

  return (
    <Box
      ref={myRef}
      sx={{
        ...sx,
        alignItems,
        display: 'flex',
        flex,
        flexDirection,
        flexGrow,
        flexShrink,
        flexWrap,
        justifyContent,
        '> :not(:last-child)': {
          [marginDirection]: space,
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

FlexLayout.propTypes = {
  alignItems: PT.string,
  children: PT.node,
  flex: PT.string,
  flexDirection: PT.string,
  flexGrow: PT.string,
  flexShrink: PT.string,
  flexWrap: PT.string,
  justifyContent: PT.string,
  space: PT.oneOfType([PT.number, PT.string]),
  sx: PT.object,
};

const FlexLayoutWithMessage = withMessage(FlexLayout);

export default React.forwardRef((props, ref) => {
  return <FlexLayoutWithMessage {...props} myRef={ref} />;
});

// storybook exports
export const FlexLayoutComponent = FlexLayout;
