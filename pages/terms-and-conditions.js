import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import React from 'react'

function Terms_conditions() {
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://codewarranty.com/terms-and-conditions" />
                <title>Best Warranty Management Software | Streamline Claims and Warranty Operations</title>
                <meta
                    name="description"
                    content="Best Warranty Management Software | Streamline Claims and Warranty Operations"
                />
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

            <div className='bg-[#002025] '>
                <div className='bg-headerBackground1 bg-cover bg-no-repeat'>
                    <div className='w-large mx-auto'>

                        <Header />
                    </div>

                    <h1 className='2xl:w-2/3 xl:w-full xl:mx-auto text-center text-white lg:text-[55px] md:text-[40px] sm:text-[34px] s:text-[34px] leading-none py-8	Brockmann'><span className='text-[#00FFFC]'>Terms  </span> & Conditions </h1>
                </div>

                <div className='md:w-[80%] w-large mx-auto 2xl:py-12 xl:py-12 lg:py-12 md:py-12 sm:py-8 s:py-8'>
                    <p className='text-white Gilroy text-base'>These Terms and Conditions constitute a legally binding agreement between you, whether personally or on behalf of an entity (“you”) and CodeWarranty (“we,” “us,” or “our”), governing your access to and use of the CodeWarranty.com website, platform, and any related services (collectively, the “Service”). <br /> <br />
                        By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with these Terms, you must discontinue use immediately.<br /><br />
                        We reserve the right to modify these Terms at any time. Changes will be effective upon posting, and your continued use of the Service constitutes acceptance of any revised Terms. It is your responsibility to periodically review these Terms to stay informed of any updates.
                    </p>

                    <h3 className='mt-4 mb-2 text-lg text-[#00FFFC]'>1) Use of the Service</h3>
                    <p className='text-white Gilroy text-base'>
                        CodeWarranty provides a SaaS-based warranty management solution designed to simplify and automate warranty-related processes. You agree to use the Service only for lawful purposes and in compliance with all applicable laws and regulations. Unauthorized access, misuse, or disruption of the Service is strictly prohibited.
                    </p>
                    <h3 className='mt-4 mb-2 text-lg text-[#00FFFC]'>2) Limited Liability</h3>
                    <p className='text-white Gilroy text-base'>
                        To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, consequential, or special damages, including but not limited to lost profits, data loss, or business interruption arising from the use of or inability to use the Service, even if advised of the possibility of such damages.
                    </p>
                    <h3 className='mt-4 mb-2 text-lg text-[#00FFFC]'>3) Intellectual Property</h3>
                    <p className='text-white Gilroy text-base'>
                        Unless otherwise stated, all content on the Service, including software, databases, website design, text, images, trademarks, and logos, is owned or licensed by us and is protected by intellectual property laws. You may not copy, modify, distribute, or exploit any content from our Service without our explicit written permission.
                    </p>
                    <h3 className='mt-4 mb-2 text-lg text-[#00FFFC]'>4) Subscription and Payment</h3>
                    <p className='text-white Gilroy text-base'>
                        Access to certain features of our Service may require a subscription. You agree to provide accurate billing information and authorize us to charge applicable fees. Failure to process payments may result in suspension or termination of your access to the Service.
                    </p>
                    <h3 className='mt-4 mb-2 text-lg text-[#00FFFC]'>5) Data Privacy and Security </h3>
                    <p className='text-white Gilroy text-base'>
                        We prioritize the security and confidentiality of your data. Our use of personal and business data is governed by our Privacy Policy. While we implement industry-standard security measures, we do not guarantee that our Service is immune from cyber threats or unauthorized access.
                    </p>
                    <h3 className='mt-4 mb-2 text-lg text-[#00FFFC]'>6) Account Termination and Suspension</h3>
                    <p className='text-white Gilroy text-base'>
                        We reserve the right to suspend or terminate your access to the Service at our sole discretion, without notice, if you violate these Terms, engage in fraudulent activities, or misuse the platform in any way. Upon termination, your right to use the Service ceases immediately, and we may delete your data in accordance with our data retention policies.
                    </p>
                    <h3 className='mt-4 mb-2 text-lg text-[#00FFFC]'>7) Governing Law</h3>
                    <p className='text-white Gilroy text-base'>
                        These Terms shall be governed by and construed in accordance with the laws of Mohali, Punjab, India, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved in the appropriate courts of Mohali, Punjab, India.
                    </p>
                    <h3 className='mt-4 mb-2 text-lg text-[#00FFFC]'>8) Contact Information</h3>
                    <p className='text-white Gilroy text-base'>
                        For any questions regarding these Terms and Conditions, please contact us at <a href='mailto:care@codewarranty.com' className='text-[#00FFFC] underline' >Click Here</a>
                    </p>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Terms_conditions
