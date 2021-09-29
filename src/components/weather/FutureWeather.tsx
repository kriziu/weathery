import { FC, useContext, Fragment, useState } from 'react';

import { Box, Flex } from '@chakra-ui/layout';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Divider } from '@chakra-ui/react';
import { SlideFade } from '@chakra-ui/transition';
import { useColorModeValue } from '@chakra-ui/color-mode';

import DetailWeather from './DetailWeather';
import { tempConverter } from '../../utils/tempConverter';
import { DegreeContext } from '../App';
import { FutureWeatherType } from '../../api/forecast';
import { icons } from '../../utils/icons';
import WeatherContainer from './WeatherContainer';
import { borderRadius } from '../../constants/styles';

const namesOfDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const FutureWeather: FC<FutureWeatherType[]> = (props): JSX.Element => {
  const { degree } = useContext(DegreeContext);
  const days = Object.values(props);

  const [selectedDay, setSelectedDay] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const dividerColor = useColorModeValue('gray.700', 'gray.100');

  const handleSelectedDayChange = (index: number): void => {
    setIsChanging(true);

    setTimeout(() => {
      setSelectedDay(index);
      setIsChanging(false);
    }, 200);
  };

  const renderDays = (): JSX.Element[] => {
    return days.map((day, index) => {
      const date = new Date(day.dt * 1000);

      return (
        <Fragment key={index}>
          <Flex
            flexDirection="column"
            alignItems="center"
            p={4}
            bgColor={index === selectedDay ? bgColor : 'transparent'}
            borderRadius={borderRadius}
            cursor="pointer"
            onClick={() => handleSelectedDayChange(index)}
            transition="all .2s"
          >
            <Box w={12} h={12}>
              {icons[day.weather[0].icon]}
            </Box>

            <Divider borderColor={dividerColor} opacity={0.1} my={2} />
            <Stat textAlign="center">
              <StatNumber>{tempConverter(degree, day.temp.day)}°</StatNumber>
              <StatNumber fontSize="md">
                {tempConverter(degree, day.temp.night)}°
              </StatNumber>
              <StatLabel>
                {index === 0 ? 'Today' : namesOfDays[date.getDay()]}
              </StatLabel>
            </Stat>
          </Flex>
          {index !== days.length - 1 && (
            <Divider
              orientation="vertical"
              height={20}
              borderColor={dividerColor}
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
      <SlideFade in={!isChanging}>
        <DetailWeather {...days[selectedDay]} />
      </SlideFade>
    </>
  );
};

export default FutureWeather;
