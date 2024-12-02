import React from "react";
import Homepage from "./pages/Homepage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Route, Routes } from "react-router-dom";
import FavoritesPages from "./pages/FavoritesPages.jsx";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        {" "}
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<FavoritesPages />} />
      </Routes>
    </div>
  );
};

export default App;
