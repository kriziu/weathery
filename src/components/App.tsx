import { FC, useState } from 'react';
import GoogleMapsLocation from './GoogleMapsLocation';

const App: FC = (): JSX.Element => {
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  return (
    <div>
      <h2>
        {coords.lat}, {coords.lng}
      </h2>
      <GoogleMapsLocation setCoords={setCoords} />
    </div>
  );
};

export default App;
