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
            <div class="border-bottom py-sm-3"><b>Software:</b> <i>Visual Studio, IntelliJ, Eclipse, Linux, Git, Vivado, Microsoft Office, Inventor, Eagle, SolidWorks, Docker, Azure, AWS, EC3, Google Cloud</i></div>
            <div class="border-bottom py-sm-3"><b>Programming Languages:</b> <i>C#/.NET Core, ASP.NET, Java, Python, Ruby, Rails, YAML, HAML, NumPy, SciPy, OpenCV, C/C++, Verilog, SQL, MATLAB, Simulink, ROS, MVC, Agile, React, Javascript, HTML, CSS, REST, CRUD, API, XML, JSON, Node.js</i></div>
            <div class="border-bottom py-sm-3"><b>Hardware:</b> <i>Oscilloscope, Soldering, Breadboard, Arduino, FPGA, Robotics, Multimeter, Amplifier design, Circuits</i></div>
        </div>
      );
  }

}