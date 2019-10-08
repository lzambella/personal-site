import React, {Component} from 'react';
import {Card, Collapse, Fade} from 'reactstrap';

export class ProjectCard extends Component {
    constructor (props) {
        super(props);
        this.toggleExtendedInfo = this.toggleExtendedInfo.bind(this);
        this.state = {
            collapsed: false
        };

    }

    toggleExtendedInfo () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    // Props is defined by the Project database schema
    render() {
        console.log(this.props)
        return (
            <Fade>
                <div class="card bg-dark text-center border-light py-2" style={{width:'100%'}}>
                {
                    this.props.proj.pictureLink == null ? null : 
                    <img class="card-img-top border-bottom" src="" alt="Loading image..."/>
                }
                <h3 class="card-title text-light border-bottom">{this.props.proj.title}</h3>
                <div class="card-text">{
                    // TODO: write a helper function to parse the full string as a date and format as needed
                    "Start date: " + this.props.proj.startDate.substring(0,10)
                    }</div>
                <div class="card-text">Writen with: {this.props.proj.technologies}</div>
                <div class="card-text">{this.props.proj.shortDesc}</div>
                {this.props.proj.githubLink == null ?
                null : 
                <a type="button" class="btn btn-ourline-dark" href={this.props.proj.githubLink}>Github Link</a>
                    }
                {this.props.proj.longDesc == null ?
                    null : 
                    <div>
                        <button type="button" class="btn btn-outline-light text-light py-md-2" onClick={this.toggleExtendedInfo} data-target={"#MoreInfo"+this.props.proj.id} aria-expanded="true" aria-controls={"MoreInfo"+this.props.proj.id}>
                            More Info
                        </button>
                        <Collapse isOpen={this.state.collapsed}>
                            <div class="card-body">
                                {this.props.proj.longDesc}
                            </div>                                
                        </Collapse>
                    </div>
                }
                </div>  
            </Fade>
        );
    }
}