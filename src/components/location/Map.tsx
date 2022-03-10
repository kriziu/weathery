import { FC, useEffect } from 'react';

import { Box } from '@chakra-ui/layout';

import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Props {
  coords: { lat: number; lng: number };
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

const LocationMarker = ({ coords, setCoords }: Props) => {
  useMapEvents({
    click(e) {
      setCoords(e.latlng);
    },
  });

  const map = useMap();

  useEffect(() => {
    map.setView(coords);
  }, [coords, map]);

  return coords === null ? null : <Marker position={coords} />;
};

const Map: FC<Props> = ({ coords, setCoords }) => {
  let geoCoords = coords;

  if (coords.lat === 0 && coords.lng === 0)
    geoCoords = { lat: 52.2297, lng: 21.0122 };

  useEffect(() => {});

  return (
    <Box h={500}>
      <MapContainer center={geoCoords} zoom={13} style={{ height: '95%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker coords={coords} setCoords={setCoords} />
      </MapContainer>
    </Box>
  );
};
export default Map;
