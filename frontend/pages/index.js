import React from 'react'
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Index extends React.Component {
    static getInitialProps ({ store, isServer }) {
    }

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <div>
                <div>
                    <Link href='/form' as='/form'><a>form</a></Link>
                </div>
                <div>
                    <Link href='/async/async' as='/async/async'><a>asyncasync</a></Link>
                </div>
                <div>
                    <Link href='/async' as='/async'><a>asynctest</a></Link>
                </div>
                <div>
                    <Link href='/product' as='/product'><a>product</a></Link>
                </div>
                <div>
                    <Link href='/post' as='/post'><a>post</a></Link>
                </div>
                <div>
                    <Link href='/image' as='/image'><a>image</a></Link>
                </div>
                <div>
                    <Link href='/editor' as='/editor'><a>editor</a></Link>
                </div>
                <div>
                    <Link href='/editor/image' as='/editor/image'><a>editor/image</a></Link>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(null, mapDispatchToProps)(Index)
