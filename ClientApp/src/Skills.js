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
            <h2 class="text-center border-bottom">Technical Skills</h2>
            <div class="border-bottom"><b>Software:</b> Visual Studio, IntelliJ, Eclipse, Linux, Git, Vivado, Microsoft Office, Inventor, Eagle, SolidWorks, Docker, Azure, AWS, EC3, Google Cloud</div>
            <div class="border-bottom"><b>Programming Languages:</b> C#/.NET Core, ASP.NET, Java, Python, Ruby, Rails, YAML, HAML, NumPy, SciPy, OpenCV, C/C++, Verilog, SQL, MATLAB, Simulink, ROS, MVC, Agile, React, Javascript, HTML, CSS, REST, CRUD, API, XML, JSON, Node.js</div>
            <div class="border-bottom"><b>Hardware:</b> Oscilloscope, Soldering, Breadboard, Arduino, FPGA, Robotics, Multimeter, Amplifier design, Circuits</div>
        </div>
      );
  }

}