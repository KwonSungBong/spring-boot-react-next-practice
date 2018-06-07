import React from 'react'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import {initStore} from '../store'
import Link from 'next/link'
import '../styles/style.scss'

export default withRedux(initStore)(class MyApp extends App {
    static async getInitialProps ({Component, ctx}) {
        return {
            pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
        }
    }

    render () {
        const {Component, pageProps, store} = this.props
        return <Container>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </Container>
    }
})

class Layout extends React.Component {
    render() {
        const {children} = this.props
        return <div className='layout'>
            <Link href='/' as='/'><a>home</a></Link>
            <div>
                {children}
            </div>
        </div>
    }
}
