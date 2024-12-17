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

        {/* View More Images Button with Loading State */}
        <div className="mt-4">
          <button
            onClick={handleViewMoreImages}
            className={`px-4 py-2 rounded text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Loading..." : "View More Images"}
          </button>
        </div>
      </section>

      {/* New Lightbox */}
      <ImageGallery images={images} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default DogCard;
