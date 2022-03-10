import { FC, useEffect } from 'react';

import { IconButton } from '@chakra-ui/button';
import { Box, Heading } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';

import { IoSettingsOutline } from 'react-icons/io5';
import useResizeObserver from 'use-resize-observer';

import { gradients } from '../utils/gradients';
import CurrentWeather from './weather/CurrentWeather';
import { borderRadius } from '../styles/styles';
import { ResponseDataType } from '../types/forecast';

interface MainComponentProps {
  forecast: ResponseDataType;
  setChangingLocation: React.Dispatch<React.SetStateAction<boolean>>;
  setSettingsShown: React.Dispatch<React.SetStateAction<boolean>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  coords: {
    lat: number;
    lng: number;
  };
  locationName: string;
  fetchForecast: () => void;
}

const MainComponent: FC<MainComponentProps> = ({
  forecast,
  setChangingLocation,
  setSettingsShown,
  setHeight,
  coords,
  locationName,
  fetchForecast,
}): JSX.Element => {
  const { ref } = useResizeObserver({
    onResize: e => {
      e.height && setHeight(e.height);
    },
  });

  const toast = useToast();

  useEffect(() => {
    setTimeout(
      () =>
        toast({
          duration: null,
          render: () => (
            <Box
              color="white"
              p={3}
              bg="blue.300"
              borderRadius={borderRadius}
              px={5}
              onClick={() => {
                fetchForecast();
                toast.closeAll();
              }}
            >
              <Heading size="sm">Click to update wether</Heading>
            </Box>
          ),
        }),
      3600000
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {locationName}
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
