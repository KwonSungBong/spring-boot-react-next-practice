import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render () {
        return (
            <html>
            <Head>
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />
                <link
                    rel='stylesheet'
                    href='/_next/static/style.css'
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}
