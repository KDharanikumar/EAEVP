import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default Navigation