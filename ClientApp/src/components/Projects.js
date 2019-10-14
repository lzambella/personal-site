/*
*   Represents the /project page of the app, each project gets shown here.
*/
import React, { Component } from 'react';
import {ProjectCard} from './ProjectCard'
import {Fade} from 'reactstrap';

function GetProject(project) {
    console.log("GetProject reached")
    return (
        <div>
            {console.log("Hello world")}
            <div class="text-large">{project}</div>
        </div>
    )
}

export default GetProject;

    // Create the card for each project, the specific card should point to a database entry with more info on the project
export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          projects : null,
          projectPopup : null
        };
      }
    
    // Fetch our API data
    componentDidMount() {
        fetch('/api/Project')
        .then(res => res.json())
        .then((data) => {
            // Non-elegant way of binding JSX to API call updates
            // Only way I could make this work
          let projects = data.map(proj => {
            return (
                <div class="py-2">
                    <ProjectCard proj={proj}/>
                </div>
                
                )
          });
        this.setState({projects: projects});
        })
        .catch(console.log)
      }

    // Get each project from the database and compile into easy to view cards.
    render() {
        return (
            <Fade>
                <div>
                    <h1 class="text-center py-md-3 border-bottom">Projects</h1>
                    <div class="px-md-5 text-large">
                        <div>These are some of the projects I've been working on! I have a wide variety of skills and each project showcases expertise in each one. Here, I give a quick rundown of what the project is about. 
                            To see even more information on how it works, check out the GitHub repository if avaliable.</div>
                        <p/>
                        { this.state.projects ? this.state.projects : 
                            <div class="text-center loader">
                                Loading...
                            </div>
                        }
                    </div>
            </div>
            </Fade>
        )
    }
}