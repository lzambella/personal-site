import React, { Component } from 'react';
/*
    This page informs the user how this website works
*/
export class About extends Component {
    static displayName = About.name

    render() {
        return (
            <div>
                <h1 class="text-center py-md-3 display-2 border-bottom">About this website</h1>
                <div class="px-md-5 text-large">
                    <div>
                        This website was made to refamiliarize and reinforce web development concepts including API programming. 
                        The front-end uses the React framework with Bootstrap for layout. 
                        It was chosen for it's ease of use and that many other websites are built using this framework, allowing for familiarity should I ever work on similiar projects.
                        React uses Javascript and AJAX giving it a responsive look and feel for the modern web.
                    </div>
                    <p/>
                    <div>
                        The back-end is written in C# with ASP.NET Core and uses a database to store project and experience information. I chose C# since I was already familiar with the language having already made a few applications with it. 
                        ASP.NET core is a cross-platform and open-source web framework for C# and it allows me to develop the app on Windows but easily deploy it to a cloud service.
                        The entire code for the website is hosted on my GitHub page, where the hosting service automatically pulls any new commits and re-deploys the updated code. This makes app updates completely seamless and quick. The website is database-driven for the projects page so I can easily add new projects as i continue to create. 
                        I use a custom desktop client software to manage the projects.
                    </div>
                    <p/>
                    <div>
                        To view the code in its entirety, click the link <a href="https://github.com/lzambella/personal-site">here</a>.
                    </div>
                </div>

                
            </div>
        )
    }
}