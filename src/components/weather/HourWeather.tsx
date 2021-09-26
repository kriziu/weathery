import { FC, useContext, Fragment } from 'react';

import { Flex } from '@chakra-ui/layout';
import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Center, Divider } from '@chakra-ui/react';
import { WiRaindrop } from 'react-icons/wi';
import { Text } from '@chakra-ui/layout';

import { HourlyWeatherType } from '../../api/forecast';
import { tempConverter } from '../../utils/tempConverter';
import { DegreeContext } from '../App';
import { icons } from '../../utils/icons';
import WeatherContainer from './WeatherContainer';

const HourWeather: FC<HourlyWeatherType[]> = (props): JSX.Element => {
  const degree = useContext(DegreeContext);

  const renderHours = (): JSX.Element[] => {
    const hours = Object.values(props);

    return hours.map((hour, index) => {
      const date = new Date(hour.dt * 1000);

      return (
        <Fragment key={index}>
          <Stat textAlign="center">
            <StatLabel fontSize="lg">{date.getHours()}:00</StatLabel>
            <Center w={12} h={12}>
              {icons[hour.weather[0].icon]}
            </Center>
            <StatNumber>{tempConverter(degree, hour.temp)}°</StatNumber>
            <StatHelpText ml={-4}>
              <Center>
                <Flex alignItems="center">
                  <WiRaindrop size={40} />
                  <Text ml={-2}>{(hour.pop * 100).toFixed(0)}%</Text>
                </Flex>
              </Center>
            </StatHelpText>
          </Stat>
          {index !== hours.length - 1 && (
            <Divider
              orientation="vertical"
              height={20}
              borderColor="black"
              opacity={0.1}
            />
          )}
        </Fragment>
      );
    });
  };

  return <WeatherContainer title="Hour">{renderHours()}</WeatherContainer>;
};

export default HourWeather;
