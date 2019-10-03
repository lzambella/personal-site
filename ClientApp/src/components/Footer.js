import React, { Component } from 'react';
import "./NavMenu.css"
export class Footer extends Component {
    render () {
        return (
            <div class="background_a text-light d-flex flex-fill justify-content-around text-large">
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column">
                        <h5 class="text-bold text-center border-bottom">Links</h5>
                        <div><a href="https://www.github.com/lzambella">GitHub</a></div>
                        <div><a href="https://linkedin.com">LinkedIn</a></div>
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column">
                            <h5 class="text-bold text-center border-bottom">Contact Information</h5>
                            <div><a href="mailto:lukezambella@gmail.com">Luke.Zambella@gmail.com</a></div>
                    </div>
                </div>
            </div>
        );
    }
}