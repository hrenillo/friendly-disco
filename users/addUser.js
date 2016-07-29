import React, { Component } from 'react';
import Header from '../common/header.js';
import UserContent from '../../containers/userContent/userContent';
import UserPoints from './userPoints';

class AddUser extends Component {  
    constructor(){
        super();
        this.state = {
            userPoints: []
        }
        this.handleAddUser = this.handleAddUser.bind(this)
        this.handleGetUser = this.handleGetUser.bind(this)
    }
    handleAddUser(event) {
        console.log('add him somewhere')

    }
    handleGetUser(event) {
        console.log('get him from somewhere')

    }
    render() {
        console.log('rndring adduser')
        const { userPoints } = this.state;
        return (
            <div classname='show-users timer'>
                <input />
                <button onclick={this.handleAddUser}>Add user</button>
            </div>
        )
    }
    /**/
}

export default AddUser