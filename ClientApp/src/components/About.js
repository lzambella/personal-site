import React, { Component } from 'react';
/*
    This page informs the user how this website works
*/
export class About extends Component {
    static displayName = About.name

    render() {
        return (
            <div>
                <h1 class="text-center display-3 py-md-3">About this website</h1>

                <p>This website was made to refamiliarize and reinforce web development concepts. 
                    The front-end uses the React framework with Bootstrap for layout. It was chosen for it's ease of use and that many other websites are built using this framework, allowing for familiarity should I ever work on similiar projects.
                    I had to learn Javascript, React, and Bootstrap as they all were new territory for me. 
                </p>

                <p>The back-end is written in C# with ASP.NET Core and uses a database to store project and experience information. I chose C# since I was already familiar with the language having already made a few applications with it. 
                    ASP.NET core is a cross-platform and open-source web framework for C# and it allows me to develop the app on Windows but easily deploy it to a cloud service using a Docker container running Linux.
                    The entire code for the website is hosted on my GitHub page. The website is database-driven for the projects page so I can easily add new projects should the time come. 
                    There is an admin panel that uses authentication and it gives me the front-end tools to manage the database and its contents. With this, I have to consider all the security risks, such as input sanitization and XSS attacks. 
                    Fortunately, the frameworks all have built in tools for this.
                </p>
                <p>
                    To view the code in its entirety, click the link [here].
                </p>
                
            </div>
        )
    }
}