import { useEffect, useState } from "react";
import Nav from "../../components/nav";
import { HashLoader } from "react-spinners";
import { GrFormNextLink } from "react-icons/gr";
import SimpleDropdown from "../../components/dropdown";
import { CiHeart, CiTrash } from "react-icons/ci";

export default function DogFavorites() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDog = async () => {
    try {
      setLoading(true);
      const res = JSON.parse(localStorage.getItem('favorites'))
      const data = res;
      setImages(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  const handleNext = () => {
    fetchDog();
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
        <SimpleDropdown />
      </div>

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white"
            >
              <img
                onClick={() => handleFavorite(img)}
                src={img}
                alt={`Dog ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CiTrash className="text-white text-5xl drop-shadow-lg" />
              </div>
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
