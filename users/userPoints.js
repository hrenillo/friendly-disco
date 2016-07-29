import React, { Component } from 'react';

class UserPoints extends Component {  
    constructor(props){
        super(props);
        this.state = {
            userPoints: this.props.userPoints,
            userMode: this.props.userMode
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        this.setState({
            userPoints: nextProps.userPoints,
            userMode: nextProps.userMode
        });
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        if (nextProps.userPoints.length !== this.props.userPoints.length) {
            return true;
        } else {
            return false;
        }
        if (nextProps.userMode !== this.props.userMode) {
            return true;
        } else {
            return false;
        }
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextProps, nextState);
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    render() {
        const { userPoints, userMode } = this.state;
        return (
            (userPoints.length > 0 && !userMode) ? <div>
                { userPoints.map( (elem, index, array) => {
                    return <div key={index}>{'user id: '+ index + ', user: ' + elem + ', ololo!'}</div>
                })}
            </div> : null
        )
    }
}

export default UserPoints