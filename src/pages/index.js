import React from 'react';
import Hero from '../components/Hero/Hero';
import Subscription from '../components/Subscription/Subscription';
import ComingUp from '../components/ComingUp/ComingUp';
import HeaderBackground from '../components/HeaderBackground/HeaderBackground';
import FooterBackground from '../components/FooterBackground/FooterBackground';

const HomePage = () => (
  <>
    <HeaderBackground />
    <Hero />
    <Subscription />
    <ComingUp />
    <FooterBackground />
  </>
);

export default HomePage;