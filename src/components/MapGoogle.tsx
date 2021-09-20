import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapGoogle = withGoogleMap<{
  coords: { lat: number; lng: number };
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}>(props => {
  const handleMapClick = (e: any): void => {
    props.setCoords({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  let geoCoords = props.coords;

  if (props.coords.lat === 0 && props.coords.lng === 0)
    geoCoords = { lat: 52.2297, lng: 21.0122 };

  return (
    <GoogleMap defaultZoom={8} center={geoCoords} onClick={handleMapClick}>
      <Marker position={geoCoords} />
    </GoogleMap>
  );
});
export default MapGoogle;
