import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const cart = useSelector(state => state.cart)
  return (
    <div className='py-5 bg-[#333] text-white'>
      <div className='container text-xl'>
        <NavLink to='/' className='px-5 capitalize'>
          fast food delivery app
        </NavLink>
        <button className='border px-5 rounded-xl py-1'>Carts ({cart.length})</button>
      </div>
    </div>
  );
}

export default Header
