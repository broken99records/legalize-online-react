import React from 'react';
// import sections
//import Hero from '../components/sections/Hero';
import MyForm from '../components/sections/Form';
import GenericSection from '../components/sections/GenericSection';
import FeaturesTiles from '../components/sections/FeaturesTiles';
//import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
    <GenericSection>
      <MyForm/>
      </GenericSection>
      
      <FeaturesTiles />
      
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;