import { Box, Flex, Heading } from '@chakra-ui/layout';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Divider } from '@chakra-ui/react';
import {
  TiWeatherCloudy,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherSunny,
} from 'react-icons/ti';
import { Tag } from '@chakra-ui/tag';
import { FC } from 'react';
import DetailWeather from './DetailWeather';

const FutureWeather: FC = (): JSX.Element => {
  return (
    <>
      <Box px={[5, 10]}>
        <Flex
          justifyContent={['space-between', 'space-between', 'center']}
          alignItems="center"
          mb={4}
        >
          <Heading mr={{ md: 64 }}>Today</Heading>
          <Tag cursor="pointer" p={2} fontSize="md">
            See all
          </Tag>
        </Flex>

        <Flex
          justifyContent={['space-between', 'space-around', 'center']}
          alignItems="center"
        >
          <Flex flexDirection="column" alignItems="center" mr={{ md: 10 }}>
            <TiWeatherCloudy size={50} />
            <Divider borderColor="black" opacity={0.1} my={2} />
            <Stat textAlign="center">
              <StatNumber>24°</StatNumber>
              <StatLabel>Morning</StatLabel>
            </Stat>
          </Flex>
          <Flex flexDirection="column" alignItems="center" mr={{ md: 10 }}>
            <TiWeatherPartlySunny size={50} />
            <Divider borderColor="black" opacity={0.1} my={2} />
            <Stat textAlign="center">
              <StatNumber>30°</StatNumber>
              <StatLabel>Afternoon</StatLabel>
            </Stat>
          </Flex>
          <Flex flexDirection="column" alignItems="center" mr={{ md: 10 }}>
            <TiWeatherSunny size={50} />
            <Divider borderColor="black" opacity={0.1} my={2} />
            <Stat textAlign="center">
              <StatNumber>27°</StatNumber>
              <StatLabel>Evening</StatLabel>
            </Stat>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <TiWeatherNight size={50} />
            <Divider borderColor="black" opacity={0.1} my={2} />
            <Stat textAlign="center">
              <StatNumber>25°</StatNumber>
              <StatLabel>Night</StatLabel>
            </Stat>
          </Flex>
        </Flex>
      </Box>
      <DetailWeather />
    </>
  );
};

export default FutureWeather;
