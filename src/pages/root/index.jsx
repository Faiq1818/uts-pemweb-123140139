import { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

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
      <div className="flex flex-col justify-center items-center h-screen">
      hello
      </div>
    )

  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={image} className="w-128 h-128 object-contain" alt="Dog" />
      <div className="flex flex-row items-center gap-2 border py-1 px-4 rounded-lg border-[#C5C5C5]" onClick={handleNext}>
        <p>Next</p>
        <GrFormNextLink />
      </div>
    </div>
  )
}

