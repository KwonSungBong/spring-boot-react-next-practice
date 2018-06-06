import React, { Component, Fragment } from 'react'
import AsyncData from '../../components/async/async-data'

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: props.posts || null,
            error: props.error || null
        }
    }

    async componentDidMount() {
        if (this.state.posts === null) {
            try {
                this.setState({
                    posts: await AsyncData.getData(),
                    error: null
                })
            } catch (e) {
                this.setState({
                    error: "Unable to fetch AsyncData on client"
                })
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Async Data</h1>
                <p>
                    testtesttesttesttesttesttest
                </p>
                <RenderPosts posts={this.state.posts} error={this.state.error}/>
            </div>
        )
    }
}

export class RenderPosts extends Component {
    render() {
        if (this.props.error) {
            // Display error if posts have fialed to load
            return <p><span className="font-weight-bold">Error loading posts:</span> {this.props.error}</p>
        } else if (!this.props.posts) {
            // Display place holder if posts are still loading (and no error)
            return <p><i>Loading content…</i></p>
        } else {
            // Display posts
            return <Fragment>
                {
                    this.props.posts.map((post, i) => (
                        <div key={i}>
                            <span className="font-weight-bold">{post.title}</span>
                            <p><i>{post.body}</i></p>
                        </div>
                    ))
                }
            </Fragment>
        }
    }
}
