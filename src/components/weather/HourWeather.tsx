import { Box, Flex, Heading, HStack } from '@chakra-ui/layout';
import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Center, Divider } from '@chakra-ui/react';
import {
  TiWeatherCloudy,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherSunny,
} from 'react-icons/ti';
import { WiRaindrop } from 'react-icons/wi';
import { Text } from '@chakra-ui/layout';
import React, { FC } from 'react';

const HourWeather: FC = (): JSX.Element => {
  const renderHours = (): JSX.Element[] => {
    const arr = [];

    for (let i = 1; i < 24; i++) {
      arr.push(i);
    }

    return arr.map((i, index) => (
      <React.Fragment key={index}>
        <Stat textAlign="center">
          <StatLabel fontSize="lg">{i}:00 </StatLabel>
          <Center>
            <TiWeatherCloudy size={40} />
          </Center>
          <StatNumber>21°</StatNumber>
          <StatHelpText ml={-4}>
            <Center>
              <Flex alignItems="center">
                <WiRaindrop size={40} />
                <Text ml={-2}>30%</Text>
              </Flex>
            </Center>
          </StatHelpText>
        </Stat>
        {index !== arr.length - 1 && (
          <Divider
            orientation="vertical"
            height={20}
            borderColor="black"
            opacity={0.1}
          />
        )}
      </React.Fragment>
    ));
  };

  return (
    <Box mb={14}>
      <Heading mb={4}>Hour</Heading>
      <HStack spacing={6} overflowX="scroll" px={2}>
        {renderHours()}
      </HStack>
    </Box>
  );
};

export default HourWeather;

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