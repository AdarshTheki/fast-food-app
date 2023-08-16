import API from "../axiosConfig";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const ProductLists = () => {
  const location = useLocation();
  const path = location.pathname.replace("/product/", "");

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductLists = async () => {
      try {
        setLoading(true);
        const response = await API.get(`filter.php?c=${path}`);
        setProduct(response.data?.meals);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(true);
      }
    };
    getProductLists();
  }, [path]);

  const Loading = () => {
    return <h1 className='text-4xl text-center m-10'>Loading...</h1>;
  };

  const ProductShow = () => {
    return (
      <>
        <h1 className='text-4xl bg-yellow-400 text-center mb-10 py-2 text-gray-600 font-medium uppercase'>
          {path}
        </h1>
        <div className='container mx-auto'>
          <div className='justify-center align-center gap-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
            {product.map((item) => {
              const {idMeal, strMeal, strMealThumb} = item
              return (
                <NavLink
                  to={`/detail/${idMeal}`}
                  key={idMeal}
                  className='relative h-[200px] rounded-2xl hover:scale-105 ease-out duration-300'
                  style={{
                    background: `url(${strMealThumb})`,
                    objectFit: "contain",
                    backgroundSize: "cover",
                  }}>
                  <div className='relative bg-[#8080809d] rounded-t-2xl top-0 px-5 text-white'>
                    <p className='pt-2 text-red-500 font-bold'>#{idMeal}</p>
                    <h1 className='pb-1 font-bold capitalize text-yellow-400 text-2xl'>
                      {strMeal.slice(0, 40)}
                    </h1>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return <div>{loading ? <Loading /> : <ProductShow />}</div>;
};

export default ProductLists;
