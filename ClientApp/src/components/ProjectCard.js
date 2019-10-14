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
        return (
            <Fade>
                <div class="card bg-dark text-center border-light" style={{width:'100%'}}>
                {
                    this.props.proj.pictureLink == null ? null : 
                    <img class="card-img-top border-bottom" src={this.props.proj.pictureLink}/>
                }
                <h2 class="card-title text-light border-bottom">{this.props.proj.title}</h2>
                <div class="card-text">{
                    // TODO: write a helper function to parse the full string as a date and format as needed
                    "Start date: " + this.props.proj.startDate.substring(0,10)
                    }</div>
                <div class="card-text">Writen with: <i>{this.props.proj.technologies}</i></div>
                <div class="card-text">{this.props.proj.shortDesc}</div>
                <div>
                    
                </div>
                {this.props.proj.githubLink == null ?
                null : 
                <div class="py-2">
                    <a href={this.props.proj.githubLink}>
                        <button type="button" class="btn btn-outline-light text-light py-md-2" href={this.props.proj.githubLink}>Github Link</button>
                    </a>         
                </div>           
                    }
                {this.props.proj.longDesc == null ?
                    null : 
                    <div class="py-2">
                        <button type="button" class="btn btn-outline-light text-light py-md-2" onClick={this.toggleExtendedInfo} data-target={"#MoreInfo"+this.props.proj.id} aria-expanded="true" aria-controls={"MoreInfo"+this.props.proj.id}>
                            More Info
                        </button>
                        <Collapse isOpen={this.state.collapsed}>
                            <div class="card-body text-left">
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