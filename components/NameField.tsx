import { useState } from "react";

interface NameFieldProps {
  onNameChange: (name: string) => void;
}

const NameField: React.FC<NameFieldProps> = ({ onNameChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onNameChange(value);
  };

  const clearInput = () => {
    setInputValue(""); // Clear the input field
    onNameChange(""); // Notify parent of cleared state
  };

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1 dark:text-black">Breed Name</label>
      <div className="relative flex items-center">
        <input
          type="text"
          className="w-full p-2 pr-12 border rounded"
          placeholder="Type a breed name"
          value={inputValue}
          onChange={handleInputChange}
        />
          <button
            type="button"
            className="absolute right-0 top-0 h-full px-4 bg-gray-300 hover:bg-gray-400 text-black rounded-r"
            onClick={clearInput}
            aria-label="Clear input"
          >
            ✕
          </button>
      </div>
    </div>
  );
};

export default NameField;
