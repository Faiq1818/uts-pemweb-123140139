import { Routes, Route } from "react-router";
import Root from "./pages/root";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
    </Routes>
  )
}

