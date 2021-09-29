import { FC } from 'react';

import { IconButton } from '@chakra-ui/button';
import { Box, Heading } from '@chakra-ui/layout';

import { IoSettingsOutline } from 'react-icons/io5';

import { ResponseDataType } from '../api/forecast';
import { gradients } from '../utils/gradients';
import CurrentWeather from './weather/CurrentWeather';
import useResizeObserver from 'use-resize-observer';

interface MainComponentProps {
  forecast: ResponseDataType;
  setChangingLocation: React.Dispatch<React.SetStateAction<boolean>>;
  setSettingsShown: React.Dispatch<React.SetStateAction<boolean>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  location: string;
}

const MainComponent: FC<MainComponentProps> = ({
  forecast,
  setChangingLocation,
  setSettingsShown,
  setHeight,
  location,
}): JSX.Element => {
  const { ref } = useResizeObserver({
    onResize: e => {
      e.height && setHeight(e.height);
    },
  });

  return (
    <Box
      bgGradient={
        forecast
          ? gradients[forecast.current.weather[0].icon]
          : gradients['03d']
      }
      position="fixed"
      width="full"
      ref={ref}
      top={0}
      color={
        forecast && forecast.current.weather[0].icon[2] === 'n'
          ? 'gray.500'
          : 'gray.800'
      }
      pb={[100, 200, 300, 400]}
    >
      <Box p={[5, 10]} position="relative" pb={0}>
        <Heading
          size="xl"
          textAlign="center"
          cursor="pointer"
          mt={12}
          onClick={() => setChangingLocation(true)}
        >
          {location}
        </Heading>

        <IconButton
          position="absolute"
          right={[4, 6, 8, 10]}
          top={[4, 6, 8, 10]}
          zIndex={5}
          aria-label="settings"
          variant="ghost"
          onClick={() => setSettingsShown(true)}
          icon={<IoSettingsOutline size={38} />}
        />

        <CurrentWeather
          {...forecast.current}
          feels_like={forecast.daily[0].feels_like.day}
          pop={forecast.daily[0].pop}
        />
      </Box>
    </Box>
  );
};

export default MainComponent;
