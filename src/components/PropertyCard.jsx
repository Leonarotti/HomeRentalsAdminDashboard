import { Link } from 'react-router-dom';

export default function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <img src={property.image} alt={property.name} className="property-image" />
      <div className="property-info">
        <h2>{property.name}</h2>
        <p className="address">{property.address}</p>
        <p className="price">${property.price} / night</p>
        <Link to={`/properties/${property.id}`} className="details-btn" aria-label={`View details for ${property.name}`}>View Details</Link>
      </div>
    </article>
  );
}
