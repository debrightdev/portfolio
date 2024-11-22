import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='w-90 mx-auto pb-20'>
        <h2 className='mb-20'>Contact Me.</h2>
        <p className='mb-20'>
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
            <a href='https://github.com/debrightdev' target='_blank'>GitHub↗</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/debrightdev/' target='_blank'>Linkedin↗</a>
          </li>
          <li>
            <a href='https://x.com/debrightdev' target='_blank'>Twitter↗</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
