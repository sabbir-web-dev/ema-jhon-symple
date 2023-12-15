import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "../pages/Shop";
import Navber from './../components/Navber/Navber';

function RouteAll() {
  return (
    <BrowserRouter>
    <Navber />
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteAll;
