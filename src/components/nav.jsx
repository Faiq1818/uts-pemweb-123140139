import { FaCat, FaDog } from "react-icons/fa";
import { TbSwitchHorizontal } from "react-icons/tb";

export default function Nav() {
  return (
    <nav className="mx-4 p-4 flex flex-row items-center justify-between font-semibold">
      <div className="text-xl flex flex-row items-center gap-2">
        <FaCat />
        <FaDog />
        <p>Cat and Dog Funfact</p>
      </div>

      <div className="flex flex-row items-center gap-2 border px-4 py-1 rounded-lg hover:bg-slate-800 cursor-pointer">
        <TbSwitchHorizontal />
        <p>Switch Cat/Dog</p>
      </div>

    </nav>
  )
}

