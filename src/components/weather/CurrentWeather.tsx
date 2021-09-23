import { Box, Flex, Heading, HStack } from '@chakra-ui/layout';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Divider } from '@chakra-ui/react';
import { TiWeatherCloudy } from 'react-icons/ti';
import { FC } from 'react';

const CurrentWeather: FC = (): JSX.Element => {
  return (
    <Box px={[5, 10]}>
      <Box>
        <Flex justify="center" alignItems="center">
          <HStack height={16} alignItems="center" spacing={2} mr={[2, 10]}>
            <Heading size="4xl">30°</Heading>
            <Divider orientation="vertical" borderColor="black" opacity={0.2} />
            <Heading size="lg">Cloudy</Heading>
          </HStack>
          <TiWeatherCloudy size={80} />
        </Flex>
        <Heading size="md" textAlign="center" mt={3}>
          Feels like 28°
        </Heading>
      </Box>
      <Flex mt={5} px={['10vw', '20vw', '30vw', '32vw']}>
        <Stat textAlign="center">
          <StatLabel>Precipitation</StatLabel>
          <StatNumber>12%</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>Wind</StatLabel>
          <StatNumber>2 m/s</StatNumber>
        </Stat>
      </Flex>
    </Box>
  );
};

export default CurrentWeather;
