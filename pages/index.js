import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <>

            <Head>
                <title>HALOL TURIZM</title>
                <meta name="description" content="HALOL TURIZM" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}

            <Navbar />

        </>
    )
}
