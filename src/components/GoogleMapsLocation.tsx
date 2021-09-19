import { FC, useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

interface GoogleMapsLocationProps {
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

const GoogleMapsLocation: FC<GoogleMapsLocationProps> = ({
  setCoords,
}): JSX.Element => {
  const [location, setLocation] = useState('');

  const handleLocationSelect = async (value: string) => {
    const result = await geocodeByAddress(value);
    const latLng = await getLatLng(result[0]);
    setCoords(latLng);
  };

  return (
    <PlacesAutocomplete
      value={location}
      onChange={setLocation}
      onSelect={handleLocationSelect}
      searchOptions={{ types: ['(cities)'] }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input {...getInputProps({ placeholder: 'Search location' })} />

          <div>
            {loading && '...loading'}

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
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default GoogleMapsLocation;
