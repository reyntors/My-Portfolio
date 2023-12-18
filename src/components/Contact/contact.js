import React, {useRef} from 'react'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Youtube from '../../assets/youtube.png'
import Instagram from '../../assets/instagram.png'
import Client from '../../assets/clients.png'
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gcqz87p', 'template_i7cyqet', form.current, '0p_N2zH_Jazw3Mzec')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email has been sent!');
            
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id="contactPage">
        <Fade bottom>
        <div id="clients">
           <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima a corrupti deleniti pariatur dolores doloribus autem repellat enim id iste!</p>
        </div>
        <div className="clientImgs">

            <img src={Client} alt="" className="clientImg" />
    
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc"> Ready to start your next project? Feel free to reach out! Whether you have a specific project in mind or just want to say hello, I'm here to help. 
            <p>Let's collaborate and create something amazing together.</p>
            </span>
            
            <form  className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" name="your_name" className="name" placeholder='Your name' />
                <input type="email" name="your_email" className="email" placeholder='Your email' />
                <textarea className='msg' name="message"  rows="5" placeholder='Your message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={Facebook} alt="Facebook" className="link" />
                    <img src={Twitter} alt="Twitter" className="link" />
                    <img src={Youtube} alt="Youtube" className="link" />
                    <img src={Instagram} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
        </Fade>
    </section>
  )
}

export default Contact