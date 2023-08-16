import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../redux/categorySlice";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.category.items);
  const status = useSelector((state) => state.category.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategory());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div className='text-4xl text-center m-4 py-10'>Loading...</div>;
  }

  if (status === "error") {
    return (
      <div className='text-4xl text-center m-4 py-10'>
        Error: Unable to fetch categories
      </div>
    );
  }

  return (
    <div className='bg-pink-100'>
      <h2 className='text-4xl bg-yellow-400 text-center py-2 text-gray-600 font-medium capitalize'>
        categories Lists
      </h2>
      <div className='container py-10 mx-auto'>
        <div className='grid gap-3 items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
          {categories.map((product) => {
            const {idCategory, strCategory, strCategoryThumb} = product
            return(
            <NavLink
              key={idCategory}
              className='bg-white mx-auto py-3 w-[250px] gap-4 rounded hover:shadow-xl duration-300 flex justify-evenly items-center'
              to={`product/${strCategory}`}>
              <div className='w-[80px]'>
                <img
                  className='rounded-xl object-contain'
                  src={strCategoryThumb}
                  width='100%'
                  alt=''
                />
              </div>
              <h2 className='text-gray-700 font-medium'>
                {strCategory}
              </h2>
            </NavLink>
          )})}
        </div>
      </div>
    </div>
  );
};

export default Categories;
