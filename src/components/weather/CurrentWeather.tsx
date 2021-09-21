import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
} from '@chakra-ui/layout';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Divider } from '@chakra-ui/react';
import { TiWeatherCloudy } from 'react-icons/ti';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { FC } from 'react';

const CurrentWeather: FC = (): JSX.Element => {
  return (
    <Box>
      <Box>
        <Flex justify="space-around" alignItems="center">
          <HStack height={16} alignItems="center" spacing={2}>
            <Heading size="4xl">30°</Heading>
            <Divider orientation="vertical" />
            <Heading size="lg">Cloudy</Heading>
          </HStack>
          <TiWeatherCloudy size={80} />
        </Flex>
        <Heading size="md" textAlign="center">
          Feels like 28°
        </Heading>
      </Box>
      <Flex mt={5}>
        <Stat textAlign="center">
          <StatLabel>Clouds</StatLabel>
          <StatNumber>80%</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>UV</StatLabel>
          <StatNumber>5</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>Wind</StatLabel>
          <StatNumber>2 m/s</StatNumber>
        </Stat>
      </Flex>
      <Flex mt={10} justifyContent="space-around">
        <Flex flexDirection="column" justifyContent="center">
          <Box m="auto">
            <FiSunrise size={25} />
          </Box>
          <Heading size="xl">6:23</Heading>
        </Flex>
        <Flex flexDirection="column" justifyContent="center">
          <Box m="auto">
            <FiSunset size={25} />
          </Box>
          <Heading size="xl">19:57</Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CurrentWeather;
