import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Partners from '../components/Partners'
import Recomend from '../components/Recomend'
import Offers from '../components/Offers'
import Adv from '../components/Adv'
import News from '../components/News'
import Maps from '../components/Maps'
import Feedback from '../components/Feedback'
import Tree from '../components/Tree'
import Footer from '../components/Footer'

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
            <div className="top"></div>
            <Header />
            <Partners />
            <Recomend />
            <Offers />
            <Adv />
            <News />
            <Maps />
            <Feedback />
            <Tree />

            <Footer />

        </>
    )
}
