"use client";

import { useState, useEffect, useMemo } from "react";
import { Breed } from "@/types/Breed";
import { fetchBreeds } from "@/utils/service";
import DogCard from "@/components/DogCard";
import FilterSection from "@/components/FilterSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const HomePage: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState(""); // State for breed's name
  const [size, setSize] = useState<string>(""); // State for size filter
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]); // State for trait filter
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]); // State for groups filter
  const [numberOfBreeds, setNumberOfBreeds] = useState<number>(0); // FilterSection "Showing x Breeds"

  useEffect(() => {
    const loadBreeds = async () => {
      try {
        const data = await fetchBreeds();
        setBreeds(data);
      } catch (error) {
        console.error("Error loading breed data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadBreeds();
  }, []);

  const filteredBreeds = useMemo(() => {
    return breeds.filter((breed) => {
      const matchesName = nameFilter
      ? breed.name.toLowerCase().includes(nameFilter.toLowerCase())
      : true;
      const matchesSize = size
      ? (() => {
          const weightRange = breed.weight?.imperial?.split(" - ").map(Number);
          if (!weightRange || weightRange.length !== 2) return false;
          const [minWeight, maxWeight] = weightRange;
          if (size === "small") return maxWeight <= 25;
          if (size === "medium") return minWeight >= 26 && maxWeight <= 50;
          if (size === "large") return minWeight > 50;
          return false;
        })()
      : true;
      const matchesTraits = selectedTraits.every((trait) =>
        breed.temperament?.toLowerCase().includes(trait.toLowerCase())
      );
      const matchesGroups = selectedGroups.length
        ? selectedGroups.includes((breed.breed_group || "").toLowerCase())
        : true;
      return matchesName && matchesSize && matchesTraits && matchesGroups;
    });
  }, [breeds, nameFilter, size, selectedTraits, selectedGroups]);

  // Update numberOfBreeds whenever filteredBreeds changes
  useEffect(() => {
    setNumberOfBreeds(filteredBreeds.length);
  }, [filteredBreeds]);

  return (
    <div className="page-wrapper font-sans">
      <Header title="BreedNav" />
      <main className="flex flex-col md:flex-row mx-4">

        <FilterSection
          breeds={breeds}
          onNameChange={(name) => setNameFilter(name)}
          onSizeChange={(newSize) => setSize(newSize)}
          onTraitsChange={(newTraits) => setSelectedTraits(newTraits)}
          onGroupsChange={(newGroups) => setSelectedGroups(newGroups)}
          numberOfBreeds={numberOfBreeds}
        />

        <section className="md:w-2/3 mlgw-3/4 mx-4">
          {loading ? (
            <>
              <p className="text-center text-2xl font-bold">Loading...</p>
              <img className="w-56 h-56 mx-auto" src="/images/dog-play-bow.webp" />
            </>
          ) : filteredBreeds.length === 0 ? (
            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold text-gray-700">No Results Found</h2>
              <p className="text-gray-500 mt-2">
                Sorry, no breeds match your filters. Try adjusting your search criteria.
              </p>
              <img className="w-56 h-56 mx-auto" src="/images/dog-play-bow.webp" />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 mb-12">
              {filteredBreeds.map((breed) => (
                <DogCard key={breed.id} breed={breed} />
              ))}
            </div>
          )}
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
