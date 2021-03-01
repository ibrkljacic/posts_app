import { FlexLayout, Text } from '~/ui';

export function Comment({ comment }) {
  const { body, email } = comment;

  return (
    <FlexLayout alignItems="center" bg="primary" p={4} space={4} sx={{ borderRadius: 'm' }}>
      <FlexLayout
        alignItems="center"
        bg="gray-600"
        flexShrink="0"
        justifyContent="center"
        sx={{ borderRadius: 'round', height: '52px', width: '52px' }}
      >
        <Text color="background" variant="xl-spaced-bold" sx={{ textTransform: 'uppercase' }}>
          {email.slice(0, 2)}
        </Text>
      </FlexLayout>
      <FlexLayout flexDirection="column" space={2}>
        <Text color="gray-600" variant="s-spaced-bold">
          {email}
        </Text>
        <Text color="black" variant="s-spaced">
          {body}
        </Text>
      </FlexLayout>
    </FlexLayout>
  );
}
export default Comment;
