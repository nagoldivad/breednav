import { useState } from "react";
import { Breed } from "@/types/Breed";
import { fetchBreedImages } from "@/utils/service";
import ImageGallery from "./ImageGallery";

const DogCard: React.FC<{ breed: Breed }> = ({ breed }) => {
  const [images, setImages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // Loading state for the button

  const handleViewMoreImages = async () => {
    setLoading(true); // Start loading
    try {
      const fetchedImages = await fetchBreedImages(breed.id);
      setImages(fetchedImages);
      setIsOpen(true);
    } catch (error) {
      console.error("Error fetching breed images:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="overflow-hidden bg-white dark:bg-slate-900 shadow-md rounded-md">

      <div className="relative overflow-hidden">
        <img
          src={breed.reference_image_id 
            ? `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
            : "error_not_found.webp"}
          alt={breed.name || "Dog image"}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/error_not_found.webp"; // Fallback image
          }}
          className="w-full h-96 sm:h-48 md:h-92 lg:h-80 object-cover object-top mb-4"
        />
      </div>

      <section className="mx-4 mb-8 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 flex items-center">
          {breed.name}
        </h2>
        <button
            onClick={handleViewMoreImages}
            className={`ml-2 text-blue-500 hover:text-blue-700 ${
              loading ? "animate-pulse" : ""
            }`}
            disabled={loading}
            aria-label="View More Images"
          >
            <img src="/images/image-multiple-svgrepo-com.svg" className="w-8 h-8" />
        </button>
      </section>

      <section className="mx-4 mb-8">
        <div className="text-xl mb-4">
          {breed.breed_group ? `${breed.breed_group} group` : "No group"}
        </div>
        <p className="mb-2">{breed.temperament}</p>
        <p className="text-gray-700 text-sm">Life Span: {breed.life_span}</p>
        <p className="text-gray-700 text-sm">
          Bred For: {breed.bred_for || "Not specified"}
        </p>
        <p className="text-gray-700 text-sm">
          Height: {breed.height?.imperial + " inches" || "Not specified"}
        </p>
        <p className="text-gray-700 text-sm">
          Weight: {breed.weight?.imperial + " pounds" || "Not specified"}
        </p>
      </section>

      {/* New Lightbox */}
      <ImageGallery images={images} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default DogCard;
