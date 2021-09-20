import { GoogleMap, Marker } from '@react-google-maps/api';
import { FC } from 'react';

const mapStyles = {
  height: '100%',
  width: '100%',
};

interface MapGoogleProps {
  coords: { lat: number; lng: number };
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

const MapGoogle: FC<MapGoogleProps> = ({ coords, setCoords }) => {
  const handleMapClick = (e: any): void => {
    setCoords({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  let geoCoords = coords;

  if (coords.lat === 0 && coords.lng === 0)
    geoCoords = { lat: 52.2297, lng: 21.0122 };

  return (
    <GoogleMap
      zoom={8}
      center={geoCoords}
      onClick={handleMapClick}
      mapContainerStyle={mapStyles}
    >
      <Marker position={geoCoords} />
    </GoogleMap>
  );
};
export default MapGoogle;
