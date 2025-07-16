import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home-page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<HomePage />} />
      <Route path="/news/:id" element={<HomePage />} />
    </Routes>
  );
};

export default App;
