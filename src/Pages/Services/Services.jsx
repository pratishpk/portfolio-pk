import React from 'react';
import './Services.css'
import web from '../../Assets/webd.png'
import graphic from '../../Assets/graphic.png'
import resume from '../../Assets/resume.png'
import startup from '../../Assets/startup.png'

const Services = () => {
    return (
        <>

        <div>
        <div className='about-main'><p style={{ fontSize: "20px" }}>Main    /   Services</p> <h4 style={{ fontSize: '28px' }}>Services</h4></div>
        <main className="s-page">
                <div className="services">
                    <div className="leftsection-services">
                        <h2 style={{ color: 'rgb(170, 107, 228)' }}>Website Development</h2>
                        Submit your details today, and our dedicated team of doctors will swiftly reach out for a virtual
                        consultation. Your health is our top priority, and our experienced medical professionals are ready to
                        provide personalized assistance. Whether you have questions or need medical advice, we are committed to
                        your well-being. Trust us to prioritize your health and deliver expert care from the comfort of your
                        home.
                    </div>
                    <div className="rightsection-services">
                        <img src={web} style={{ maxWidth: '80%' }} alt="" />
                    </div>
                </div>

                <hr style={{ height: '3px' }} />

                <div className="services">
                    <div className="leftsection-services">
                        <h2 style={{ color: 'rgb(170, 107, 228)' }}>Graphics Design</h2>
                        Submit your details, along with your home address, and our dedicated medical team will promptly dispatch a
                        qualified doctor to provide personalized care at the comfort of your home. Your well-being is our priority,
                        and we strive to ensure swift and convenient assistance. Experience the ease of healthcare brought directly
                        to your doorstep with our commitment to your health and safety.
                    </div>
                    <div className="rightsection-services">
                        <img src={graphic} alt="" style={{ maxWidth: '80%' }} />
                    </div>
                </div>

                <hr style={{ height: '3px' }} />

                <div className="services">
                    <div className="leftsection-services">
                        <h2 style={{ color: 'rgb(170, 107, 228)' }}>Startup Mentorship</h2>
                        During Emergency Submit your details for prompt assistance. Our dedicated ambulance service ensures a swift
                        response, reaching your location within 10-15 minutes from the nearest hospital. Whether it's an emergency
                        or you require medical assistance, our team is committed to providing timely and reliable services. Your
                        well-being is our priority, and we strive to make sure you receive the care you need when you need it the
                        most.
                    </div>
                    <div className="rightsection-services">
                        <img src={startup} alt="" style={{ maxWidth: '78%' }} />
                    </div>
                </div>

                <hr style={{ height: '3px' }} />

                <div className="services">
                    <div className="leftsection-services">
                        <h2 style={{ color: 'rgb(170, 107, 228)' }}>Resume Building</h2>
                        Ensure a seamless experience with our home sample collection service. Submit your details, and our dedicated
                        team will promptly visit your home to collect samples, prioritizing your health and well-being. We strive to
                        make healthcare convenient and accessible by bringing our services to your doorstep. Trust us to prioritize
                        your health with the utmost care and efficiency.
                    </div>
                    <div className="rightsection-services">
                        <img src={resume} style={{ maxHeight: '300px', maxWidth: '80%' }} alt="" />
                    </div>
                </div>
            </main>

        </div>
            
        </>
    );
};

export default Services;
