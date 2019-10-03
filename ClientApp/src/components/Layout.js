import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {Footer} from './Footer';


export class Layout extends Component {
  static displayName = Layout.name;
  render () {
    return (
    <div id="background">
      <NavMenu />
      {
        // Define the 3 columns with the outer two being the backround layer
      }
      <div class="d-flex flex-column fix_footer">
       <div class="d-flex flex-row justify-content-center py-md-3">
            <div class="d-flex align-items-stretch"/>
            {
              //This is where the meat of the website is shown, all typefacing should be defined here
            }
            <div class="d-flex bg-dark text-light border px-md-5 text-large transparent fix_footer" id="text-body">
              <Container>
                  {this.props.children}
              </Container>
            </div>
            <div class="d-flex align-items-stretch"/>
          </div>
          <div class="flex-row align-items-stretch">
            <Footer/>
          </div>
      </div>
    </div>
    );
  }
}
