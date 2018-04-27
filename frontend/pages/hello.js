import React from 'react'
import Head from 'next/head'
import { Button } from 'react-bootstrap';

export default class extends React.Component {
    render () {
        return <div>
            <Head>
                <title>hello</title>
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
                      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
                      integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>
            </Head>
            <div className='hello'>
                <p>Hello World</p>
                <Button>Default</Button>
            </div>
        </div>
    }
}
