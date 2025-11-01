import { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { HashLoader } from "react-spinners";
import Nav from "../../components/nav";
import SimpleDropdown from "../../components/dropdown";

export default function Root() {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchDog = async () => {
    try {
      setLoading(true)
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setImage(data.message);
      setLoading(false)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  const handleNext = () => {
    fetchDog();
  };


  if (loading) {
    return (
      <div className="h-screen flex flex-col">
        <Nav />
        <div className="flex flex-col justify-center items-center h-screen">
          <HashLoader color={"#C5C5C5"} size={30} />
        </div>
      </div>
    )
  }
  return (
    <div className="h-screen flex flex-col">
      <Nav />

      <div className="justify-center flex">
        <SimpleDropdown />
      </div>

      <div className="flex flex-col justify-center items-center flex-1">
        <img src={image} className="w-128 h-128 object-contain" />
        <div
          className="flex flex-row items-center gap-2 border py-1 px-4 mt-10 rounded-lg border-[#C5C5C5] hover:bg-slate-800 cursor-pointer"
          onClick={handleNext}
        >
          <p>Next</p>
          <GrFormNextLink />
        </div>
      </div>
    </div>
  )
}

