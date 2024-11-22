import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dpImg from '../assets/img/dp.jpg';

const About = () => {
  return (
    <div>
      <Header />
      <div className='content w-90 mx-auto pt-100 pb-100 text-center'>
        <h1 className='text-48 mb-20'>Augustine (Debright) Onyejekwe</h1>
        <p className='text-18 mb-20'>
          CS + Math Major{' '}
          <a href='' target='_blank' className='text-primary'>
            @ Coming Soon ↗
          </a>
        </p>
        <div className='row flex-between-2 w-75 mx-auto gap-20'>
          <div className='left w-50'>
            <img src={dpImg} alt='' className='w-100 h-100 block object-fit' />
          </div>
          <div className='right w-50'>
            <p>
              I am a passionate web developer with expertise in crafting
              scalable, high-performance web and mobile applications. Currently
              pursuing a degree in Computer Science with a focus on Artificial
              Intelligence at Morgan State University, I specialize in building
              systems that seamlessly integrate machine learning with backend
              and frontend technologies.
            </p>
            <p>
              Proficient in API development, and Microservices, I also excel in
              Fullstack Development (Web - React and Laravel), creating
              intuitive interfaces and robust infrastructures. A strong advocate
              for open source, I have contributed libraries, frameworks, and
              tools in diverse domains such as databases, networking, and
              machine learning.
            </p>
            <p>
              When not coding or solving complex problems on LeetCode, you can
              find me dominating a game of ping pong. Explore my projects on
              GitHub:{' '}
              <a
                href='https://github.com/debrightdev'
                target='_blank'
                className='text-primary'
              >
                @debrightdev↗
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
