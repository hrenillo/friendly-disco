import React, { Component } from 'react';
import Header from '../common/header.js';
import UserContent from '../../containers/userContent/userContent';
import UserPoints from './userPoints';

class ShowUser extends Component {  
    render() {
        console.log('rndring single user')
        const { userPoints } = this.state;
        return (
            <div classname='show-user'>
                <userPoints />
            </div>
        )
    }
}

export default ShowUser