import { Breed } from "@/types/Breed";
import SelectTraits from "@/components/SelectTraits";
import SelectGroups from "@/components/SelectGroups";
import NameField from "@/components/NameField";


interface FilterSectionProps {
  breeds: Breed[];
  onSizeChange: (size: string) => void;
  onTraitsChange: (traits: string[]) => void;
  onNameChange: (name: string) => void;
  onGroupsChange: (groups: string[]) => void;
  numberOfBreeds: number;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  breeds,
  onNameChange,
  onSizeChange,
  onTraitsChange,
  onGroupsChange,
  numberOfBreeds
}) => {
  return (
    <section className="md:w-1/3 lg:w-1/4 bg-gray-200 dark:bg-slate-900 md:h-screen p-4 mx-4 mb-8 shadow-md rounded-md">
      
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
        <div className="custom-select-container mb-4">
          <label className="block font-medium mb-1">Size</label>
          <select
            className="custom-select"
            onChange={(e) => onSizeChange(e.target.value)}
          >
            <option value="">All Sizes</option>
            <option value="small">Small (less than 25 lbs)</option>
            <option value="medium">Medium (26 to 50 lbs)</option>
            <option value="large">Large (more than 50 lbs)</option>
          </select>
        </div>

        {/* Group Filter */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Groups</label>
          <SelectGroups
            breeds={breeds}
            onGroupsChange={onGroupsChange}
          />
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
