import PropertyCard from './PropertyCard';
import { properties } from '../services/propertyService';

export default function PropertyList() {
  return (
    <main>
      <section className="properties-list-container">
        <h1>Rental Properties</h1>
        <div className="properties-grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}
