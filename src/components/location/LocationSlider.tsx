import { FC } from 'react';

import { Box, Heading } from '@chakra-ui/layout';
import { Slide } from '@chakra-ui/transition';
import { useColorModeValue } from '@chakra-ui/color-mode';

import InputLocation from './InputLocation';
import Map from './Map';

interface LocationSliderProps {
  changingLocation: boolean;
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
          onClick={() => setChangingLocation(false)}
        >
          {coords.lat.toFixed(5) + ', ' + coords.lng.toFixed(5)}
        </Heading>
        <InputLocation setCoords={setCoords} />
        <Box p={[5, 10]} height="sm">
          <Map coords={coords} setCoords={setCoords} />
        </Box>
      </Box>
    </Slide>
  );
};

export default LocationSlider;
