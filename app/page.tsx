"use client";

import { useState, useEffect, useMemo } from "react";
import { Breed } from "@/types/Breed";
import { fetchBreeds } from "@/utils/service";
import DogCard from "@/components/DogCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSection from "@/components/FilterSection";


const HomePage: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState(""); // State for breed's name
  const [size, setSize] = useState<string>(""); // State for size filter
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]); // State for trait filter
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
      const matchesSize = size ? breed.size === size : true;
      const matchesTraits = selectedTraits.every((trait) =>
        breed.temperament?.toLowerCase().includes(trait.toLowerCase())
      );
      return matchesName && matchesSize && matchesTraits;
    });
  }, [breeds, nameFilter, size, selectedTraits]);

  // Update numberOfBreeds whenever filteredBreeds changes
  useEffect(() => {
    setNumberOfBreeds(filteredBreeds.length);
  }, [filteredBreeds]);

  return (
    <div className="page-wrapper">
      <Header title="BreedNav" />
      <main className="flex flex-row mx-4">
        <FilterSection
          breeds={breeds}
          onNameChange={(name) => setNameFilter(name)}
          onSizeChange={(newSize) => setSize(newSize)}
          onTraitsChange={(newTraits) => setSelectedTraits(newTraits)}
          numberOfBreeds={numberOfBreeds}
        />
        <section className="w-3/4 mx-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10 mb-12">
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
