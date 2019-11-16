/** 
 * This class is a component class for the home page that easily lists all the skills i have separated into 3 columns
 * 
*/
import React, { Component } from 'react';
import {Link} from "react-router-dom"


export class Skills extends Component {
  static displayName = Skills.name;

  render () {
      return (
        <div class="">
            <h3 class="text-center border-bottom text-bold">Technical Skills</h3>
            <div class="border-bottom py-sm-3"><b>Software:</b> <i>Visual Studio, IntelliJ, Linux, Git, Vivado, Microsoft Office, Inventor, SolidWorks, Docker</i></div>
            <div class="border-bottom py-sm-3"><b>Programming Languages:</b> <i>C#, Java, Python, Ruby, C/C++, Verilog, MATLAB, Javascript</i></div>
            <div class="border-bottom py-sm-3"><b>Frameworks and Technologies:</b> <i>NumPy, SciPy, OpenCV, ASP.NET, Node.js, React, Rails, Robot Operating System</i></div>           
            <div class="border-bottom py-sm-3"><b>Hardware:</b> <i>Oscilloscope, Soldering, Breadboard, Arduino, FPGA, Robotics Firmware, Circuit Design</i></div>
        </div>
      );
  }

}