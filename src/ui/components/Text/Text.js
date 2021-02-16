import PT from 'prop-types';
import { Text as ThemeText } from 'theme-ui';

import { withMessage } from '~/hocs';
import { useConsoleLog } from '~/hooks';
import { styles, theme } from '~/ui';

function Text({ as = 'span', children, color, message, sx = {}, textAlign, variant = 'm-spaced', ...rest }) {
  useConsoleLog(message);

  const clickableStyle = rest.onClick ? styles.interactions.clickable : {};

  return (
    <ThemeText
      as={as}
      color={color}
      sx={{
        ...clickableStyle,
        ...sx,
        textAlign,
      }}
      variant={variant}
      {...rest}
    >
      {children}
    </ThemeText>
  );
}

Text.propTypes = {
  as: PT.any,
  children: PT.node,
  color: PT.string,
  sx: PT.object,
  textAlign: PT.string,
  variant: PT.oneOf(Object.keys(theme.text)),
};

export default withMessage(Text);
// storybook exports
export const TextComponent = Text;
