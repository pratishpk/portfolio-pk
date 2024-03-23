import React from 'react'
import './Projects.css'
import gym_img from '../../Assets/ProjectIMG/Gym.jpeg'
import twogood from '../../Assets/ProjectIMG/TwoGood.jpeg'
import portfolio from '../../Assets/ProjectIMG/Portfolio.jpeg'
import calculator from '../../Assets/ProjectIMG/Calculator.jpeg'
import media_net from '../../Assets/ProjectIMG/Media.jpeg'
import real_estate from '../../Assets/ProjectIMG/Property.jpeg'
import profile from '../../Assets/ProjectIMG/Profile.jpeg'
import quote from '../../Assets/ProjectIMG/Quote.jpeg'
import medilife from '../../Assets/ProjectIMG/MediLife.jpeg'

const Projects = () => {
    return (
        <>
            <div className='about-main'><p style={{ fontSize: "20px" }}>Main    /   Projects</p> <h4 style={{ fontSize: '28px' }}>All Projects</h4></div>

            <div className='projects-main' style={{ display: 'flex', flexWrap: 'wrap', gap: '40px',rowGap:'70px', alignItems: 'center', justifyContent: 'center', marginTop: '100px', marginBottom:'100px', marginLeft:'10%', marginRight:'10%' }}>
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

                <div className='projects'>
                    <div className='upper'>
                        <img src={portfolio} style={{ width: '100%', height: '160px' }} />
                    </div>
                    <div className='down'>
                        <h3>Portfolio Website</h3>
                        <p>Built a unique portfolio with creative flair, overcoming design challenges for an impactful, user-friendly online showcase of skills.</p>
                        <a href='https://pratishpk.github.io/Pratish/'><button>Checkout</button></a>
                        <div>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Javascript</p>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className='upper'>
                        <img src={quote} style={{ width: '100%', height: '160px' }} />
                    </div>
                    <div className='down'>
                        <h3>Quote Generator</h3>
                        <p>Designed a dynamic Quote Generator, enhancing user engagement with personalized, ever-changing quotes.</p>
                        <a href='https://pratishpk.github.io/quote/'><button>Checkout</button></a>
                        <div>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Javascript</p>
                            <p>JSON API</p>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className='upper'>
                        <img src={medilife} style={{ width: '100%', height: '160px' }} />
                    </div>
                    <div className='down'>
                        <h3>MediLife</h3>
                        <p>Optimized Medilife platform, elevating user engagement with intuitive design. Enhanced functionality and aesthetics for a seamless healthcare experience.</p>
                        <a href='https://pratishpk.github.io/MediLife/'><button>Checkout</button></a>
                        <div>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Javascript</p>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className='upper'>
                        <img src={calculator} style={{ width: '100%', height: '160px' }} />
                    </div>
                    <div className='down'>
                        <h3>Calculator</h3>
                        <p>Crafted an efficient calculator, refining problem-solving skills and deepening understanding of interactive web development.</p>
                        <a href='https://pratishpk.github.io/calculator/'><button>Checkout</button></a>
                        <div>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Javascript</p>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className='upper'>
                        <img src={profile} style={{ width: '100%', height: '160px' }} />
                    </div>
                    <div className='down'>
                        <h3>Profile Card</h3>
                        <p>Crafted a sleek profile card, blending creativity and precision. Achieved a minimalist design for an elegant, professional presentation.</p>
                        <a href='https://pratishpk.github.io/profile-card/'><button>Checkout</button></a>
                        <div>
                            <p>HTML5</p>
                            <p>CSS3</p>
                        </div>
                    </div>
                </div>


                <div className='projects'>
                    <div className='upper'>
                        <img src={media_net} style={{ width: '100%', height: '160px' }} />
                    </div>
                    <div className='down'>
                        <h3>Clone: Media.net</h3>
                        <p>Revitalized Media.net clone, focusing on sleek design and seamless navigation. Streamlined user interface for an enhanced browsing experience.</p>
                        <a href='https://pratishpk.github.io/Media.net//'><button>Checkout</button></a>
                        <div>
                            <p>HTML5</p>
                            <p>CSS3</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Projects
