import PT from 'prop-types';
import { useRef, useState } from 'react';

import { useOnClickOutside } from '~/hooks/interaction';
import { FlexLayout, Text } from '~/ui';
import Icon, { iconKeyPropTypes } from '~/ui/components/Icon';

function Menu({ anchorElement, options = [] }) {
  const ref = useRef();
  const [showMenu, setShowMenu] = useState(false);

  useOnClickOutside(ref, () => setShowMenu(false));

  return (
    <FlexLayout
      color={showMenu && 'red-500'}
      ref={ref}
      sx={{ height: 'fit-content', position: 'relative', width: 'fit-content' }}
      onClick={() => setShowMenu(!showMenu)}
    >
      {anchorElement}
      {showMenu && options.length && (
        <FlexLayout
          bg="background"
          flexDirection="column"
          sx={{
            borderRadius: 's',
            right: 0,
            top: 'calc(100% + 16px)',
            boxShadow: 'depth-1',
            position: 'absolute',
            width: '200px',
            zIndex: 'dropdown',
          }}
        >
          {options.map((option, index) => {
            const { icon, text, onClick } = option;

            return (
              <FlexLayout
                alignItems="center"
                flexGrow="1"
                key={index}
                px={4}
                py={3}
                space={2}
                sx={{
                  color: 'text',

                  '&:hover': {
                    color: 'red-500',
                  },

                  '&:not(:last-child)': {
                    borderBottom: 'border-gray-light',
                  },
                }}
                onClick={onClick}
              >
                <Icon icon={icon} size="xs" />
                <Text variant="s-spaced-bold-caps">{text}</Text>
              </FlexLayout>
            );
          })}
        </FlexLayout>
      )}
    </FlexLayout>
  );
}

const optionPropType = PT.shape({
  icon: iconKeyPropTypes,
  text: PT.string,
  onClick: PT.func,
});

Menu.propTypes = {
  anchorElement: PT.node,
  options: PT.arrayOf(optionPropType),
};

export default Menu;
