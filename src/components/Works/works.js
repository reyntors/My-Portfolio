import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/MiyagsWebsite.jpg'
import Portfolio2 from '../../assets/RandJWebsite.jpg'
import Fade from 'react-reveal/Fade';
const Works = () => {
  return (
    <section id="works">
      <Fade bottom>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">Welcome to my portfolio! Here, you'll find a showcase of my work, highlighting my skills, creativity, and experience. From innovative projects to carefully crafted designs, this collection represents my passion and dedication. Take a look around and feel free to reach out if you'd like to collaborate!</span>
        <div className="worksImgs">

        <a href="https://miyagssigntechservices.net" target="_blank" rel="noopener noreferrer">
            <img src={Portfolio1} alt="" className="worksImg" />
        </a>
       
        <a href=" https://r-j-land-developement-corp.web.app/home" target="_blank" rel="noopener noreferrer">
            <img src={Portfolio2} alt="" className="worksImg" />
        </a>
            
        </div>
        <button className="workBtn">See More...</button>
        </Fade>
    </section>
  )
}

export default Works;