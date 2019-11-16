/*
* Gets all the site updates from the database's "updates" table and componentizes them into an easy to inject module
*/

import React, {Component} from 'react';
import {Fade} from 'reactstrap';

export class Updates extends Component {
    // Give the state the updates property
    constructor(props) {
        super(props);
        this.state = {
            updates: null
        };
    }
    // Fetch the API data
    componentDidMount() {
        fetch('/api/Update') // Fetch every element in the data
        .then(res => res.json()) // Then JSONize it
        .then((data) => { // Do something with that data
            // Iterate over the JSON data
            console.log(data.length)
            var updates = null
            if (data.length == 0) {
                updates =
                    <div class="text-center py-md-2">
                        No updates!
                    </div>                
            } else {
                updates = data.map(update => {
                    return (
                        <div class="text-center">
                            <div class="text-large"><b>{update.date.substring(0,10)}</b>: <i>{update.details}</i></div>
                        </div>
                    )
                });
            }
        this.setState({updates: updates}); // Update projects with the JSX data
        }).catch(console.log);
    }


    render() {
        return (
            <Fade>
                <h2 class="text-center py-md-3 border-bottom">Site Updates</h2>
                <div>
                    {
                        // Wait until all the updates are fetched until posting them
                        this.state.updates != null ? this.state.updates : 
                            <div class="center text-center loader">
                                
                            </div>
                        }
                </div>
            </Fade>
        )
    }
}