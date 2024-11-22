import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='content w-90 mx-auto pt-100 pb-100'>
        <h1 className='text-48 mb-20'>Pushing Machines to Brilliance.</h1>
        <div>
          <span className='text-18 block mb-20'>
            Web dev{' '}
            <a
              className='text-primary'
              target='_blank'
              href='https://debrightweb.com'
            >
              @debrightweb ↗
            </a>{' '}
          </span>
          <p className='text-18 block mb-20 max-w-600'>
            Software Engineer - Building ML Architectures + Models, Backend +
            Infrastructure Systems & Web + Mobile Apps (Light Work).
          </p>
          <p className='text-18 block mb-20 max-w-600'>The only way to do great work is to love what you do.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
