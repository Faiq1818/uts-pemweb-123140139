import { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { RiResetLeftFill } from "react-icons/ri";
import { HashLoader } from "react-spinners";
import Nav from "../../components/nav";

export default function CatRoot() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchCat = async () => {
    try {
      setLoading(true)
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFacts((prevFacts) => [...prevFacts, data.fact]);
      setLoading(false)
      console.log(data.fact)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  const handleNext = () => {
    fetchCat();
  };

  const handleReset = () => {
    setFacts([])
  };


  if (loading) {
    return (
      <div className="h-screen flex flex-col">
        <Nav />

        <div className="flex flex-col items-center flex-1 mx-10 mt-10">
          <table className="border-collapse border border-slate-500 w-full max-w-4xl">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="border border-slate-600 px-4 py-2">#</th>
                <th className="border border-slate-600 px-4 py-2">Cat Fact</th>
              </tr>
            </thead>
            <tbody>
              {facts.map((fact, index) => (
                <tr key={index} className="hover:bg-slate-700">
                  <td className="border border-slate-600 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-600 px-4 py-2">{fact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center h-screen mt-14">
          <HashLoader color={"#C5C5C5"} size={30} />
        </div>
      </div>
    )
  }
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col items-center flex-1 mx-10 mt-10">
        <table className="border-collapse border border-slate-500 w-full max-w-4xl">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="border border-slate-600 px-4 py-2">#</th>
              <th className="border border-slate-600 px-4 py-2">Cat Fact</th>
            </tr>
          </thead>
          <tbody>
            {facts.map((fact, index) => (
              <tr key={index} className="hover:bg-slate-700">
                <td className="border border-slate-600 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-600 px-4 py-2">{fact}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row gap-5">
          <div className="flex items-center ml-56">
            <div
              className="flex flex-row items-center gap-2 border py-1 px-4 mt-10 rounded-lg border-[#C5C5C5] hover:bg-slate-800 cursor-pointer"
              onClick={handleReset}
            >
              <p>Reset</p>
              <RiResetLeftFill />
            </div>
          </div>

          <div className="flex items-center mr-56">
            <div
              className="flex flex-row items-center gap-2 border py-1 px-4 mt-10 rounded-lg border-[#C5C5C5] hover:bg-slate-800 cursor-pointer"
              onClick={handleNext}
            >
              <p>Next Cat Fact!</p>
              <GrFormNextLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

