import React from 'react';
import Hero from '../../components/hero';
import Slpash from '../../components/splash';
import About from '../../components/about';
import Count from '../../components/count';
import Laureants from '../../components/laureants';
import Sponsors from '../../components/sponsors';
import Application from '../../components/application';
import Program from '../../components/program';
import Singers from '../../components/singers';
const Home = () => {
  return (
    <>
      <Slpash />
      <main>
        <Hero />
        <About />
        <Count />
        <Laureants />
        <Singers />
        <Program />
        <Sponsors />
      </main>
    </>
  );
};

export default Home;
