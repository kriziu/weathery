import axios from 'axios';

interface Description {
  description: string;
  icon: string;
  id: number;
  main: string;
}

// TODO: Dziedziczenie bo duzo pol sie powtarza
export interface WeatherType {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Description[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface FutureWeatherType {
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
  };
}

export interface HourlyWeatherType {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Description[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface ResponseDataType {
  current: WeatherType;
  daily: FutureWeatherType;
  hourly: HourlyWeatherType;
}

export const getForecast = async (coords: { lat: number; lng: number }) => {
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

  console.log(weather);
};
