import { FC, useEffect, useState } from 'react';

import { Input } from '@chakra-ui/input';
import { Spinner } from '@chakra-ui/spinner';
import { Box, Center } from '@chakra-ui/layout';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

interface InputLocationProps {
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

const InputLocation: FC<InputLocationProps> = ({ setCoords }): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [browserCoords, setBrowserCoords] = useState({ lat: 0, lng: 0 });

  const handleLocationSelect = async (value: string) => {
    const result = await geocodeByAddress(value);
    const latLng = await getLatLng(result[0]);
    setCoords(latLng);
    setInputValue('');
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      if (!coords) return;

      setCoords(coords);
      setBrowserCoords(coords);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlacesAutocomplete
      value={inputValue}
      onChange={setInputValue}
      onSelect={handleLocationSelect}
      searchOptions={{
        location: new google.maps.LatLng(browserCoords),
        radius: 2000,
      }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Box px={6}>
          <Input {...getInputProps({ placeholder: 'Search location' })} />

          <Box>
            {loading && (
              <Center>
                <Spinner />
              </Center>
            )}

            {suggestions.map((suggestion, i) => {
              const style = {
                backgroundColor: suggestion.active ? 'black' : 'white',
              };
              return (
                <div {...getSuggestionItemProps(suggestion, { style })} key={i}>
                  {suggestion.description}
                </div>
              );
            })}
          </Box>
        </Box>
      )}
    </PlacesAutocomplete>
  );
};

export default InputLocation;
