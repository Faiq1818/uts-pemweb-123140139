import { useEffect, useState, createContext } from "react";
import Nav from "../../components/nav";
import { HashLoader } from "react-spinners";
import { GrFormNextLink } from "react-icons/gr";
import SimpleDropdown from "../../components/dropdown";
import BreedDropdown from "./breedDropdown";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router";

export const DogBreedDropdownContext = createContext();

export default function DogGallery() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [breedSelected, setBreedSelected] = useState('Select a breed');

  const options = [
    "affenpinscher",
    "african",
    "airedale",
    "akita",
    "appenzeller",
    "australian",
    "bakharwal",
    "basenji",
    "beagle",
    "bluetick",
    "borzoi",
    "bouvier",
    "boxer",
    "brabancon",
    "briard",
    "buhund",
    "bulldog",
    "bullterrier",
    "cattledog",
    "cavapoo",
    "chihuahua",
    "chippiparai",
    "chow",
    "clumber",
    "cockapoo",
    "collie",
    "coonhound",
    "corgi",
    "cotondetulear",
    "dachshund",
    "dalmatian",
    "dane",
    "danish",
    "deerhound",
    "dhole",
    "dingo",
    "doberman",
    "elkhound",
    "entlebucher",
    "eskimo",
    "finnish",
    "frise",
    "gaddi",
    "german",
    "greyhound",
    "groenendael",
    "havanese",
    "hound",
    "husky",
    "keeshond",
    "kelpie",
    "kombai",
    "komondor",
    "kuvasz",
    "labradoodle",
    "labrador",
    "leonberg",
    "lhasa",
    "malamute",
    "malinois",
    "maltese",
    "mastiff",
    "mexicanhairless",
    "mix",
    "mountain",
    "mudhol",
    "newfoundland",
    "otterhound",
    "ovcharka",
    "papillon",
    "pariah",
    "pekinese",
    "pembroke",
    "pinscher",
    "pitbull",
    "pointer",
    "pomeranian",
    "poodle",
    "pug",
    "puggle",
    "pyrenees",
    "rajapalayam",
    "redbone",
    "retriever",
    "ridgeback",
    "rottweiler",
    "rough",
    "saluki",
    "samoyed",
    "schipperke",
    "schnauzer",
    "segugio",
    "setter",
    "sharpei",
    "sheepdog",
    "shiba",
    "shihtzu",
    "spaniel",
    "spitz",
    "springer",
    "stbernard",
    "terrier",
    "tervuren",
    "vizsla",
    "waterdog",
    "weimaraner",
    "whippet",
    "wolfhound"
  ];

  const fetchDog = async () => {
    try {
      setLoading(true);
      let res = "";
      if (breedSelected === "Select a breed") {
        res = await fetch("https://dog.ceo/api/breeds/image/random/50");
      } else {
        res = await fetch(`https://dog.ceo/api/breed/${breedSelected}/images/random/50`);
      }
      const data = await res.json();
      console.log(data.message)
      setImages(data.message);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDog();
  }, [breedSelected]);

  const handleNext = () => {
    fetchDog();
  };

  const handleFavoriteNavigate = () => {
    navigate("/dogfavorites");
  };

  const handleFavorite = (img) => {
    const existing = JSON.parse(localStorage.getItem('favorites')) || [];
    const updated = [...existing, img];
    localStorage.setItem('favorites', JSON.stringify(updated));
    console.log(updated);
    console.log(img)
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col">
        <Nav />
        <div className="flex flex-col justify-center items-center h-screen">
          <HashLoader color={"#C5C5C5"} size={30} />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <Nav />

      <div className="justify-center flex flex-row mb-10 gap-4">
        <DogBreedDropdownContext.Provider value={{ breedSelected, setBreedSelected, options }}>
          <div
            className="flex flex-row items-center gap-2 border py-1 px-4 rounded-lg border-[#C5C5C5] hover:bg-slate-800 cursor-pointer"
            onClick={handleFavoriteNavigate}
          >
            <p>Favorites</p>
            <MdFavoriteBorder />
          </div>
          <BreedDropdown />
        </DogBreedDropdownContext.Provider>
        <SimpleDropdown />
      </div>

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white"
            >
              <img
                onClick={() => handleFavorite(img)}
                src={img}
                alt={`Dog ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className="flex flex-row items-center gap-2 border py-1 px-4 mt-10 rounded-lg border-[#C5C5C5] hover:bg-slate-800 cursor-pointer"
          onClick={handleNext}
        >
          <p>Next</p>
          <GrFormNextLink />
        </div>
      </div>

    </div>
  );
}
