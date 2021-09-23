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

const FutureWeather: FC = (): JSX.Element => {
  return (
    <Box >
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading>Today</Heading>
        <Tag cursor="pointer" p={2} fontSize="md">
          See all
        </Tag>
      </Flex>

      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column" alignItems="center">
          <TiWeatherCloudy size={50} />
          <Divider borderColor="black" opacity={0.1} my={2} />
          <Stat textAlign="center">
            <StatNumber>24°</StatNumber>
            <StatLabel>Morning</StatLabel>
          </Stat>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <TiWeatherPartlySunny size={50} />
          <Divider borderColor="black" opacity={0.1} my={2} />
          <Stat textAlign="center">
            <StatNumber>30°</StatNumber>
            <StatLabel>Afternoon</StatLabel>
          </Stat>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
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
  );
};

export default FutureWeather;

{
  /* <Flex mt={10} justifyContent="space-around">
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
      </Flex> */
}
