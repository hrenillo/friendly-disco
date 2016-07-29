import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './common/header'
import PageContent from '../containers/pageContent/pageContent'

class Demo extends Component {
    render() {
        return (
            <div>
                <Header module={'About'} />
                <PageContent>
                    <div>
                        <span>This is about.js file. Navigate to </span>
                        <Link to={`/demo`}>/demo</Link>
                        <span>,</span>
                        <Link to={`/users`}>/users</Link>
                        <span>.</span>
                    </div>
                    <div>
                        <span>Try default props: </span>
                        <Link to={`/noname`}>/noname</Link>
                        <span>,</span>
                        <Link to={`/user`}>/currentUser</Link>
                        <span>.</span>
                    </div>
                </PageContent>
            </div>
        )
    }
}

export default Demo