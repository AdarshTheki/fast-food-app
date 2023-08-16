import React from "react";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import { Route, Routes } from "react-router-dom";
import Details from "./Pages/Details";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Categories />} />
        <Route path="product/:id" element={<Products/>}/>
        <Route path="detail/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
};

export default App;
