import axios from 'axios';
import { ResponseDataType } from '../types/forecast';

const { REACT_APP_FORECAST_API_KEY } = process.env;

export const getForecast = async (coords: {
  lat: number;
  lng: number;
}): Promise<ResponseDataType> => {
  const { lat, lng } = coords;

  const result = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall`,
    {
      params: {
        lat,
        lon: lng,
        appid: REACT_APP_FORECAST_API_KEY,
      },
    }
  );

  const weather: ResponseDataType = result.data;

  return weather;
};
