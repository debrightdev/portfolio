import React from 'react';
import icon from '../assets/img/icon.png';

const Header = () => {
  return (
    <>
      <header className='logo flex-between align-center w-90 mx-auto pt-16 pb-16'>
        <div className='flex align-center'>
          <img className='w-50px' src={icon} alt='' />
          <div>
            <h3 className='text-14'>Augustine Michael</h3>
            <p className='text-12'>Software Engineer (Web)</p>
          </div>
        </div>
        <ul className='nav-links flex align-center gap-40 justify-center font-semibold'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
        </ul>
        <button className='font-semibold'>Somewhere building solutions</button>
      </header>
    </>
  );
};

export default Header;
