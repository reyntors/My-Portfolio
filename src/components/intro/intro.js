import React from 'react';
import './intro.css';
import bg from '../../assets/image.JPG'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <Fade bottom>
        <span className="hello">Hello,</span>
        </Fade>
        <Fade bottom>
        <span className="introText">I'm <span className="introName">Reynard Z. Torculas</span><br/>Web Developer</span>
        </Fade>
        <Fade bottom>
        <p className="introPara">I am passionate and skilled web developer with a flair for turning ideas into digital experiences. </p>
        <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire me</button></Link>
        </Fade>
       </div>
        
        <img src={bg} alt='' className='bg'/>
        
    </section>
  )
}

export default Intro;