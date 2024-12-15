import React from 'react';
import { Breed } from '@/types/Breed';


const DogCard: React.FC<{ breed: Breed }> = ({ breed }) => (
  <div className="overflow-hidden bg-white shadow-md rounded-md">
    <div className="relative overflow-hidden">
        {breed.image && (
          <img
              src={breed.image.url}
              alt={breed.name || "Dog image"}
              className="w-full h-96 sm:h-48 md:h-92 lg:h-80 object-cover object-top mb-4"
          />
        )}
    </div>

    <section className="mx-4 mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">{breed.name}</h2>
      <div className="text-xl mb-4">
        {breed.breed_group ?
            (`${breed.breed_group} group`) :
            ('No group')}
      </div>
      <p className="mb-2">{breed.temperament}</p>
      <p className="text-gray-700 text-sm">Life Span: {breed.life_span}</p>
      <p className="text-gray-700 text-sm">Bred For: {breed.bred_for || 'Not specified'}</p>
    </section>

  </div>
);

export default DogCard;
