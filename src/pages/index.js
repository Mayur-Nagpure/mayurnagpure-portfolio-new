import React from 'react';
import { Layout } from '../layout/Layout';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Certification from '../components/Certification/Certification';
import AboutMe from '../components/AboutMe/AboutMe';

import Timeline from '../components/TimeLine/TimeLine';
import Acomplishments from '../components/Acomplishments/Acomplishments';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Technologies />
      <Certification />
      <AboutMe />
    </Layout>
  );
};

export default Home;
