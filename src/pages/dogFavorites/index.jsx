import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Nav from "../../components/nav"

export default function DogFavorites() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLocalStorage = async () => {
    try {
      setLoading(true);


      setImages(JSON.parse(localStorage.getItem('favorites')) || []);
      console.log(images)
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

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

