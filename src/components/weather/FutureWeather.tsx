import { FC, useContext, Fragment } from 'react';

import { Box, Flex } from '@chakra-ui/layout';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Divider } from '@chakra-ui/react';

import DetailWeather from './DetailWeather';
import { tempConverter } from '../../utils/tempConverter';
import { DegreeContext } from '../App';
import { FutureWeatherType } from '../../api/forecast';
import { icons } from '../../utils/icons';
import WeatherContainer from './WeatherContainer';

const namesOfDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wendesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const FutureWeather: FC<FutureWeatherType[]> = (props): JSX.Element => {
  const degree = useContext(DegreeContext);
  const days = Object.values(props);

  const renderDays = (): JSX.Element[] => {
    return days.map((day, index) => {
      const date = new Date(day.dt * 1000);

      return (
        <Fragment key={index}>
          <Flex flexDirection="column" alignItems="center" pb={4}>
            <Box w={12} h={12}>
              {icons[day.weather[0].icon]}
            </Box>

            <Divider borderColor="black" opacity={0.1} my={2} />
            <Stat textAlign="center">
              <StatNumber>{tempConverter(degree, day.temp.day)}°</StatNumber>
              <StatLabel>
                {index === 0 ? 'Today' : namesOfDays[date.getDay()]}
              </StatLabel>
            </Stat>
          </Flex>
          {index !== days.length - 1 && (
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

  return (
    <>
      <WeatherContainer title="Forecast" margin={-6}>
        {renderDays()}
      </WeatherContainer>
      <DetailWeather {...days[0]} />
    </>
  );
};

export default FutureWeather;
