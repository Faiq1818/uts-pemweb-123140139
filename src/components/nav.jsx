import { FaCat, FaDog } from "react-icons/fa";
import { TbSwitchHorizontal } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSwitch = () => {
    if (location.pathname === "/cat") {
      navigate("/");
    } else {
      navigate("/cat");
    }
  };

  return (
    <nav className="mx-4 p-4 flex flex-row items-center justify-between font-semibold">
      <div className="text-xl flex flex-row items-center gap-2">
        <FaCat />
        <FaDog />
        <p>Cat and Dog Funfact and Gallery</p>
      </div>

      <div onClick={handleSwitch} className="flex flex-row items-center gap-2 border px-4 py-1 rounded-lg hover:bg-slate-800 cursor-pointer">
        <TbSwitchHorizontal />
        <p>Switch to {location.pathname === "/cat" ? "Dog" : "Cat"}</p>
      </div>

    </nav>
  )
}

