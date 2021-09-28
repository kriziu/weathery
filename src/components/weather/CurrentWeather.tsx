import { FC, useContext } from 'react';

import { Box, Flex, Heading, HStack } from '@chakra-ui/layout';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Divider } from '@chakra-ui/react';
import { TiLocationArrow } from 'react-icons/ti';

import { WeatherType } from '../../api/forecast';
import { tempConverter } from '../../utils/tempConverter';
import { DegreeContext } from '../App';
import { icons } from '../../utils/icons';

interface CurrentWeatherType extends WeatherType {
  feels_like: number;
  pop: number;
}

const CurrentWeather: FC<CurrentWeatherType> = (props): JSX.Element => {
  const { degree } = useContext(DegreeContext);

  return (
    <Box px={[5, 10]}>
      <Box>
        <Flex justify="center" alignItems="center">
          <HStack height={16} alignItems="center" spacing={2} mr={[2, 10]}>
            <Heading size="4xl">{tempConverter(degree, props.temp)}°</Heading>
            <Divider orientation="vertical" borderColor="black" opacity={0.2} />
            <Heading size="lg">{props.weather[0].main}</Heading>
          </HStack>
          <Box w={24} h={24}>
            {icons[props.weather[0].icon]}
          </Box>
        </Flex>
        <Heading size="md" textAlign="center" mt={3}>
          Feels like {tempConverter(degree, props.feels_like)}°
        </Heading>
      </Box>
      <Flex mt={5} w={[200, 200, 300]} ml="50%" transform="translateX(-50%)">
        <Stat textAlign="center">
          <StatLabel>Precipitation</StatLabel>
          <StatNumber>{(props.pop * 100).toFixed(0)}%</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>Wind</StatLabel>
          <StatNumber>
            <Flex
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              {props.wind_speed} m/s
              <Box transform={`rotate(${props.wind_deg - 45}deg)`}>
                <TiLocationArrow size={32} />
              </Box>
            </Flex>
          </StatNumber>
        </Stat>
      </Flex>
    </Box>
  );
};

export default CurrentWeather;
