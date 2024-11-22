import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projectImg from '../assets/img/project-img.webp';

const Projects = () => {
  return (
    <>
      <Header />
      <div className='content w-90 mx-auto pt-100 pb-100'>
        <h1 className='text-48 mb-20 text-center'>Projects</h1>
        <p className='max-w-400 mx-auto text-center mb-20'>
          Coding is like a puzzle, and sometimes the best way to solve it is to
          take a step back and look at the big picture. -{' '}
          <a href='#'>Augustine Michael</a>
        </p>
        <img
          src={projectImg}
          className='w-100 h-100 max-w-600 mx-auto h-300px border-black block object-fit mb-20'
          alt=''
        />
        <div className='max-w-600 mx-auto'>
          <div>
            <i class='ti ti-search'></i>
            <input
              type='text'
              placeholder="Search Augustine's project"
              className='w-100 pt-12 pb-12 px-15'
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
