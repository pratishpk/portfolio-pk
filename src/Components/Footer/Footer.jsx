import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../../Assets/logo.gif';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div style={{ paddingRight: '25px' }}>
                    <img className='logo' src={logo} alt="Logo" />
                    <p style={{ fontSize: '15px' }}>Pratish: Passionate web developer, graphic designer, startup mentor. Committed to crafting digital experiences with creativity and expertise.</p>
                </div>
                <div>
                    <h6>Address:</h6>
                    <p>Kathumar, Alwar <br />Rajasthan, India <br /> Pin - 321605</p>
                    <p>ameriyapk2601@gmail.com</p>
                </div>
                <div className='links'>
                    <h6>Links</h6>
                    <p><NavLink to="/" >Home</NavLink></p>
                    <p><NavLink to="/about" >About</NavLink></p>
                    <p><NavLink to="/services" >Services</NavLink></p>
                    <p><NavLink to="/contact" >Contact</NavLink></p>
                </div>
                <div className='social'>
                    <h6>Social</h6>
                    <div className='social-p'>
                        <p><a href='https://www.facebook.com/mr.pratish.pk/'><i className="fab fa-facebook-square"></i></a></p>
                        <p><a href='https://www.instagram.com/mr_pratish.pk/'><i className="fab fa-instagram-square"></i></a></p>
                        <p><a href='https://twitter.com/AmeriyaPratish/'><i className="fab fa-twitter-square"></i></a></p>
                        <p><a href='https://www.linkedin.com/in/pratishpk/'><i className="fab fa-linkedin"></i></a></p>
                        <p><a href='https://github.com/pratishpk'><i className="fab fa-github-square"></i></a></p>
                    </div>
                </div>
            </div>

            <div className='fot'>
                <hr />
                <p className='note'>Ⓒ 2024 - Pratish Khandelwal</p>
            </div>
        </>
    );
}

export default Footer;
