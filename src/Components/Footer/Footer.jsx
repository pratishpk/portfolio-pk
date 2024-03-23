import React from 'react'
import './Footer.css'
import logo from '../../Assets/logo.gif'


const Footer = () => {
    return (

        <>
            <div className='footer'>
                <div style={{ paddingRight: '25px' }}>
                    <img className='logo' src={logo} />
                    <p style={{ fontSize: '15px' }}>Pratish: Passionate web developer, graphic designer, startup mentor. Committed to crafting digital experiences with creativity and expertise.</p>
                </div>
                <div>
                    <h6>
                        Address:
                    </h6>
                    <p>Kathumar, Alwar <br />Rajasthan,India <br /> Pin - 321605</p>
                    <p>ameriyapk2601@gmail.com</p>
                </div>
                <div className='links'>
                    <h6>Links</h6>
                    <p><a href=''>Home</a></p>
                    <p><a href=''>About</a></p>
                    <p><a href=''>Services</a></p>
                    <p><a href=''>Contact</a></p>
                </div>
                <div className='social'>
                    <h6>Social</h6>
                    <div className='social-p' >
                        <p><a href=''><i class="fa-brands fa-square-facebook"></i></a></p>
                        <p><a href=''><i class="fa-brands fa-square-instagram"></i></a></p>
                        <p><a href=''><i class="fa-brands fa-square-twitter"></i></a></p>
                        <p><a href=''><i class="fa-brands fa-linkedin"></i></a></p>
                        <p><a href=''><i class="fa-brands fa-square-github"></i></a></p>
                    </div>
                </div>
                 
            </div>

            <div className='fot'>
            <hr/>
            <p className='note'>Ⓒ 2024 - Pratish Khandelwal </p> 
            </div>
                       
        </>

    )
}

export default Footer
