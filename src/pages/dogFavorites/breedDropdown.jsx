import { useContext, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router";
import { DogBreedDropdownContext } from '.';

export default function BreedDropdown() {
  const { breedSelected, setBreedSelected, options } = useContext(DogBreedDropdownContext)
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setBreedSelected(option);
    setIsOpen(false);

    if (option === "Gallery") {
      navigate("/doggallery");
    }
  };

  return (
    <div className="w-48 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-1 text-left bg-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-between"
      >
        <span>{breedSelected}</span>
        <IoMdArrowDropdown />
      </button>

      {isOpen && (
        <div className="absolute w-full mt-2 bg-black border border-gray-300 rounded-lg">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-2 text-left hover:bg-slate-900 first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:bg-slate-900"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
