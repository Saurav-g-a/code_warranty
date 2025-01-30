import Image from 'next/image'
import React from 'react'
import Image1 from '@/public/assets/images/404-error-page-templates.jpg'
import Head from 'next/head'
export default function NotFound() {
    return (
        <>

            <Head>
                <link rel="canonical" href="https://codewarranty.com/" />

                <link
                    href="https://fonts.cdnfonts.com/css/brockmann"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.cdnfonts.com/css/gilroy-bold"
                    rel="stylesheet"
                />
                <meta name="theme-color" content="#002025" />
                <link rel="icon" type="image/x-icon" href="./assets/images/fabIcon.png" />
                <link rel="apple-touch-icon" sizes="57x57" href="./assets/images/fabIcon.png" />
            </Head>
            <div>
                <a href='/'>
                    <Image title="Hero image description" src={Image1} className='h-screen mx-auto' alt="mask" />
                </a>
            </div>
        </>
    )
}
