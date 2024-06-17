import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { BiLogoTailwindCss , BiLogoMongodb } from "react-icons/bi";
import { FaHtml5, FaCss3Alt ,FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
         
          <div className="experience__content">
          <article className="experience__details">
              <FaHtml5  className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <TbBrandJavascript  className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React JS</h4>
            </article>
            <article className="experience__details">
              <DiNodejs className="experience__details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience__details">
              <BiLogoTailwindCss className="experience__details-icon" />
              <h4>Tailwind</h4>
            </article>
            <article className="experience__details">
              <SiNextdotjs className="experience__details-icon" />
              <h4> Next Js</h4>
            </article>
            <article className="experience__details">
              <BiLogoMongodb  className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience