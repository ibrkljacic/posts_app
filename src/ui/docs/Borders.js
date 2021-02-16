import { withMessage } from '~/hocs';
import { FlexLayout, Text, theme } from '~/ui';

const { borders } = theme;

function Borders({ message }) {
  console.log(message);

  return (
    <FlexLayout flexDirection="column" space={8}>
      {Object.keys(borders).map((border) => {
        return (
          <FlexLayout key={border} alignItems="center" space={8}>
            <Text px={4} py={2} sx={{ border, minWidth: 300 }} variant="m-spaced-bold">
              {border}
            </Text>
            <Text variant="m-spaced-bold">{borders[border]}</Text>
          </FlexLayout>
        );
      })}
    </FlexLayout>
  );
}

export default withMessage(Borders);
