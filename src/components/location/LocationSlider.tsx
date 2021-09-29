import { FC } from 'react';

import { Box, Heading } from '@chakra-ui/layout';
import { Slide } from '@chakra-ui/transition';
import { useColorModeValue } from '@chakra-ui/color-mode';

import InputLocation from './InputLocation';
import MapGoogle from './MapGoogle';

interface LocationSliderProps {
  changingLocation: boolean;
  location: string;
  coords: {
    lat: number;
    lng: number;
  };
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  setChangingLocation: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationSlider: FC<LocationSliderProps> = ({
  changingLocation,
  location,
  coords,
  setCoords,
  setChangingLocation,
}): JSX.Element => {
  const bgColor = useColorModeValue('white', 'gray.800');
  return (
    <Slide in={changingLocation} direction="top" style={{ zIndex: 5 }}>
      <Box bgColor={bgColor} w="full" height="full" px={5} pb={40}>
        <Heading
          size="xl"
          textAlign="center"
          pt={5}
          cursor="pointer"
          onClick={() =>
            location !== 'No location selected' && setChangingLocation(false)
          }
        >
          {location}
        </Heading>
        <InputLocation setCoords={setCoords} />
        <Box p={[5, 10]} height="sm">
          <MapGoogle coords={coords} setCoords={setCoords} />
        </Box>
      </Box>
    </Slide>
  );
};

export default LocationSlider;
