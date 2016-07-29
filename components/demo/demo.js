import React, { Component } from 'react';
import Header from '../common/header.js';
import Trollbox from './trollbox.js';
import PageContent from '../../containers/pageContent/pageContent'

class Demo extends Component {
    render() {
        return (
            <div>
                <Header module={'Demo'}/>
                <PageContent>
                    <Trollbox />
                </PageContent>
            </div>
        )
    }
}

export default Demo
