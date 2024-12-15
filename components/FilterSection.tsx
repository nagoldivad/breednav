import { Breed } from "@/types/Breed";
import SelectTraits from "@/components/SelectTraits";
import NameField from "@/components/NameField";


interface FilterSectionProps {
  breeds: Breed[];
  onSizeChange: (size: string) => void;
  onTraitsChange: (traits: string[]) => void;
  onNameChange: (name: string) => void;
  numberOfBreeds: number;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  breeds,
  onNameChange,
  onSizeChange,
  onTraitsChange,
  numberOfBreeds
}) => {
  return (
    <section className="w-1/4 bg-gray-200 h-screen p-4 mx-4 shadow-md rounded-md">
      
      <h2 className="text-xl font-bold mb-4">
        <img src="/images/filters-2-svgrepo-com.svg" alt="filter icon" className="w-8 h-8 mr-2 inline-block" />
        Filters
      </h2>

      <div className="">

        <div className="text-xl mb-4">
          Showing {numberOfBreeds} Breeds
        </div>

        {/* Name filter */}
        <div className="mb-4">
          <NameField onNameChange={onNameChange} />
        </div>

        {/* Size Filter */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Size</label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => onSizeChange(e.target.value)}
          >
            <option value="">All Sizes</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Trait Filter */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Traits</label>
          <SelectTraits
            breeds={breeds}
            onTraitsChange={onTraitsChange}
          />
        </div>

      </div>
    </section>
  );
};

export default FilterSection;
