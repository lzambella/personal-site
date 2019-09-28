import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Skills } from '../Skills';
export class Home extends Component {
  static displayName = Home.name;

  
  render () {
    return (
      
      <div>
        <h1 class="text-center py-md-5 display-2 border-bottom">Welcome to my website!</h1>
      
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
            Otherwise, keep reading for a brief overview of my skills.
          </div>
        </div>
        <p class="px-md-5"/>
        {/**
         * Inject skills here
         */}
         <div class="py-md-3">
          <Skills/>
         </div>

         <p class="py-md-2"/>
         <div class="px-md-5 text-large py-md-2">
           For professional inquiries, I can readily be contacted through E-mail at <a href="mailto:lukezambella@gmail.com">Luke.Zambella@gmail.com</a> or a message can be sent through either GitHub or LinkedIn.
         </div>
      </div>
    );
  }
}
