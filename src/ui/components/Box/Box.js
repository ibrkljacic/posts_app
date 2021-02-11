import PT from 'prop-types';
import { Box as ThemeBox } from 'theme-ui';

import { styles } from '~/ui';

function Box({ isDisabled = false, sx = {}, ...rest }) {
  const clickableStyles = rest.onClick ? styles.interactions.clickable : {};

  return <ThemeBox disabled={isDisabled} sx={{ ...clickableStyles, ...sx }} {...rest} />;
}

Box.propTypes = {
  isDisabled: PT.bool,
  sx: PT.object,
};

export default Box;
