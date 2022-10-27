import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Junior Army</title>
                    <link rel='icon' href='logo.png'/>
                </Head>
                <body className='text-white bg-black transition-all'>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument