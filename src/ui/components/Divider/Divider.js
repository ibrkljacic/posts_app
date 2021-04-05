import { Box } from '~/ui';

function Divider({ color = 'gray-500' }) {
  return <Box bg={color} sx={{ height: '1px' }} />;
}

export default Divider;
