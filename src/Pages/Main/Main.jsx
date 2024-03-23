import React from 'react'
import './Main.css'
import { Typewriter } from 'react-simple-typewriter'
import gym_img from '../../Assets/ProjectIMG/Gym.jpeg'
import twogood from '../../Assets/ProjectIMG/TwoGood.jpeg'
import real_estate from '../../Assets/ProjectIMG/Property.jpeg'
import logo from '../../Assets/logo.gif'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Main = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);
    return (

        <>
            <div className='main'>
                <div className='left'>
                    <h1 data-aos="fade-up">Hi, My Name is
                        <span><br />Pratish</span></h1>
                    <h3 data-aos="fade-right">
                        and I am a passionate<br />{' '}
                        <span>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Web Developer', 'Graphic Designer', 'Startup Mentor', 'Web Developer']}
                                loop={1}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h3>
                </div>

                <div className='right'>
                    <img data-aos="fade-left" src={logo} alt="Web Developer Portfolio - React.js, JavaScript, HTML5, CSS3" />
                </div>

            </div>


            <hr />



            <div className="skills-h" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem' }}>My Expertise</h2>
            </div>

            <hr style={{ marginTop: '40px' }} />
            <div className="outerdiv">
                <div className="innerdiv">

                    <div className="div1 eachdiv" data-aos="fade-up">
                        <div className="userdetails">
                            <div className="imgbox">
                                <img src={'https://pratishpk.github.io/Pratish/bg.png'} alt="" />
                            </div>
                        </div>
                        <div className="review">
                            <h4>Web Development</h4>
                            <p>“ I possess expertise in frontend development, proficient in HTML5, CSS3, and JavaScript,
                                enabling me to craft responsive websites. Additionally, I excel in leveraging WordPress and Wix
                                to create fully responsive web solutions.”</p>
                        </div>
                    </div>

                    <div className="div2 eachdiv" data-aos="fade-up">
                        <div className="userdetails">
                            <div className="imgbox">
                                <img src={'https://pratishpk.github.io/Pratish/graphic.png'} alt="" />
                            </div>
                        </div>
                        <div className="review">
                            <h4>Graphics Design</h4>
                            <p>“ I offer graphic design expertise for impactful promotional collateral. My creations, spanning
                                flyers, posters, banners, brochures, and more, artfully communicate messaging, captivate
                                audiences, and align seamlessly with brand identity. ”</p>
                        </div>
                    </div>

                    <div className="div3 eachdiv" data-aos="fade-up">
                        <div className="userdetails">
                            <div className="imgbox">
                                <img src="https://pratishpk.github.io/Pratish/startup1.png" alt="" />
                            </div>
                        </div>
                        <div className="review dark">
                            <h4>Startup Management</h4>
                            <p>“ Experienced in guiding startup development with expertise in strategic planning, resource
                                allocation, and project management. My capabilities ensure effective execution during crucial
                                growth phases, fostering success and sustainability for emerging ventures. ”</p>
                        </div>
                    </div>

                    <div className="div4 eachdiv" data-aos="fade-up">
                        <div className="userdetails">
                            <div className="imgbox" >
                                <img src="https://pratishpk.github.io/Pratish/MS.png" alt="" style={{ borderRadius: '0', borderStyle: 'none' }} />
                            </div>
                        </div>
                        <div className="review dark">
                            <h4>Microsoft Office</h4>
                            <p>“ I possess a comprehensive skillset in Microsoft Office tailored for corporate requirements.
                                Proficiency in applications like Word, Excel, PowerPoint, and Outlook equips me to efficiently
                                manage essential tasks and enhance productivity within corporate settings.”
                            </p>
                        </div>
                    </div>

                    <div className="div5 eachdiv" data-aos="fade-up">
                        <div className="userdetails">
                            <div className="imgbox">
                                <img src="https://pratishpk.github.io/Pratish/elect.png" alt="" style={{ width: '15rem' }} />
                            </div>

                        </div>
                        <div className="review">
                            <h4>Core Electronics</h4>
                            <p>“ Graduated in Electronics and Communication Engineering. Proficient in circuit design, signal
                                processing, and communication protocols. Skilled in troubleshooting, hardware/software
                                integration, and project management. Adept at utilizing technical knowledge to solve complex
                                problems and contribute to innovative solutions in the field. ”</p>
                        </div>
                    </div>
                </div>
            </div>


            <hr style={
                { marginTop: '50px' }
            } />



            <div className="skills-h" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem' }}>Projects</h2>
            </div>

            <hr style={{ marginTop: '40px', marginBottom: '80px' }} />

            <div  data-aos="fade-up" className='projects-main' style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '50px', marginLeft: '10%', marginRight: '10%' }}>
                <div className='projects'>
                    <div className='upper'>
                        <img src={gym_img} style={{ width: '100%', height: '160px' }} />
                    </div>
                    <div className='down'>
                        <h3>Gym Website</h3>
                        <p>Crafted an interactive fitness platform, enhancing user engagement with a seamless and dynamic online experience.</p>
                        <a href='https://gym-app-pk.netlify.app/'><button>Checkout</button></a>
                        <div>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>ReactJS</p>
                            <p>RapidAPI</p>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                    <div className='upper'>
                        <img src={real_estate} style={{ width: '100%', height: '160px' }} />
                    </div>
                    <div className='down'>
                        <h3>Real Estate Website</h3>
                        <p>Designed a sophisticated Real Estate website, enhancing my skills in web development. Delivered a seamless user experience and aesthetic appeal.</p>
                        <a href='https://pratishpk.github.io/property/'><button>Checkout</button></a>
                        <div>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Bootstrap</p>

                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className='upper'>
                        <img src={twogood} style={{ width: '100%', height: '160px' }} />
                    </div>
                    <div className='down'>
                        <h3>Clone: Two Good</h3>
                        <p>
                            Improved user experience with smooth scrolling and enhanced navigation on Two Good Co. Clone for optimized engagement.</p>
                        <a href='https://pratishpk.github.io/Twogoodclone/'><button>Checkout</button></a>
                        <div>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Javascript</p>
                        </div>
                    </div>
                </div>


            </div>
            <a href='/Projects' className='main-btn'>
                <button className='button-2' data-aos="flip-right" >Show All</button>
            </a>








        </>


    )
}

export default Main
