import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div>
      <Header />
      <div className='content w-90 mx-auto pt-100 pb-100'>
        <h1 className='text-48 mb-20 text-center'>Projects</h1>
        <p className='max-w-400 mx-auto text-center'>
          Coding is like a puzzle, and sometimes the best way to solve it is to
          take a step back and look at the big picture. -{' '}
          <a href='#'>Augustine Michael</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
