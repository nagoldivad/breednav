import { useState, useMemo } from "react";
import { Breed } from "@/types/Breed";
import Select, { MultiValue } from "react-select";


interface OptionType {
  value: string;
  label: string;
}

interface SelectTraitsProps {
  breeds: Breed[];
  onTraitsChange: (traits: string[]) => void;
}

const SelectTraits: React.FC<SelectTraitsProps> = ({ breeds, onTraitsChange }) => {
  const [selectedTraits, setSelectedTraits] = useState<MultiValue<OptionType>>([]);

  // Dynamically generate unique trait options from breeds.temperament
  const options: OptionType[] = useMemo(() => {
    const allTraits = breeds.flatMap((breed) =>
      breed.temperament?.split(", ").map((trait) => trait.trim()) || []
    );
    const uniqueTraits = Array.from(new Set(allTraits)); // Remove duplicates
    return uniqueTraits.map((trait) => ({
      value: trait.toLowerCase(),
      label: trait,
    }));
  }, [breeds]);

  const handleChange = (selected: MultiValue<OptionType>) => {
    setSelectedTraits(selected);
    onTraitsChange(selected.map((trait) => trait.value)); // Notify parent with selected trait values
  };

  return (
    <Select
      isMulti
      instanceId="select-traits"
      options={options}
      value={selectedTraits}
      onChange={handleChange}
      placeholder="Select Traits"
    />
  );
};

export default SelectTraits;
