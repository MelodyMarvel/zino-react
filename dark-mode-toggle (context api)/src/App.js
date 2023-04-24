import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
// import {ThemeContextProvider} from './context/themeContext';

// 1. Create the context in a seperate file
// 2. Provide the context to the components
// 3. Use the context

function App() {
  

  return (
    // <ThemeContextProvider>
    //check index.js
      <div className='main'>
        <Header />
        <Hero />
        <Footer />
      </div>
    // </ThemeContextProvider>
  );
}

export default App;
