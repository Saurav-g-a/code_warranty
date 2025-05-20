import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/header'
import Banner1 from '@/public/assets/images/video.png'
import aboutImage from '@/public/assets/images/aboutImage.png'
import aboutImage1 from '@/public/assets/images/aboutImage1.png'
import Mask from '@/public/assets/images/value.png'
import Mask1 from '@/public/assets/images/Vector.png'
import How from '@/public/assets/images/CodeWarranty.png'
import team from '@/public/assets/images/nikImge.png'
import Team1 from '@/public/assets/images/Team1.png'
import Team2 from '@/public/assets/images/Team2.png'
import Team3 from '@/public/assets/images/Team3.png'
import Team4 from '@/public/assets/images/Team4.png'
import Team5 from '@/public/assets/images/Team5.png'
import arrow from '@/public/assets/images/teamarrow.png'
import close from '@/public/assets/images/active.svg';
import Footer from '@/components/footer'
import CustomAccordion from '@/components/accordion'
import Contact from '@/components/contact'
import Script from 'next/script';


function AboutUs() {
    const [showButton, setShowButton] = useState(false);

    // Show the button when the user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling
        });
    };

    return (
        <>
            <Script
                id="tawk-to"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/682c3663dc468a1911cee7f1/1irmb8tva';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `
                }}
            />
            <Head>
                <link rel="canonical" href="https://codewarranty.com/about-us" />
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

            <div className='bg-[#002025] bg-headerBackground1 bg-contain bg-no-repeat'>
                <div className='w-large mx-auto'>
                    <Header />
                    <div className='grid grid-cols-12 gap-0 pb-8 pt-16'>
                        <div className='col-span-1'></div>
                        <div className='lg:col-span-10 md:col-span-12 s:col-span-12 pt-5 px-6'>
                            <div className='grid grid-cols-12 gap-2'>
                                <div className='lg:col-span-9 md:col-span-12 s:col-span-12'>
                                    <p className='text-[#00FFFC] Gilroy uppercase mb-3'>We are CodeWarranty</p>
                                    <h1 className=' w-full mx-auto text-left text-white lg:text-[55px] md:text-[40px] sm:text-[34px] s:text-[34px] leading-none	Brockmann'>We set out to build <br /> <span className='opacity-50'>a better way to protect</span></h1>

                                </div>
                                <div className='lg:col-span-3 md:col-span-12 s:col-span-12'>
                                    <h2 className='text-white text-base text-left py-5 Gilroy'>Now experience the future of warranty management—automated, efficient, and built for  complete customer satisfaction.</h2>
                                </div>
                                {/* <div className='lg:col-span-8 md:col-span-12 s:col-span-12'>
                                    <Image src={aboutImage1} title="Hero image description" className='w-full' alt='about Us' />
                                </div>
                                <div className='lg:col-span-4 md:col-span-12 s:col-span-12'>
                                    <Image src={aboutImage} title="Hero image description" className='w-full h-full' alt='about Us' />
                                </div> */}
                            </div>

                            {/* <Image title="Hero image description" src={Banner} alt="banner" className='mx-auto' /> */}
                        </div>
                        <div className='col-span-1'></div>
                    </div>
                </div>

                <div className='py-12 w-large mx-auto'>
                    <div className='grid grid-cols-12 gap-2 Gilroy'>
                        <div className='lg:col-span-5 md:col-span-12 s:col-span-12 flex'>
                            <p className='text-3xl text-white'>How We Started <br /> CodeWarranty</p>
                            <Image src={How} title="Hero image description" className='h-[60px] w-[60px] ml-5' alt='How We Started CodeWarranty' />
                        </div>
                        <div className='lg:col-span-7 md:col-span-12 s:col-span-12'>
                            <p className='text-[#889997] mb-3'>The idea for <span className='text-white font-semibold'> CodeWarranty </span> was born from firsthand experience with the challenges of warranty management. One day, during a conversation with a friend in the industry, we discussed how <span className='text-white font-semibold'> complicated and time-consuming </span>
                                warranty processes could be. From <span className='text-white font-semibold'> manual paperwork and delayed claim resolutions to high operational costs, </span> his business was struggling to manage warranties efficiently.</p>
                            <div className='p-3 border-l-2 border-[#00FFFC] text-[#889997]'>
                                <p>Curious to understand the problem better, we started researching. We spoke with businesses, analyzed existing systems, and identified major gaps— <span className='text-white font-semibold'> lack of automation, fragmented workflows, and poor customer experiences. </span> It became clear that companies needed a <span className='text-white font-semibold'> simple, digital solution </span> to streamline their warranty operations.</p>
                                <p>That’s how CodeWarranty was created—a smart, SaaS-based platform designed to make warranty management effortless, automated, and cost-effective. Today, we continue to help businesses improve efficiency, reduce headaches, and provide a better experience for their customers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-8 w-large mx-auto Gilroy'>
                    <div className='bg-[#0B3635] p-8 lg:rounded-full md:rounded-[71px] sm:rounded-[71px] s:rounded-[71px]'>
                        <div className='grid grid-cols-12 gap-4'>
                            <div className='lg:col-span-5 md:col-span-12 s:col-span-12'>
                                <p className='text-white text-[35px] capitalize lg:text-right md:text-center sm:text-center s:text-center'> <span className='text-[#daddd6]'>We are <br />
                                    the next era <br /></span>
                                    of warranty <br /> Management</p>
                            </div>
                            <div className='lg:col-span-7 md:col-span-12 s:col-span-12'>
                                <p className='text-left text-white mb-3'>We are on a mission to make Warranty <br /> Management Seamless and Customer-Centric</p>
                                <div className='pl-4 pr-4 border-l-2 border-[#00FFFC] text-[#a7b7b2]'>
                                    <p>After analyzing the biggest pain points in <span className='text-white'> warranty management, </span>  we made it our mission to bring <span className='text-white'>transparency </span> and <span className='text-white'> efficiency </span> to the process. Customers often feel lost after filing a claim, unsure of its status and stuck in long wait times. <span className='text-white'>CodeWarranty</span> solves this
                                        with <span className='text-white'> real-time tracking, automated workflows, </span> and <span className='text-white'>faster resolutions</span>,  ensuring <span className='text-white'> better customer satisfaction, reduced costs, </span>  and a <span className='text-white'>seamless experience</span>. Today, businesses trust us to transform
                                        their warranty operations—driven by innovation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-8 w-large mx-auto bg-[#DADDD6] rounded-lg Gilroy'>
                    <div className='border-b-[1px] border-[#000000]'>
                        <p className='text-2xl font-semibold Brockmann'>Our Team</p>
                    </div>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='lg:col-span-5 md:col-span-12 s:col-span-12 p-8'>
                            <div className='bg-white rounded-lg'>
                                <Image src={team} title="Nikhil Garg" className='w-[80%] !h-[450px]' alt='Nikhil Garg Image' />
                            </div>
                        </div>
                        <div className='lg:col-span-7 md:col-span-12 s:col-span-12 py-6 self-center pr-8'>
                            <p className='mb-1 uppercase text-2xl'>Founder</p>
                            <p className='mb-4 font-bold text-3xl uppercase'><a href='https://www.linkedin.com/in/nikg510/' target='_blank'>Nikhil Garg </a></p>
                            <p className='text-[#5f605e] mb-6'>With a passion for technology and problem-solving, I have spent many years <b> in the IT industry,</b> working on <b>complex software solutions.</b> My journey has been shaped by <b> curiosity, innovation, and a commitment to simplifying everyday challenges </b> through technology.
                                <br />
                                <br />
                                From starting as a <b>Junior Engineer </b> to leading <b> large-scale projects,</b> I have always believed that the best solutions come from <b>understanding real-world problems</b>  and designing technology that works <b>seamlessly for businesses and their customers.</b></p>
                            <div className='bg-[#c5ccc6] p-8 rounded-2xl'>
                                <p className='text-[#4f524f] text-2xl mb-3'>I believe</p>
                                <p className='text-black font-semibold text-base'>“Technology should simplify, not complicate. <br /> CodeWarranty is built to make warranties effortless”</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='grid grid-cols-5 gap-4'>
                        <div className='col-span-1'>
                            <Image src={Team1} title="Hero image description" alt='about Us' />
                            <div className='flex justify-between'>
                                <div className='pt-4'>
                                    <p className='text-lg font-semibold'>Chris Bruce</p>
                                    <p>Founder & CEO</p>
                                </div>
                                <div className='mr-4 self-center'>
                                    <Image src={arrow} title="Hero image description" alt='about Us' />
                                </div>
                            </div>

                        </div>
                        <div className='col-span-1'>
                            <Image src={Team2} title="Hero image description" alt='about Us' />
                            <div className='flex justify-between'>
                                <div className='pt-4'>
                                    <p className='text-lg font-semibold'>Aileen Gomes</p>
                                    <p>Chief of Staff</p>
                                </div>
                                <div className='mr-4 self-center'>
                                    <Image src={arrow} title="Hero image description" alt='about Us' />
                                </div>
                            </div>

                        </div>
                        <div className='col-span-1'>
                            <Image src={Team3} title="Hero image description" alt='about Us' />
                            <div className='flex justify-between'>
                                <div className='pt-4'>
                                    <p className='text-lg font-semibold'>Eric Ullrich</p>
                                    <p>Sales Manager</p>
                                </div>
                                <div className='mr-4 self-center'>
                                    <Image src={arrow} title="Hero image description" alt='about Us' />
                                </div>
                            </div>

                        </div>
                        <div className='col-span-1'>
                            <Image src={Team4} title="Hero image description" alt='about Us' />
                            <div className='flex justify-between'>
                                <div className='pt-4'>
                                    <p className='text-lg font-semibold'>Joe Harrison</p>
                                    <p>Frontend Engineer</p>
                                </div>
                                <div className='mr-4 self-center'>
                                    <Image src={arrow} title="Hero image description" alt='about Us' />
                                </div>
                            </div>

                        </div>
                        <div className='col-span-1'>
                            <Image src={Team5} title="Hero image description" alt='about Us' />
                            <div className='flex justify-between'>
                                <div className='pt-4'>
                                    <p className='text-lg font-semibold'>Michal Jaremko</p>
                                    <p>Systems Engineer</p>
                                </div>
                                <div className='mr-4 self-center'>
                                    <Image src={arrow} title="Hero image description" alt='about Us' />
                                </div>
                            </div>

                        </div>
                    </div> */}
                </div >

                <div className='py-12 w-large mx-auto Gilroy'>
                    <p className='text-white text-center text-3xl leading-none Brockmann xl:font-[500] py-8'>Our Values</p>
                    <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 s:grid-cols-12 gap-4 py-5 px-8'>
                        <div className='lg:col-span-4 md:col-span-6 s:col-span-12'>
                            <div className=''>
                                <div className='flex'>
                                    <Image src={Mask} title="Hero image description" className='mr-3' alt='Customer-Centric Approach' />
                                    <p className='text-xl text-white Brockmann self-center'>Customer-Centric <br /> Approach</p>
                                </div>
                                <p className='text-[#DBE2DC] mt-3 pr-6'>Our customers are at the heart of everything we do. <b>We design </b> our solutions to <b>enhance user experience,</b>  ensuring <b> smoother warranty management, </b> faster claim resolutions, and <b>complete transparency</b>. When our <b>customers succeed, we succeed.</b></p>
                            </div>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 s:col-span-12'>
                            <div className=''>
                                <div className='flex'>
                                    <Image src={Mask} title="Hero image description" className='mr-3' alt='Innovation-Driven Solutions' />
                                    <p className='text-xl text-white Brockmann self-center'>Innovation-Driven  <br /> Solutions</p>
                                </div>
                                <p className='text-[#DBE2DC] mt-3 pr-6'>We believe in <b>continuous improvement</b> and <b>smart automation</b>. By leveraging the latest technology, we simplify complex warranty processes, making them more <b>efficient, reliable,</b> and <b>scalable</b> for businesses of
                                    all sizes.</p>
                            </div>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 s:col-span-12'>
                            <div className=''>
                                <div className='flex'>
                                    <Image src={Mask} title="Hero image description" className='mr-3' alt='Integrity & Transparency' />
                                    <p className='text-xl text-white Brockmann self-center'>Integrity &  <br /> Transparency</p>
                                </div>
                                <p className='text-[#DBE2DC] mt-3 pr-6'>Trust is built through <b>honesty and clarity.</b> We <b>prioritize transparency</b> in every step, ensuring businesses and <b> customers always know where they stand in the warranty process. </b> No hidden steps, no unnecessary delays—just clear, fair solutions.</p>
                            </div>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 s:col-span-12'>
                            <div className=''>
                                <div className='flex'>
                                    <Image src={Mask} title="Hero image description" className='mr-3' alt='about Us' />
                                    <p className='text-xl text-white Brockmann self-center'>Efficiency &   <br /> Reliability</p>
                                </div>
                                <p className='text-[#DBE2DC] mt-3 pr-6'>Time is valuable, and we strive to save it. Our streamlined workflows and <b> automated processes reduce waiting times,</b> eliminate inefficiencies, and deliver a system businesses can rely on for <b>seamless warranty management</b>.</p>
                            </div>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 s:col-span-12'>
                            <div className=''>
                                <div className='flex'>
                                    <Image src={Mask} title="Hero image description" className='mr-3' alt='Simplicity in Technology' />
                                    <p className='text-xl text-white Brockmann self-center'>Simplicity in   <br /> Technology</p>
                                </div>
                                <p className='text-[#DBE2DC] mt-3 pr-6'>Technology should simplify, not complicate. Our platform is designed to be <b>intuitive</b> and <b>user-friendly</b>, removing the hassle from <b>warranty management</b>  while <b> maintaining powerful capabilities for businesses. </b> </p>
                            </div>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 s:col-span-12'>
                            <div className=''>
                                <div className='flex'>
                                    <Image src={Mask} title="Hero image description" className='mr-3' alt='Commitment to Growth' />
                                    <p className='text-xl text-white Brockmann self-center'>Commitment to   <br /> Growth</p>
                                </div>
                                <p className='text-[#DBE2DC] mt-3 pr-6'>We don’t just build software; <b>  we build lasting partnerships </b>. As industries evolve, so do we—constantly <b>innovating, learning,</b> and <b>improving</b> to help businesses <b>scale with confidence</b> and ease.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='py-8 w-large mx-auto'>
                    <div id='contactUs'></div>
                    <Contact />
                </div>

                <div className='w-large mx-auto'>
                    <div className='lg:flex md:block sm:block bg-[#04292B] justify-center text-white p-12 mx-8'>

                        <p className='Gilroy text-3xl text-[#95AAAD] lg:text-center md:text-center sm:text-center'>Your <span className='text-white'> warranty  transformation begins now. </span> <br />  Let us simplify, automate, and elevate your operations.</p>
                    </div>
                </div >
                {showButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-20 right-5 px-4 py-2 rounded-full shadow-lg "
                    >
                        <Image title="Hero image description" className="rotate-180" src={close} width={40} height={40} alt="Go To Up" />
                    </button>
                )}

                <a href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3TUE4miGSgGYkjSRA71gPaWzwLoUya5WDHu3IXW7Zt6nyC8VQW1SamtXC-W8Yig-01MGvDaoJp' target='_blank'
                    onClick={scrollToTop}
                    className="fixed bottom-5 Gilroy font-semibold leading-none left-5 text-center px-4 py-2 rounded-tl-[0px] rounded-tr-[20px] rounded-br-[0px] rounded-bl-[20px] shadow-[1px_1px_4px_0px_#504d4d] bg-[#00FFFC] text-black "
                >Book <br />  Appointment
                </a>
                <Footer />
            </div >
        </>
    )
}

export default AboutUs
