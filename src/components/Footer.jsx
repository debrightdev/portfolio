import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='w-90 mx-auto'>
        <h2 className='mb-20'>Contact Me.</h2>
        <p className='text-18 mb-20'>
          Reach out to me{' '}
          <a
            target='_blank'
            href='mailto:augustine@debrightweb.com'
            className='text-black font-semibold'
          >
            augustine@debrightweb.com ↗
          </a>
          ,
          <a
            target='_blank'
            href='mailto:debrightdev@gmail.com'
            className='text-black font-semibold'
          >
            debrightdev@gmail.com ↗
          </a>
        </p>
        <ul className='flex align-center gap-20 font-semibold'>
          <li>
            <a href=''>GitHub↗</a>
          </li>
          <li>
            <a href=''>Linkedin↗</a>
          </li>
          <li>
            <a href=''>Twitter↗</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
