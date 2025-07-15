import { useParams } from 'react-router-dom';
import { properties } from '../services/propertyService';
import { useWeather } from '../hooks/useWeather';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const { weather, loading, error } = useWeather(property?.city);

  if (!property) {
    return <main className="property-details-container"><h2>Property not found</h2></main>;
  }

  // Show a default error if weather fetch fails but no error message
  const weatherError = error || (weather === null && !loading ? 'An error occurred while fetching weather.' : '');

  return (
    <main className="property-details-container">
      <article className="property-details-card large-layout">
        <div className="property-details-image-wrapper">
          <img src={property.image} alt={property.name} className="property-details-image" />
        </div>
        <section className="property-details-info">
          <h1>{property.name}</h1>
          <p className="address">{property.address}</p>
          <p className="price">${property.price} / night</p>
          <p className="desc">{property.description}</p>
          <section aria-label={`Current weather in ${property.city}`} style={{marginTop: '1rem'}}>
            <h2>Current Weather in {property.city}</h2>
            {loading && <p>Loading weather...</p>}
            {weatherError && <p className="error" role="alert">{weatherError}</p>}
            {weather && (
              <div className="weather-box">
                <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} />
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{weather.temp}&deg;C</div>
                  <div style={{ textTransform: 'capitalize' }}>{weather.description}</div>
                </div>
              </div>
            )}
          </section>
        </section>
      </article>
    </main>
  );
}
