import React, { Component } from 'react';
/*
    This is used to show all the projects completed
    there should be a reusable component that contains each projects with all its information, and links to more detail if any.
    the projects should be neatly layed out in cards with an image of the project and a small description.
*/ 
function Project(props) {
    // Create the card for each project, the specific card should point to a database entry with more info on the project
    return (
        <div class="card" style={{width:'18rem'}}>
            <div class="card-title">{props.title}</div>
            <div class="card-subtitle">{props.proj_date}</div>
            <div class="card-text">{props.short_desc}</div>
            <a href="#">More Info</a>
            <a href="#">GitHub Link</a>
        </div>
    );
}
export class Projects extends Component {
    // Get each project from the database and compile into easy to view cards.
    render() {
        return (
            <div>
                <div class="display-2 border-bottom">Projects</div>
                <div>Check out some of the projects I completed or are currently working on!</div>
                <Project title="test" proj_date="test"/>
           </div>
        )
    }
}