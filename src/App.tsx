import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home-page";
import Layout from "./components/layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<HomePage />} />
        <Route path="news/:id" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
