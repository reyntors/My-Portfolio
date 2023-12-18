import React from 'react';
import './skills.css';
import Innovative from '../../assets/rocket.png'
import Technical from '../../assets/computer.png'
import Collab from '../../assets/collaboration.png'
import Adapt from '../../assets/adaptibility.png'
import uiDesign from '../../assets/ui.png'
import frontDev from '../../assets/frontend.png'
import backDev from '../../assets/backend.png'
import Fade from 'react-reveal/Fade';


const Skills = () => {
  return (
    <section id="skills">
        <Fade bottom>
         <span className="skillTitle">What I do</span>
         </Fade>
         <Fade bottom>
        <span className="skillDesc">I am thrive on transforming innovative concepts into reality, using my expertise in web technologies to create seamless and visually appealing solutions.</span>
         </Fade>
        <div className="skillBars">
            <Fade left>
            <div className="skillBar">
                <img src={uiDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p> Crafting seamless and visually appealing user interfaces is my forte. I specialize in turning ideas into interactive experiences that captivate users. Proficient in design tools such as Figma and Adobe Photoshop CS6, I bring concepts to life with a keen eye for aesthetics and usability.</p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="skillBar">
                <img src={frontDev} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Frontend Development</h2>
                    <p>  As a frontend developer, I specialize in building dynamic and responsive user interfaces. My proficiency includes leveraging cutting-edge technologies such as React.js  to create seamless and interactive web applications. I am committed to writing clean, maintainable code that ensures optimal user experiences across various devices and browsers.</p>
                </div>
            </div>
            </Fade>
            <Fade left>
            <div className="skillBar">
                <img src={backDev} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Backend Development</h2>
                    <p>   In the realm of backend development, I thrive on architecting robust server-side solutions. Proficient in languages such as Node.js and Python, I design and implement scalable APIs, including RESTful API architecture, that power the core functionality of web applications. From database management to server optimization, I ensure the seamless operation of the digital backbone, contributing to the overall performance and reliability of the applications I build.</p>
                </div>
            </div>
            </Fade>
        </div>
        <Fade top>
        <span className="skillTitle">Why choose me?</span>
        </Fade>
        <div className="skillBars">
            <Fade left>
            <div className="skillBar">
                <img src={Innovative} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Innovative Solutions</h2>
                    <p>I don't just build websites; I craft digital experiences. My approach is rooted in creativity, ensuring your project stands out in the ever-evolving online landscape.</p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="skillBar">
                <img src={Technical} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Technical Excellence</h2>
                    <p>With a solid foundation in web development, I am proficient in cutting-edge technologies. From frontend design to backend functionality, I ensure your website is as robust as it is beautiful.</p>
                </div>
            </div>
            </Fade>
            <Fade left>
            <div className="skillBar">
                <img src={Collab} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Collaborative Mindset</h2>
                    <p>I believe in the power of collaboration. By working closely with clients, I turn visions into reality, creating websites that not only meet but exceed expectations.</p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="skillBar">
                <img src={Adapt} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Adaptability</h2>
                    <p>In the fast-paced world of technology, adaptability is key. I stay ahead of the curve, integrating the latest trends and best practices to future-proof your digital presence.</p>
                </div>
            </div>
            </Fade>
        </div>
       
    </section>
  )
}

export default Skills