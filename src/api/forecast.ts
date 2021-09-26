import axios from 'axios';
import { icons } from '../utils/icons';

interface Description {
  description: string;
  icon: keyof typeof icons;
  id: number;
  main: string;
}

// TODO: Dziedziczenie bo duzo pol sie powtarza

interface SmallWeatherType {
  clouds: number;
  dew_point: number;
  dt: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  weather: Description[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface WeatherType extends SmallWeatherType {
  feels_like: number;
  temp: number;
  visibility: number;
}

export interface FutureWeatherType extends SmallWeatherType {
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  rain: number;
  temp: {
    day: number;
    eve: number;
    morn: number;
    night: number;
    max: number;
    min: number;
  };
}

export interface HourlyWeatherType extends SmallWeatherType {
  feels_like: number;
  pop: number;
  temp: number;
  visibility: number;
}

export interface ResponseDataType {
  current: WeatherType;
  daily: FutureWeatherType[];
  hourly: HourlyWeatherType[];
}

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
        appid: '8128f6d612d3981a1bcc39e4639592d3',
      },
    }
  );

  const weather: ResponseDataType = result.data;

  return weather;
};
