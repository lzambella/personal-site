import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Skills } from '../Skills';
import pdf from '../dat/zambella_resume.pdf';
import {Fade} from 'reactstrap'
import {Updates} from './Updates'
export class Home extends Component {
  static displayName = Home.name;

  
  render () {
    return (
      <Fade>
        <div>
          <h1 class="text-center py-md-3 border-bottom">Welcome</h1>
          <h3 class="text-center py-md-3 text-large text-bold"><a href={pdf}>Click here</a> to see my most up to date resume.</h3>
          <div class="px-md-5 text-large">
            <div>
              Hi there! My name is Luke and I'm a technology afficinado from the Jersey Shore. Currently, I study at The College of New Jersey pursuing a Bachelor of Science in Computer Engineering with a focus on robotics. 
              Before that, I obtained my Associates degree in Mathematics at Ocean County College. 
            </div>
            <p/>
            <div>
                My career interests include robotics, software engineering, and embedded systems. These are reflected through my current projects under the projects page. 
                I have extensive experience in using the industry standard tools appropriate for each project which can be seen below. Other than that, my hobbies are music, photography, and art; the latter two I've done professionally.
                In my free time, I also tinker with electronics such as making new things, repairing broken devices, or tearing stuff down to see how they work and sometimes reverse engineer it. 
                I very much enjoy learning new skills if it allows me to more efficiently accomplish the task at hand.
            </div>
            <p/>
            <div>
              To view more information about my completed and in-progress projects, <Link to="/projects">click here</Link> or click on "projects" in the top menu. 
              More information about what this site runs on is located <Link to="/about">here</Link> or by clicking "About" in the top menu.
              Otherwise, below is a quick overview of my skills.
            </div>
            <p/>
            <div class="py-md-5">
            <Skills/>
          </div>
          <p/>
          <div>
            For professional inquiries, I can readily be contacted through E-mail at <a href="mailto:lukezambella@gmail.com">Lukezambella@gmail.com</a> or a message can be sent through either GitHub or LinkedIn.
          </div>
        </div>
        <div>
          <Updates/>
        </div>

        </div>
      </Fade>
    );
  }
}
/*

*/