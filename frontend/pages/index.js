import React, { Component } from 'react'
import Link from 'next/link'
import withRedux from 'next-redux-wrapper'

import Main from '../components'

import { initStore } from '../store'

class Index extends Component {
  render () {
    return <div>
        <div>
            <Link href='/async/async' as='/async/async'><a>asyncasync</a></Link>
        </div>
        <div>
            <Link href='/async' as='/async'><a>post</a></Link>
        </div>
      <Main />
    </div>
  }
}

export default withRedux(initStore, null)(Index)
