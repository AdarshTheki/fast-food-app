import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../axiosConfig";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../redux/CartSlice";

const Details = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart());
  };

  const location = useLocation();
  const path = location.pathname.replace("/detail/", "");

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductLists = async () => {
      try {
        setLoading(true);
        const response = await API.get(`lookup.php?i=${path}`);
        setProduct(response.data?.meals[0]);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(true);
      }
    };
    getProductLists();
  }, [path]);

  console.log(product);

  const Loading = () => {
    return <h1 className='text-4xl text-center m-10'>Loading...</h1>;
  };
  const ProductDetail = () => {
    return (
      <div className='container mx-auto'>
        <div className='bg-white py-10'>
          <div className='flex gap-4'>
            <div className='max-w-[400px]'>
              <img
                src={product?.strMealThumb}
                className='w-100 object-contain rounded-lg'
                alt='img'
              />
            </div>
            <div className='grid justify-center items-center'>
              <div className='text-xl capitalize font-medium'>
                <span className='mx-4 text-blue-400'>ID:{product?.idMeal}</span>
                #{product?.strTags}
              </div>
              <div>
                <h2 className='text-6xl mb-5 font-medium text-gray-700'>
                  {product?.strMeal}
                </h2>
                <span className='py-1 text-xl px-4 rounded-2xl'>
                  Location: {product?.strArea}
                </span>
                <span className='py-1 text-xl px-4 rounded-2xl'>
                  Category: {product?.strCategory}
                </span>
              </div>
              <div>
                <button
                  onClick={() => handleAddToCart(product?.idMeal)}
                  className='rounded px-6 py-2 bg-green-600 text-white'>
                  Add to Cart
                </button>
              </div>
              <div className='flex flex-wrap gap-2 font-medium'>
                <a
                  className='rounded px-6 py-2 bg-orange-600 text-white'
                  href={product?.strSource}>
                  More Details
                </a>
                <a
                  className='rounded px-6 py-2 bg-red-600 text-white'
                  href={product?.strYoutube}>
                  Youtube Channel
                </a>
              </div>
            </div>
          </div>
          <div className='text-xl mb-4 font-medium'>
            <h2 className='text-4xl'>Ingredient</h2>#{product?.strIngredient1},
            #{product?.strIngredient2}, #{product?.strIngredient3}, #
            {product?.strIngredient4}, #{product?.strIngredient5}, #
            {product?.strIngredient6}, #{product?.strIngredient7}, #
            {product?.strIngredient8}, #{product?.strIngredient9}, #
            {product?.strIngredient10}, #{product?.strIngredient11}, #
            {product?.strIngredient12}, #{product?.strIngredient13}, #
            {product?.strIngredient14},{" "}
          </div>
          <hr />
          <div className='text-xl mb-4 font-medium'>
            <h2 className='text-4xl'>Measures</h2>
            {product?.strMeasure1}, {product?.strMeasure2},{" "}
            {product?.strMeasure3}, {product?.strMeasure4},{" "}
            {product?.strMeasure5}, {product?.strMeasure6},{" "}
            {product?.strMeasure7}, {product?.strMeasure8},{" "}
            {product?.strMeasure9}, {product?.strMeasure10},{" "}
            {product?.strMeasure11}, {product?.strMeasure12},{" "}
            {product?.strMeasure13}, {product?.strMeasure14},{" "}
            {product?.strMeasure15},{" "}
          </div>
          <hr />
          <div className='mb-4'>
            <h2 className='text-4xl font-medium'>Description</h2>
            {product?.strInstructions}
          </div>
        </div>
      </div>
    );
  };

  return <div>{loading ? <Loading /> : <ProductDetail />}</div>;
};

export default Details;
