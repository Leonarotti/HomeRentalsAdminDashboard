import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/weatherService';

export function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    setError('');
    fetchWeather(city)
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not fetch weather');
        setLoading(false);
      });
  }, [city]);

  return { weather, loading, error };
}
