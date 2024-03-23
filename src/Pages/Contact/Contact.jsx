import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_20d920u', 'template_977isuf', form.current, {
        publicKey: 'VDQdESR4MzEYRXXHV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
   
         <div className='about-main'><p style={{ fontSize: "20px" }}>Main    /   Contact Me</p> <h4 style={{ fontSize: '28px' }}>Get in touch</h4></div>
   
    <div className="contact-form1">
        <form ref={form} onSubmit={sendEmail}>

            <input type="text" name='user_name' placeholder="Enter Your Name " required />
            <input type="email" name='user_email' placeholder="Enter Your email" required />
            <input type="text" name='user_subject' placeholder="Enter Your subject" required />
            <textarea name="text" name='message' id="" cols="40" rows="10" placeholder="Enter Your Message" required
                style={{height:'150px', width:'80%'}}></textarea><br />
            <input type="submit" value="Submit" className="send1" />
        </form>
    </div>
    </>
  )
}

export default Contact
