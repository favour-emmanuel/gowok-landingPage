import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
import Layout from "./pages/Layout/Layout";
import Error404 from "./pages/Errors/Error404";

function App() {
  return (
    <Routes>
      <Route path={"/"} >
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"company"} element={<Company />} />
          <Route path={"resources"} element={<h1>Resources</h1>} />
          <Route path={"about"} element={<h1>About</h1>} />
          <Route path={"contact"} element={<h1>Contact</h1>} />
        </Route>
        <Route path={"/*"} element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
