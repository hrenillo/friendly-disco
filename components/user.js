import React, { Component } from 'react'
import Header from './common/header'
import PageContent from '../containers/pageContent/pageContent'

class Demo extends Component {
    render() {
        return (
            <div>
                <Header module={'Nouser'}/>
                <PageContent>
                    <span>No user found, try again</span>
                </PageContent>
            </div>
        )
    }
}

export default Demo