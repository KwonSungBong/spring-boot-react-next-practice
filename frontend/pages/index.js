import React from 'react'
import { Link, Router } from '../routes'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { response: '' }
  }

  static async getInitialProps ({ pathname, query }) {
    return {
      pathname,
      query,
      queryString: Object.keys(query).join('')
    }
  }

  async componentDidMount () {
    const response = JSON.stringify(
      await window
        .fetch(`/api/test/testdto`)
        .then(response => response.json().then(data => data)),
      null,
      2
    )
    this.setState({ response })
  }

  render () {
    return (
      <content>
        <p>
          /api/{this.props.queryString} routed to https://swapi.co/api/{this.props.queryString}
        </p>
        <p>
          <a href='?people/2'>Try</a>
          &nbsp;
          <a href='/'>Reset</a>
        </p>
        <pre>
          {this.state.response ? this.state.response : 'Loading...'}
        </pre>
        <div>
          <ul>
              <li><Link route='hello'><a>hello</a></Link></li>
              <li><Link route='calendar'><a>calendar</a></Link></li>
              <li><Link route='blog' params={{ slug: 'hello-world' }}><a>Blog: Hello world</a></Link></li>
              <li><Link route='blog' params={{ slug: 'another-blog-post' }}><a>Blog: Another blog post</a></Link></li>
              <li><Link route='blog' params={{ slug: 'non-existant' }}><a>Blog: Not found</a></Link></li>
              <li><button onClick={() => Router.pushRoute('about', { foo: 'bar' })}>About foo bar</button></li>
              <li><button onClick={() => Router.pushRoute('about', { foo: 'baz' })}>About foo baz</button></li>
          </ul>
        </div>
      </content>
    )
  }
}
