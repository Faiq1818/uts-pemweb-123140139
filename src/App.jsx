import { Routes, Route } from "react-router";
import Root from "./pages/root";
import DogGallery from "./pages/dogGallery";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/doggallery" element={<DogGallery />} />
    </Routes>
  )
}

