import React, { Component } from 'react'
import { connect } from 'react-redux'

import Main from '../../components/index'

class Index extends Component {
  render () {
    return <Main />
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(null, mapDispatchToProps)(Index)
