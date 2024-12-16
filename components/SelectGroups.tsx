import { useState, useMemo } from "react";
import { Breed } from "@/types/Breed";
import Select, { MultiValue } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

interface SelectGroupsProps {
  breeds: Breed[];
  onGroupsChange: (groups: string[]) => void;
}

const SelectGroups: React.FC<SelectGroupsProps> = ({ breeds, onGroupsChange }) => {
  const [selectedGroups, setSelectedGroups] = useState<MultiValue<OptionType>>([]);

  // Dynamically generate unique groups options from breeds.breed_group
  const options: OptionType[] = useMemo(() => {
    const allGroups = breeds
      .map((breed) => breed.breed_group?.trim()) // Extract and trim breed_group
      .filter(Boolean) as string[]; // Filter out undefined/null values
    const uniqueGroups = Array.from(new Set(allGroups)); // Remove duplicates
    return uniqueGroups.map((groups) => ({
      value: groups.toLowerCase(),
      label: groups,
    }));
  }, [breeds]);

  const handleChange = (selected: MultiValue<OptionType>) => {
    setSelectedGroups(selected);
    onGroupsChange(selected.map((group) => group.value)); // Notify parent with selected groups values
  };

  return (
    <Select
      isMulti
      instanceId="select-groups"
      options={options}
      value={selectedGroups}
      onChange={handleChange}
      placeholder="Select Groups"
    />
  );
};

export default SelectGroups;
