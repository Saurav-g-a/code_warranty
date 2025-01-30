import Image from 'next/image'
import React from 'react'
import Image1 from '@/public/assets/images/404-error-page-templates.png'
import Head from 'next/head'
import Header from '@/components/header'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
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
            <div className='bg-[#002025]'>
                <div className='w-large mx-auto'>
                    <Header />

                    <Image title="Hero image description" src={Image1} className=' mx-auto' alt="mask" />

                    <p className='2xl:w-2/3 xl:w-2/3 xl:mx-auto text-center text-white lg:text-[45px] md:text-[30px] sm:text-[24px] s:text-[24px] leading-none	Brockmann'><span className='text-[#00FFFC]'>Oops!</span>  Page you were looking for was not found</p>
                    <div className='text-center my-5'>

                        <a href='/'>
                            <button className="bg-[#8BC542] Gilroy uppercase py-4 px-6 rounded-md text-white font-medium">Back To Home</button>
                        </a>
                    </div>
                </div>
                <div className='py-8 w-large mx-auto'>
                    <Footer />
                </div>
            </div>
        </>
    )
}
