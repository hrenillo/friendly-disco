import React, { Component } from 'react'
import './header.css'

class Header extends Component {  
    
    constructor(props){
        super(props);
        this.state = {
            moduleName: this.props.module
        }
    }
    
    render() {
        const { moduleName, userMode } = this.state;
        const mountTime = new Date();
        return <div id='header'>
            <div>Header.js of module moduleName: {moduleName}</div>
                <div>
                    <span>Rendered at: </span>
                    <span>{mountTime.toTimeString()} </span>
                </div>
            </div>
       }
    }

Header.defaultProps = {
    module: 'Demo'
}

Header.propTypes = {
    module: React.PropTypes.string
};

export default Header