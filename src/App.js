import React from "react";
import Categories from "./Pages/Categories";
import Products from "./Pages/Products";
import { Route, Routes } from "react-router-dom";
import Details from "./Pages/Details";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <div>
      <Routes>
        <Route exact path='/' element={<Categories />} />
        <Route path="product/:id" element={<Products/>}/>
        <Route path="detail/:id" element={<Details/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
