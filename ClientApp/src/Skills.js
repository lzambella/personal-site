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
        <div class="d-flex justify-content-around">
            <div class="flex-row">
            <h3 class="text-center border-bottom">Software</h3>
                <div class="flex-row">
                <div>Visual Studio</div>
                <div>Autodesk Inventor</div>
                <div>Vivado</div>
                <div>Git</div>
                <div>GNU/Linux</div>
                <div>Microsoft Office (Excel, Word)</div>
                <div>Docker</div>
                <div>ROS</div>
                </div>
            </div>
            <div class="flex-row">
            <h3 class="text-center border-bottom">Programming</h3>
                <div class="flex-row">
                <div>C#/.NET Core</div>
                <div>Java</div>
                <div>Javascript</div>
                <div>C/C++</div>
                <div>Verilog</div>
                <div>Python</div>
                <div>MATLAB, Simulink</div>
                <div>OpenCV</div>
                <div>Ruby, Rails</div>
                <div>SQL</div>
                </div>
            </div>
            <div class="flex-row">
                <h3 class="text-center border-bottom">Hardware</h3>
                <div class="flex-row">
                <div>Oscilloscope</div>
                <div>Breadboard Prototyping</div>
                <div>Multimeter</div>
                <div>FPGAs</div>
                <div>Arduino, Teensy</div>
                <div>Robotics</div>
                </div>
            </div>
        </div>
      );
  }

}