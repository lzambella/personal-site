import React, { Component } from 'react';
/*
    This is used to show all the projects completed
    there should be a reusable component that contains each projects with all its information, and links to more detail if any.
    the projects should be neatly layed out in cards with an image of the project and a small description.
*/ 
function ProjectCard(project) {
    return (
        <div class="card" style={{width:'18rem'}}>
            <div class="card-title">{project.Title}</div>
            <div class="card-subtitle">{project.StartDate}</div>
            <div class="card-text">{project.ShortDesc}</div>
            {project.LongDesc.length > 0 ?
            <a href="#">More Info</a> : null}
            {project.GithubLink.length > 0 ?
              <a href={project.GithubLink}>GitHub Link</a> : null}
            
        </div>
    );
}

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
          projects : null
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
                <div class="card bg-dark text-center border-light" style={{width:'100%'}}>
                    {
                        proj.pictureLink == null ? null : 
                        <img class="card-img-top border-bottom" src="" alt="Loading image..."/>
                    }
                    <div class="card-title text-light">{proj.title}</div>
                    <div class="card-subtitle">{
                        // TODO: write a helper function to parse the full string as a date and format as needed
                        proj.startDate.substring(0,10)
                        }</div>
                    <div class="card-text">{proj.shortDesc}</div>
                    {proj.longDesc == null ?
                     null : 
                        <button type="button" class="btn btn-outline-dark text-light" data-toggle="modal" data-target="#exampleModal">
                            More Info
                        </button>}
                    {proj.githubLink == null ?
                     null : 
                     <a type="button" class="btn btn-ourline-dark" href={proj.githubLink}>Github Link</a>
                        }
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

            <div>
                <div class="text-center py-md-3 display-2 border-bottom">Projects</div>
                <div class="px-md-5 text-large">
                    <div>Check out some of the projects I completed or are currently working on! 
                        Click on more info to view more information on the technologies and methodologies used in each one.</div>
                    <p/>
                    { this.state.projects ? this.state.projects : 
                        <div>
                            Loading...
                        </div>
                    }
                </div>
           </div>
        )
    }
}