import { Routes, Route } from "react-router";
import Root from "./pages/root";
import DogGallery from "./pages/dogGallery";
import CatRoot from "./pages/catRoot";
import DogFavorites from "./pages/dogFavorites";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/doggallery" element={<DogGallery />} />
      <Route path="/dogfavorites" element={<DogFavorites />} />
      <Route path="/cat" element={<CatRoot />} />
    </Routes>
  )
}

