import PT from 'prop-types';
import InlineSvg from 'react-inlinesvg';

import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { FlexLayout, theme } from '~/ui';
import loadingSpinner from '~/ui/assets/icons/loading-spinner.svg';

const sizesMap = {
  s: '20px',
  m: '24px',
  l: '32px',
  xl: '64px',
};

function LoadingSpinner({ color = 'red-500', message, size = 'm', sx = {} }) {
  useConsoleLog(message);

  return (
    <FlexLayout alignItems="center" justifyContent="center" color={color} sx={{ ...sx }}>
      <InlineSvg height={sizesMap[size]} src={loadingSpinner} width={sizesMap[size]} />
    </FlexLayout>
  );
}

LoadingSpinner.propTypes = {
  color: PT.oneOf(Object.keys(theme.colors)),
  size: PT.oneOf(Object.keys(sizesMap)),
  sx: PT.object,
};

export default withMessage(LoadingSpinner);
// storybook exports
export const LoadingSpinnerComponent = LoadingSpinner;
export const loadingSpinnerSizesMap = sizesMap;
