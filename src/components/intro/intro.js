import React from 'react';
import './intro.css';
import bg from '../../assets/image.JPG'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';
import {motion } from 'framer-motion'



const Intro = () => {
  return (   <motion.h1 
              initial={{ opacity: 0, y: 100 }}  
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 1 }}
              
              >
    <section id='intro'>
      
        <div className='introContent'>
      
        <span className="hello">Hello,</span>
   
       
        <span className="introText">I'm <span className="introName">Reynard Z. Torculas</span><br/>Web Developer</span>
       
      
        <p className="introPara">I am passionate and skilled web developer with a flair for turning ideas into digital experiences. </p>
        <Link activeClass='active' to='contact' spy={true} offset={-50} duration={500} smooth={true} ><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire me</button></Link>
     
       </div>
        
        <img src={bg} alt='' className='bg'/>
     
    </section>
       </motion.h1>
  )
}

export default Intro;