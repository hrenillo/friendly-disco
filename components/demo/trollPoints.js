import React, { Component } from 'react';

class TrollPoints extends Component {
    constructor(props){
        super(props);
        this.state = {
            trollPoints: this.props.trollPoints
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
            trollPoints: nextProps.trollPoints
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        if (nextProps.trollPoints.length !== this.props.trollPoints.length) {
            console.log('should')
            return true;
        } else {
            console.log('should NOT')
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
        const { trollPoints } = this.state;
        console.log('rnd', trollPoints)
        return (
            (trollPoints.length > 0) ? <div>
                { trollPoints.map( (elem, index, array) => {
                    return <div key={index}>{'id: '+ index + ', user: ' + elem + ', ololo!'}</div>
                })}
            </div> : null
        )
    }
}

export default TrollPoints
