import { FC } from 'react';

import { Box, Heading, HStack } from '@chakra-ui/layout';

const WeatherContainer: FC<{ title: string; margin?: number }> = ({
  children,
  title,
  margin = 14,
}): JSX.Element => {
  return (
    <Box
      mb={margin}
      w={{ md: 500, lg: 750 }}
      ml={{ md: '50%' }}
      transform={{ md: 'translateX(-50%)' }}
      px={[5, 10]}
      position="relative"
      zIndex={1}
    >
      <Heading mb={4}>{title}</Heading>
      <HStack spacing={6} overflowX="scroll" px={2} pb={4}>
        {children}
      </HStack>
    </Box>
  );
};

export default WeatherContainer;
