const Footer = () => {
  return (
    <div className='bg-[#313131] text-[#fff] mt-10'>
      <div className='flex flex-wrap justify-evenly gap-5 py-10'>
        <div className='grid justify-center'>
          <h4 className='text-red-500 text-3xl m-4'>Layouts</h4>
          <a className='text-center hover:text-blue-600' href='/'>
            Landing Page 1
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            Landing Page 2
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            Blog
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            Blog Article
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            Pricing
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            About Us
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            Contact
          </a>
        </div>
        <div className='grid justify-center'>
          <h4 className='text-red-500 text-3xl m-4'>Account Pages</h4>
          <a className='text-center hover:text-blue-600' href='/'>
            Login
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            LogIn
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            Sign-up
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            Sign-up validation
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            Reset Password
          </a>
        </div>
        <div className='grid justify-center'>
          <h4 className='text-red-500 text-3xl m-4'>Mics</h4>
          <a className='text-center hover:text-blue-600' href='/'>
            Boxes
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            404 Error
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            403 Error
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            418 Error
          </a>
          <a className='text-center hover:text-blue-600' href='/'>
            Home
          </a>
        </div>
      </div>
      <p className='text-center m-0 pb-2'>
        © Your Company • Terms • Privacy Policy
      </p>
    </div>
  );
};

export default Footer;
