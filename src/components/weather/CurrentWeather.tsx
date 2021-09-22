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

// TODO:
// przeniesc uv do szczegolow razem z zachode i wshodem
// wyswietlic deszcz
// ujednolicic informacje (ma byc ciasno, dividery, zeby bylo widac sekcje)
// popracowac nad ikona kolo glownej temperatury (jest za nisko)
// godzinowa temperatura i deszcz oraz ikona

const CurrentWeather: FC = (): JSX.Element => {
  return (
    <Box>
      <Box>
        <Flex justify="space-around" alignItems="center">
          <HStack height={16} alignItems="center" spacing={2}>
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
      <Flex mt={5}>
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
