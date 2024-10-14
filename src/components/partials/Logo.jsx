import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/' className='text-center'>
      <h5 className='mb-0 leading-none ~text-lg/2xl'>Fashion Daily</h5>
      <small className='text-sm uppercase opacity-50 tracking-wider block'>
        Magazine
      </small>
    </Link>
  );
};

export default Logo;
