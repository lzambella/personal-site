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
                        <div>Check out some of the projects I completed or are currently working on! 
                            Click on more info to view more information on each project.</div>
                        <p/>
                        { this.state.projects ? this.state.projects : 
                            <div class="text-center">
                                Loading...
                            </div>
                        }
                    </div>
            </div>
            </Fade>
        )
    }
}