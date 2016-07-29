import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/trollActions";

import TrollPoints from './trollPoints'
import './timer.css'

class Trollbox extends Component {
    constructor(){
        super();
/*        this.state = {
            trollPoints: []
        }*/
        //SwitchToOne
        //OneRemove
        this.handleOneAdd = this.handleOneAdd.bind(this);
        //SwitchToMany
        this.handleAllReset = this.handleAllReset.bind(this);
    }










    handleOneAdd(event) {
        const { trollPoints } = this.props.stateFromReducer;
        this.props.oneAdd([...trollPoints, "Default Trollbox User"])
/*        this.setState({
            trollPoints: [...trollPoints, "Default Trollbox User"]
        })*/
    }

    handleAllReset(event) {
        this.props.allReset({
            trollPoints: []
        })
/*        this.setState({
            trollPoints: []
        })*/
    }

    render() {
        console.log('rnd new', this.props.stateFromReducer);
        const { trollPoints } = this.props.stateFromReducer;
        return (
            <div className='trollbox timer'>
                <div className='button start' onClick={this.handleOneAdd}>Add User</div>
                <div className='button reset' onClick={this.handleAllReset}>Kill Users</div>
                <TrollPoints trollPoints={trollPoints} />
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const TrollboxConnected = connect(mapStateToProps, mapDispatchToProps)(Trollbox);
export default TrollboxConnected;
