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
import {
  TiWeatherCloudy,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherSunny,
} from 'react-icons/ti';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { Tag } from '@chakra-ui/tag';
import { FC } from 'react';

const FutureWeather: FC = (): JSX.Element => {
  return (
    <Box mt={20}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>Today</Heading>
        <Tag cursor="pointer" p={2} fontSize="md">
          See all
        </Tag>
      </Flex>

      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column" alignItems="center">
          <TiWeatherCloudy size={50} />
          <Divider />
          <Stat textAlign="center">
            <StatNumber>24°</StatNumber>
            <StatLabel>Morning</StatLabel>
          </Stat>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <TiWeatherPartlySunny size={50} />
          <Divider />
          <Stat textAlign="center">
            <StatNumber>30°</StatNumber>
            <StatLabel>Afternoon</StatLabel>
          </Stat>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <TiWeatherSunny size={50} />
          <Divider />
          <Stat textAlign="center">
            <StatNumber>27°</StatNumber>
            <StatLabel>Evening</StatLabel>
          </Stat>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <TiWeatherNight size={50} />
          <Divider />
          <Stat textAlign="center">
            <StatNumber>25°</StatNumber>
            <StatLabel>Night</StatLabel>
          </Stat>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FutureWeather;
