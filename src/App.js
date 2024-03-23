import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main/Main';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Projects from './Pages/Projects/Projects';
import Preloader from './Components/Preloader/Preloader';

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  useEffect(() => {
    // Simulate loading delay (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className='App'>
          {loading ? <Preloader /> : (

      <Router>
        <div className={`container ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>

          <Footer />
        </div>
      </Router>
          )}</div>
  );
};

export default App;
