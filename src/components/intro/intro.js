import React from 'react';
import './intro.css';
import bg from '../../assets/image.JPG'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';



const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        
        <span className="hello">Hello,</span>
      
       
        <span className="introText">I'm <span className="introName">Reynard Z. Torculas</span><br/>Web Developer</span>
       
      
        <p className="introPara">I am passionate and skilled web developer with a flair for turning ideas into digital experiences. </p>
        <Link activeClass='active' to='contact' spy={true} offset={-50} duration={500} smooth={true} ><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire me</button></Link>
     
       </div>
        
        <img src={bg} alt='' className='bg'/>
        
    </section>
  )
}

export default Intro;