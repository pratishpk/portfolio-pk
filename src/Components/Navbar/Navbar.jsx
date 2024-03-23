import React from 'react';
import { Link } from 'react-router-dom';
import toggle_light from '../../Assets/night.png';
import toggle_dark from '../../Assets/day.png';
import './Navbar.css';

const Navbar = ({ theme, setTheme }) => {
  const [clicked, setClicked] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(null);

  const handleClick = (index) => {
    setClicked(!clicked);
    setActiveLink(index);
  };

  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <nav>
        <Link to='/'>
          <h1 style={{lineHeight:'12px'}}>
            <span>P</span>ratish's<br />
            <span style={{ fontSize: '12px', paddingLeft:'44px'  }}>Portfolio</span>
          </h1>
        </Link>

        <div>
          <ul id='navbar' className={clicked ? 'active' : ''}>
            <li className={activeLink === 0 ? 'active' : ''} onClick={() => handleClick(0)}>
              <Link to='/' className={activeLink === 0 ? 'active' : ''}>Home</Link>
            </li>
            <li className={activeLink === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
              <Link to='/About' className={activeLink === 1 ? 'active' : ''}>About</Link>
            </li>
            <li className={activeLink === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
              <Link to='/Services' className={activeLink === 2 ? 'active' : ''}>Services</Link>
            </li>
            <li className={activeLink === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
              <Link to='/Contact' className={activeLink === 3 ? 'active' : ''}>Contact</Link>
            </li>
            <li className={activeLink === 4 ? 'active' : ''} onClick={() => handleClick(4)} style={{display:'none'}}>
              <Link to='/Projects' className={activeLink === 4 ? 'active' : ''}>Projects</Link>
            </li>
          </ul>
        </div>

        <div id='mobile' onClick={handleClick}>
          <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <img onClick={toggleMode} src={theme === 'light' ? toggle_light : toggle_dark} alt='' className='toggle-icon'></img>
      </nav>
    </>
  );
};

export default Navbar;
