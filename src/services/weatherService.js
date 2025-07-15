import axios from 'axios';

const API_KEY = 'b38ed48f434fe77decedd64d92a49b56'; // My API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city) {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    const data = res.data;
    return {
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  } catch (err) {
    return null;
  }
} 