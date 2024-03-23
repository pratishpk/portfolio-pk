import React from 'react'
import './About.css'


const About = () => {
  return (


    <>
      <div>
        <div className='about-main'><p style={{ fontSize: "20px" }}>Main    /   About Me</p> <h4 style={{ fontSize: '28px' }}>About Me</h4></div>

        <div className="about">
          <div className="about-img">
            <img src="https://pratishpk.github.io/Pratish/pratish%20khandelwal.jpeg" alt="" />
          </div>

          {/* <h2 style={{color: 'rgb(170, 107, 228)'}}>About Me</h2> */}
          <div className='text' style={{paddingRight:'0'}}>
            <p >
              I am Pratish Khandelwal, a recent graduate holding a Bachelor of Technology degree in Electronics and
              Communication. Professionally, I have embarked on a multifaceted journey, seamlessly merging my technical
              acumen with creative prowess. My expertise encompasses web development and graphic design, where I craft
              visually captivating digital experiences. <br />

              In addition to my technical proficiencies, I have ventured into the dynamic realm of startup mentorship and
              business development. Drawing from my engineer's mindset, I actively foster innovation and entrepreneurial
              growth. This dual proficiency uniquely positions me to provide invaluable guidance to emerging businesses
              seeking to navigate the ever-evolving landscape of technology and entrepreneurship. <br />

              My commitment to lifelong learning and growth is unwavering. I am resolutely dedicated to broadening my
              horizons, perpetually seeking new opportunities to enhance my skill set and, most importantly, to make a
              profound and lasting impact on the world. <br />

              I eagerly anticipate the opportunity to harness my distinctive background and versatile skill set to
              innovate, develop groundbreaking solutions, and drive progress in the rapidly evolving spheres of technology
              and entrepreneurship. My passion for innovation and my unwavering dedication to self-improvement form the
              bedrock of my professional identity, and I eagerly look forward to contributing to the forward momentum of
              this exciting and transformative landscape. <br />
            </p>
          </div>
        </div>
        <div className="about-btn">
          <a href="https://drive.google.com/file/d/1Zu8eteXyI1Yw4hwRcikWxX940LBQ_G6P/view?usp=sharing" download="Pratish Kumar Khandelwal Resume"
            className="about-btn-box">
            Download Resume</a>
        </div>

      </div>

    </>
  )
}

export default About
