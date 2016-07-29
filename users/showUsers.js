import React, { Component } from 'react';
import Header from '../common/header.js';
import UserContent from '../../containers/userContent/userContent';
import UserPoints from './userPoints';

class ShowUsers extends Component {  
    constructor(){
        super();
        this.state = {
            userPoints: [],
            inputValue: 'default user'
        }
        this.handleAddUser = this.handleAddUser.bind(this)
        this.handleGetUser = this.handleGetUser.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    handleAddUser(event) {
        console.log('add him to somewhere')
        const { userPoints, inputValue } = this.state;
        this.setState({
            userPoints: [...userPoints, inputValue]
        })
    }
    handleGetUser(event) {
        console.log('get him from somewhere')

    }
    handleInput(event) {
        this.setState({inputValue: event.target.value});
    }
    render() {
        console.log('rndring ShowUsers')
        const { userPoints } = this.state;
        return (
            <div className='show-users timer'>
                <input onChange={this.handleInput} />
                <button onClick={this.handleAddUser}>Add user</button>
                <button onClick={this.handleGetUser}>Get user</button>
                <UserContent>
                    <UserPoints />
                </UserContent>
            </div>
        )
    }
    /**/
}

export default ShowUsers