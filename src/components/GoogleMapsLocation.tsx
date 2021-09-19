import { FC, useEffect, useState } from 'react';

import { Input } from '@chakra-ui/input';
import { Spinner } from '@chakra-ui/spinner';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Box, Center } from '@chakra-ui/layout';

interface GoogleMapsLocationProps {
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  setAppLocation: React.Dispatch<React.SetStateAction<string>>;
}

const GoogleMapsLocation: FC<GoogleMapsLocationProps> = ({
  setCoords,
  setAppLocation,
}): JSX.Element => {
  const [location, setLocation] = useState('');
  const [geolocation, setGeolocation] = useState({ lat: 0, lng: 0 });

  const handleLocationSelect = async (value: string) => {
    const result = await geocodeByAddress(value);
    const latLng = await getLatLng(result[0]);
    setCoords(latLng);
    setAppLocation(value);
    setLocation('');
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setGeolocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  return (
    <PlacesAutocomplete
      value={location}
      onChange={setLocation}
      onSelect={handleLocationSelect}
      searchOptions={{ types: ['(cities)'] }}
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

export default GoogleMapsLocation;
