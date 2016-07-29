import React, { Component } from 'react'
import Header from './common/header'
import PageContent from '../containers/pageContent/pageContent'

class Demo extends Component {
    render() {
        return (
            <div>
                <Header module={'Noname'}/>
                <PageContent>
                    <span>This is a noname.js Header of default props and prop types. Header should contain default property</span>
                </PageContent>
            </div>
        )
    }
}

export default Demo