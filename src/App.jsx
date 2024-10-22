import { lazy, useEffect, useState, Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './pages/home/Header';
import IntroSection from './pages/home/IntroSection';
const AboutSection = lazy(() => import('./pages/home/AboutSection'));
const ProductSection = lazy(() => import('./pages/home/ProductSection'));
const TestimonialSection = lazy(() => import('./pages/home/TestimonialSection'));
const CTASection = lazy(() => import('./pages/home/CtaSection'));
const ContactUsSection = lazy(() => import('./pages/home/ContactUsSection'));
const FooterSection = lazy(() => import('./pages/home/FooterSection'));
const BackToTopButton = lazy(() => import('./components/button/BackToTop'));

import Aos from 'aos';

import 'aos/dist/aos.css'; // Import the AOS CSS styles

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      easing: "ease-in-cubic"
    });
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <IntroSection />
        <AboutSection />
        <ProductSection />
        <TestimonialSection />
        <CTASection />
        <ContactUsSection />
        <FooterSection />
        <BackToTopButton />
      </Suspense>


    </>
  )
}

export default App
