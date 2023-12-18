import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/furina.png'
import Fade from 'react-reveal/Fade';
const Works = () => {
  return (
    <section id="works">
      <Fade bottom>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore esse laboriosam expedita ratione cupiditate adipisci illum aliquam animi repudiandae cumque.</span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio1} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More...</button>
        </Fade>
    </section>
  )
}

export default Works;