import React, { useState } from 'react';
import Nav from './nav';
import Resume from './resume';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Footer from './footer';

export default function Container() {
  const [thisPage, setThisPage] = useState('about');
  const showPage = () => {
    if (thisPage === 'about') {
      return <About />;
    }
    if (thisPage === 'portfolio') {
      return <Portfolio />;
    }
    if (thisPage === 'contact') {
      return <Contact />;
    }
    return <Resume />;
  };
  const tabChange = (page) => setThisPage(page);
  return (
    <div>

      <Nav thisPage={thisPage} tabChange={tabChange} />
      {showPage()}
      
      <Footer/>

    </div>

  
  );
}