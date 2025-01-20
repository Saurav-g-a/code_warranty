import React from 'react'
import Image from 'next/image';
import Header from '@/components/header'
import Banner1 from '@/public/assets/images/video.png'
import Banner from '@/public/assets/images/Group12.png'
import Mask from '@/public/assets/images/Warranty.svg'
import Mask1 from '@/public/assets/images/Vector.png'
import lifecycle from '@/public/assets/images/CompleteLifecycleManagement.png'
import Dealer from '@/public/assets/images/DealerClaimsManagement.png'
import Dealer1 from '@/public/assets/images/ManufacturerClaimsProcessing.png'
import Dealer2 from '@/public/assets/images/SupplierRecoveryOptimization.png'
import Business from '@/public/assets/images/MinimizeWarrantyDisputes.png'
import Business1 from '@/public/assets/images/AccelerateClaimApprovals.png'
import Business2 from '@/public/assets/images/SeamlessAPIIntegration.png'
import Business3 from '@/public/assets/images/ReduceOperationalComplexity.png'
import Business4 from '@/public/assets/images/OptimizeFinancialRecovery.png'
import Business5 from '@/public/assets/images/EnhanceDealerCollaboration.png'
import Business6 from '@/public/assets/images/ImproveData-DrivenDecisionMaking.png'
import custom from '@/public/assets/images/CustomDevelopment.png'
import custom1 from '@/public/assets/images/End-to-EndSupport.png'
import Footer from '@/components/footer'
import CustomAccordion from '@/components/accordion'
import Contact from '@/components/contact'
import DeliverImage from '@/public/assets/images/DeliverImage.png'
import DeliverImage1 from '@/public/assets/images/FurnitureInsurance.svg'
import DeliverImage2 from '@/public/assets/images/Appliances.svg'
import DeliverImage3 from '@/public/assets/images/ElectricVehicles.svg'
import DeliverImage4 from '@/public/assets/images/LogisticsandInsurance.svg'
import DeliverImage5 from '@/public/assets/images/AgricultureEquipment.svg'
import DeliverImage6 from '@/public/assets/images/ConsumerElectronics.svg'
import DeliverImage7 from '@/public/assets/images/ConsumerDurables.svg'
import Onboard from '@/public/assets/images/Onboard.png';
import Strengthen from '@/public/assets/images/Strengthen.png';
import Resolve from '@/public/assets/images/Resolve.png';
import Unify from '@/public/assets/images/Unify.png';
import Return from '@/public/assets/images/Return.png';
import Automate from '@/public/assets/images/Automate.png';
import Analyze from '@/public/assets/images/Analyze.png';
import Recover from '@/public/assets/images/Recover.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Helmet } from 'react-helmet'

export default function Page() {

    const accordionItems = [
        {
            title: "What is a warranty management platform, and how does it help?   ",
            content:
                "A warranty management platform automates and streamlines the process of handling product warranties, claims, and recoveries. It helps businesses reduce operational costs, improve efficiency, and deliver a seamless experience for both customers and dealers.",
        },
        {
            title: "How does your platform handle warranty claims?",
            content:
                "Our platform simplifies the entire claims process by automating validations, tracking claim statuses in real-time, and ensuring faster resolutions. It’s designed to reduce errors and ensure every claim is processed accurately and efficiently.",
        },
        {
            title: "Can I use the platform to track returns and recoveries?",
            content:
                "Absolutely! The platform supports returns and recovery workflows by providing tools to manage product returns, validate claims, and optimize recovery processes, helping you save time and minimize losses.",
        },
        {
            title: "How does API integration work with the platform?",
            content:
                "API integration ensures seamless connectivity between your existing systems and our platform. It allows data matching for warranty claims, product details, and customer records to ensure accurate and efficient operations.",
        },
        {
            title: "Is the platform scalable for my growing business?",
            content:
                "Yes! Our solution is built to scale with your business. Whether you’re expanding to new markets or managing increasing claims volume, the platform adapts to your needs with ease.",
        },
        {
            title: "How does the platform improve supplier recovery?",
            content:
                "The platform includes a dedicated supplier portal that helps validate parts and labor claims, track recovery processes, and provide clear visibility into supplier reimbursements.",
        },
        {
            title: "What kind of insights can I get from the platform?",
            content:
                "Our platform provides robust analytics and reporting tools to help you identify trends, improve product quality, and make informed decisions about warranty policies and operations.",
        },
        {
            title: "Can the platform help me eliminate fraudulent claims?",
            content:
                "Yes, the platform uses advanced validation checks to detect and prevent fraudulent claims, safeguarding your business from unnecessary financial losses.",
        },
        {
            title: " Does the platform support dealer and customer collaboration?",
            content:
                "Absolutely! The platform bridges the gap between manufacturers, dealers, and customers, ensuring smooth communication and collaboration at every stage of the warranty lifecycle.",
        },
        {
            title: "How quickly can I implement the platform?",
            content:
                "Implementation is fast and hassle-free. Our team works closely with you to ensure the platform integrates seamlessly with your existing systems, so you can start seeing benefits right away.",
        },
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const headerOffset = 50; // Adjust this value based on your header height
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };



    return (
        <>
            <Helmet>
                <link rel="canonical" href="https://codewarranty.vercel.app" />
                <title>Best Warranty Management Software | Streamline Claims and Warranty Operations</title>
                <meta name="description" content="Best Warranty Management Software | Streamline Claims and Warranty Operations" />
                <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
                <meta name="theme-color" content="#002025" />
                <link rel="apple-touch-icon" sizes="57x57" href="@/public/assets/images/logo.png" />
            </Helmet>

            <div className='bg-[#002025] bg-headerBackground1 bg-contain bg-no-repeat'>
                <div className='w-large mx-auto'>
                    <Header />
                    <div className='grid grid-cols-12 gap-0 pb-8 xl:pt-12'>
                        <div className='col-span-2'></div>
                        <div className='lg:col-span-8 md:col-span-12 s:col-span-12 pt-5 px-6'>
                            <h1 className='2xl:w-2/3 xl:w-full xl:mx-auto text-center text-white lg:text-[55px] md:text-[40px] sm:text-[34px] s:text-[34px] leading-none	Brockmann'><span className='text-[#00FFFC]'>Transform</span> Your <span className='text-[#00FFFC]'>Business</span> with Advanced <span className='text-[#00FFFC]'>Warranty</span> <span className='text-[#00FFFC]'>  SaaS Solutions </span></h1>
                            <h2 className='text-white text-xl text-center py-5 Gilroy'>Effortless Warranty Management Tailored for Growth</h2>
                            <div className='lg:block md:block sm:hidden s:hidden'>
                                <div className='grid grid-cols-12 gap-3'>
                                    <div className='col-span-4 border-r pr-3'>
                                        <p className='text-right text-lg pl-8 leading-1 Gilroy text-white'>Empowered by InsureTech and Built for Compliance</p>
                                    </div>
                                    <div className='col-span-8 flex self-center Gilroy'>
                                        <p className='text-[#95AAAD]'>Optimize your warranty operations with our smart and scalable software, designed to enhance efficiency, reduce costs, and deliver exceptional customer experiences.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='lg:hidden md:hidden sm:block s:block'>
                                <p className='text-center text-lg leading-1 Gilroy text-white'>Empowered by InsureTech and Built for Compliance</p>
                                <hr className='w-[30%] border-[#00FFFC] my-3 mx-auto' />
                                <p className='text-[#95AAAD] text-center'>Optimize your warranty operations with our smart and scalable software, designed to enhance efficiency, reduce costs, and deliver exceptional customer experiences.</p>

                            </div>

                            <div className='text-center py-5'>
                                <button onClick={() => scrollToSection("contactUs")} className="bg-[#8BC542] Gilroy uppercase py-4 px-6 rounded-md text-white font-medium">Book A Demo</button>
                            </div>
                            <Image title="Hero image description" src={Banner} alt="banner" className='mx-auto' />
                        </div>
                        <div className='col-span-2'></div>
                    </div>
                </div>

                <div className='py-12 w-large mx-auto'>
                    <p className='text-white text-center text-3xl leading-none Brockmann xl:font-[500]'><span className='text-[#00FFFC]'> All-in-One </span> Warranty <br /> Management Platform</p>
                    <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-0'>
                        <div className='col-span-3'></div>
                        <div className='col-span-6'>
                            <p className='text-white text-center text-xl py-4 Brockmann'>Simplify, Automate, and Transform Your Warranty Operations
                            </p>
                            <p className='text-[#00FFFC] text-center Gilroy'>Revolutionize Warranty Workflows with a Single Platform </p>
                            <p className='text-[#95AAAD] text-center Gilroy text-[15px]'>Connect every part of your warranty ecosystem—manufacturers, distributors, dealers, suppliers, and service providers—to deliver seamless, frustration-free experiences for customers.</p>
                        </div>
                        <div className='col-span-3'></div>
                    </div>
                    <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-8 s:grid-cols-4 gap-4 py-5 px-8'>
                        <div className='col-span-4'>
                            <div className='flex '>
                                <Image title="Hero image description" src={Mask} className='pr-3 self-start' alt="mask" />
                                <p className='text-white Gilroy font-[500]'>Streamline claims, registrations, and <br /> service plans with ease.</p>
                            </div>
                        </div>
                        <div className='col-span-4'>
                            <div className='flex '>
                                <Image title="Hero image description" src={Mask} className='pr-3 self-start' alt="mask" />
                                <p className='text-white Gilroy font-[500]'>Automate key processes to eliminate <br /> inefficiencies and reduce operational costs.</p>
                            </div>
                        </div>
                        <div className='col-span-4'>
                            <div className='flex '>
                                <Image title="Hero image description" src={Mask} className='pr-3 self-start' alt="mask" />
                                <p className='text-white Gilroy font-[500]'>Support dealer services with a robust, <br /> all-in-one solution built for scalability.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-8 text-center w-large mx-auto'>
                    <p className='text-white text-2xl Brockmann'>Complete Lifecycle Management</p>
                    <p className='text-[#95AAAD] Gilroy text-base'>Our platform brings together every stage of the warranty process to maximize efficiency and deliver value:</p>
                    <div className='relative mt-6 lg:block md:hidden sm:hidden s:hidden'>
                        <Image title="Hero image description" src={lifecycle} className='mx-auto px-16 py-8' alt="mask" />
                        <div className='absolute top-5 3xl:left-[43%] 2xl:left-[43%] xl:left-[42%] lg:left-[37%] '>
                            <p className='text-[#95AAAD] Gilroy text-base'>Simplify product setup <br /> with, registrations, and <br /> service plans</p>
                        </div>
                        <div className='absolute top-[19%] 3xl:left-[22%] 2xl:left-[17%] xl:left-[14%] lg:left-[-2%] '>
                            <p className='text-[#95AAAD] Gilroy text-base text-right'>Foster deeper connections <br /> and enhance trust with <br /> customers and partners.</p>
                        </div>
                        <div className='absolute top-[18%] 3xl:right-[23%] 2xl:right-[19%] xl:right-[16%] lg:right-[1%] '>
                            <p className='text-[#95AAAD] Gilroy text-base text-left'>Handle warranty claims <br /> with precision and speed,<br /> backed by data-driven <br /> workflows.</p>
                        </div>
                        <div className='absolute top-[44%] 3xl:left-[15%] 2xl:left-[9%] xl:left-[5%] lg:left-[-5%] '>
                            <p className='text-[#95AAAD] Gilroy text-base text-right'>Bring stakeholders together <br /> on one cohesive platform for  <br /> seamless collaboration.</p>
                        </div>
                        <div className='absolute top-[47%] 3xl:right-[17%] 2xl:right-[13%] xl:right-[9%] lg:right-[-4%]'>
                            <p className='text-[#95AAAD] Gilroy text-base text-left'>Ensure seamless return   <br /> processes for improved <br /> customer experiences.</p>
                        </div>
                        <div className='absolute bottom-[13%] 3xl:right-[22%] 2xl:right-[17%] xl:right-[14%] lg:right-[-2%] '>
                            <p className='text-[#95AAAD] Gilroy text-base text-left'>Streamline recovery   <br /> operations to minimize losses <br /> and maximize efficiency.</p>
                        </div>
                        <div className='absolute bottom-[14%] 3xl:left-[22%] 2xl:left-[17%] xl:left-[14%] lg:left-[-3%]  '>
                            <p className='text-[#95AAAD] Gilroy text-base text-right'>Optimize operations with   <br /> intelligent, automated <br /> workflows that drive results.</p>
                        </div>
                        <div className='absolute bottom-[-2%] 3xl:left-[43%] 2xl:left-[43%]  xl:left-[42%] lg:left-[37%]'>
                            <p className='text-[#95AAAD] Gilroy text-base text-left'>Transform raw data into   <br /> actionable insights for <br /> smarter decision-making.</p>
                        </div>
                    </div>
                    <div className='mt-6 lg:hidden md:block sm:block s:block'>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex justify-start'>
                                <Image title="Hero image description" src={Onboard} alt="mask" className='md:w-[170px] sm:w-[120px] s:w-[100px]' />
                                <p className='text-[#95AAAD] Gilroy text-base self-center'>
                                    Simplify product setup <br /> with, registrations, and <br /> service plans.
                                </p>
                            </div>
                            <div className='flex justify-end'>
                                <p className='text-[#95AAAD] Gilroy text-base self-center'>
                                    Handle warranty claims with <br /> precision and speed, backed <br /> by data-driven workflows.
                                </p>
                                <Image title="Hero image description" src={Resolve} alt="mask" className='md:w-[170px] sm:w-[120px] s:w-[100px]' />
                            </div>
                            <div className='flex'>
                                <Image title="Hero image description" src={Return} alt="mask" className='md:w-[170px] sm:w-[120px] s:w-[100px]' />
                                <p className='text-[#95AAAD] Gilroy text-base self-center'>
                                    Ensure seamless return <br /> processes for improved <br /> customer experiences.
                                </p>
                            </div>
                            <div className='flex justify-end'>
                                <p className='text-[#95AAAD] Gilroy text-base self-center'>
                                    Streamline recovery <br /> operations to minimize losses <br /> and maximize efficiency.
                                </p>
                                <Image title="Hero image description" src={Recover} alt="mask" className='md:w-[170px] sm:w-[120px] s:w-[100px]' />
                            </div>
                            <div className='flex'>
                                <Image title="Hero image description" src={Analyze} alt="mask" className='md:w-[170px] sm:w-[120px] s:w-[100px]' />
                                <p className='text-[#95AAAD] Gilroy text-base self-center'>
                                    Transform raw data into <br /> actionable insights for <br /> smarter decision-making.
                                </p>
                            </div>
                            <div className='flex justify-end'>
                                <p className='text-[#95AAAD] Gilroy text-base self-center'>
                                    Optimize operations with <br /> intelligent, automated <br /> workflows that drive results.
                                </p>
                                <Image title="Hero image description" src={Automate} alt="mask" className='md:w-[170px] sm:w-[120px] s:w-[100px]' />
                            </div>
                            <div className='flex'>
                                <Image title="Hero image description" src={Unify} alt="mask" className='md:w-[170px] sm:w-[120px] s:w-[100px]' />
                                <p className='text-[#95AAAD] Gilroy text-base self-center'>
                                    Bring stakeholders together <br /> on one cohesive platform <br /> for seamless collaboration.
                                </p>
                            </div>
                            <div className='flex justify-end'>
                                <p className='text-[#95AAAD] Gilroy text-base self-center'>
                                    Foster deeper connections <br /> and enhance trust with <br /> customers and partners.
                                </p>
                                <Image title="Hero image description" src={Strengthen} className='md:w-[170px] sm:w-[120px] s:w-[100px]' alt="mask" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-8 w-large mx-auto'>
                    <p className='text-3xl Brockmann text-white text-center'>Comprehensive Warranty <br /> Lifecycle Solutions</p>
                    <p className='text-[#95AAAD] text-lg text-center Gilroy py-6'>Streamlined processes for every stage of the warranty journey, tailored for efficiency and accuracy.</p>
                    <div className='lg:block md:hidden sm:block s:block'>
                        <div className='grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 s:grid-cols-4 gap-4 py-5 px-8'>
                            <div className='col-span-4 text-white'>
                                <Image title="Hero image description" src={Dealer} alt="mask" />
                                <p className='pt-2 Brockmann'>Dealer Claims Management</p>
                                <p className='py-2 text-[#95AAAD] Gilroy lg:pr-12 md:pr-8 sm:pr-4 s:pr-0'>Empower dealers to submit and track
                                    claims efficiently with complete transparency and accuracy.</p>
                                <div className='border-l border-[#8BC542] pl-3 Gilroy lg:pr-16 md:pr-8 sm:pr-4 s:pr-0'>
                                    <p className='flex'><Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Warranty Validation</p>
                                    <p className='text-[#95AAAD] pb-3'>Simplify in/out-of-warranty checks for quick resolutions.</p>
                                    <p className='flex'><Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Parts and Labor Validation</p>
                                    <p className='text-[#95AAAD] pb-3'>Ensure accuracy in service costs and component validation.</p>
                                    <p className='flex'><Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Real-Time Claim Status</p>
                                    <p className='text-[#95AAAD]'>Provide full visibility to keep stakeholders informed.</p>
                                </div >
                            </div >
                            <div className='col-span-4 text-white'>
                                <Image title="Hero image description" src={Dealer1} alt="mask" />
                                <p className='pt-2 Brockmann'>Manufacturer Claims Processing</p>
                                <p className='py-2 text-[#95AAAD] Gilroy lg:pr-12 md:pr-8 sm:pr-4 s:pr-0'>Enable manufacturers to automate and adjudicate claims faster, improving decision-making and reducing delays.</p>
                                <div className='border-l border-[#8BC542] pl-3 Gilroy lg:pr-16 md:pr-8 sm:pr-4 s:pr-0'>
                                    <p className='flex'><Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Warranty Validation</p>
                                    <p className='text-[#95AAAD] pb-3'>Verify eligibility quickly and accurately.</p>
                                    <p className='flex' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' />Streamlined Part Returns</p>
                                    <p className='text-[#95AAAD] pb-3'>Simplify tracking and recovery of returned parts.</p>
                                    <p className='flex' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' />Full Transparency</p>
                                    <p className='text-[#95AAAD]'>Offer clear claim insights and status updates for smoother operations.</p>
                                </div >
                            </div >
                            <div className='col-span-4 text-white'>
                                <Image title="Hero image description" src={Dealer2} alt="mask" />
                                <p className='pt-2 Brockmann'>Supplier Recovery Optimization</p>
                                <p className='py-2 text-[#95AAAD] Gilroy lg:pr-24 md:pr-12 sm:pr-4 s:pr-0'>Provide suppliers with a dedicated portal to manage cost recovery efficiently and effectively.</p>
                                <div className='border-l border-[#8BC542] pl-3 Gilroy lg:pr-16 md:pr-8 sm:pr-4 s:pr-0'>
                                    <p className='flex'><Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Cost Recovery Tracking</p>
                                    <p className='text-[#95AAAD] pb-3'>Streamline processes for supplier reimbursement.</p>
                                    <p className='flex' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Parts and Labor Validation</p>
                                    <p className='text-[#95AAAD] pb-3'>Confirm valid claims for accurate recovery.</p>
                                    <p className='flex' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' />Claim Visibility</p>
                                    <p className='text-[#95AAAD]'>Maintain transparency across the claim lifecycle.</p>
                                </div >
                            </div >
                        </div >
                    </div>
                    <div className='lg:hidden md:block sm:hidden s:hidden'>
                        <div className='flex overflow-x-auto gap-2 scroll-smooth px-8'>
                            <div className='min-w-[200px] w-[250px] flex-shrink-0 flex-grow-0 basis-auto'>
                                <div className=' text-white'>
                                    <Image title="Hero image description" src={Dealer} alt="mask" />
                                    <p className='pt-2 Brockmann'>Dealer Claims Management</p>
                                    <p className='py-2 text-[#95AAAD] Gilroy '>Empower dealers to submit and track
                                        claims efficiently with complete transparency and accuracy.</p>
                                    <div className='border-l border-[#8BC542] pl-3 Gilroy pr-4'>
                                        <p className='flex'><Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Warranty Validation</p>
                                        <p className='text-[#95AAAD] pb-3'>Simplify in/out-of-warranty checks for quick resolutions.</p>
                                        <p className='flex'><Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Parts and Labor Validation</p>
                                        <p className='text-[#95AAAD] pb-3'>Ensure accuracy in service costs and component validation.</p>
                                        <p className='flex'><Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Real-Time Claim Status</p>
                                        <p className='text-[#95AAAD]'>Provide full visibility to keep stakeholders informed.</p>
                                    </div >
                                </div>
                            </div>
                            <div className='min-w-[200px] w-[250px] flex-shrink-0 flex-grow-0 basis-auto'>
                                <div className='text-white'>
                                    <Image title="Hero image description" src={Dealer1} alt="mask" />
                                    <p className='pt-2 Brockmann'>Manufacturer Claims Processing</p>
                                    <p className='py-2 text-[#95AAAD] Gilroy pr-4'>Enable manufacturers to automate and adjudicate claims faster, improving decision-making and reducing delays.</p>
                                    <div className='border-l border-[#8BC542] pl-3 Gilroy pr-4'>
                                        <p className='flex'><Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Warranty Validation</p>
                                        <p className='text-[#95AAAD] pb-3'>Verify eligibility quickly and accurately.</p>
                                        <p className='flex' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' />Streamlined Part Returns</p>
                                        <p className='text-[#95AAAD] pb-3'>Simplify tracking and recovery of returned parts.</p>
                                        <p className='flex' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' />Full Transparency</p>
                                        <p className='text-[#95AAAD]'>Offer clear claim insights and status updates for smoother operations.</p>
                                    </div >
                                </div>
                            </div>
                            <div className='min-w-[200px] w-[250px] flex-shrink-0 flex-grow-0 basis-auto'>
                                <div className='text-white'>
                                    <Image title="Hero image description" src={Dealer2} alt="mask" />
                                    <p className='pt-2 Brockmann'>Supplier Recovery Optimization</p>
                                    <p className='py-2 text-[#95AAAD] Gilroy pr-4'>Provide suppliers with a dedicated portal to manage cost recovery efficiently and effectively.</p>
                                    <div className='border-l border-[#8BC542] pl-3 Gilroy pr-4'>
                                        <p className='flex'><Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Cost Recovery Tracking</p>
                                        <p className='text-[#95AAAD] pb-3'>Streamline processes for supplier reimbursement.</p>
                                        <p className='flex' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Parts and Labor Validation</p>
                                        <p className='text-[#95AAAD] pb-3'>Confirm valid claims for accurate recovery.</p>
                                        <p className='flex' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' />Claim Visibility</p>
                                        <p className='text-[#95AAAD]'>Maintain transparency across the claim lifecycle.</p>
                                    </div >
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-center text-[#95AAAD] py-4 Gilroy'>Unlock efficiency and accuracy at every stage of the warranty lifecycle with tailored solutions for dealers, manufacturers, and suppliers.</p>
                </div >

                <div className='py-8 w-large mx-auto'>
                    <p className='text-[#95AAAD] Brockmann text-3xl text-center'>Business Benefits Of <span className='text-[#00FFFC]'> CodeWarranty </span></p>
                    <p className='text-[#95AAAD] text-center Gilroy py-6'>Transforming warranty management through automation, analytics, and seamless integration.</p>
                    <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 text-white md:px-8 sm:px-1 s:px-0'>
                        <div className='col-span-6 h-full'>
                            <div className='border border-[#104649] p-8 rounded-lg h-full'>
                                <Image title="Hero image description" src={Business} className='py-4' alt="mask" />
                                <p className='Brockmann text-xl'>Minimize Warranty Disputes</p>
                                <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Leverage advanced claim validation processes to reduce conflicts and ensure smoother warranty claim handling.</p>
                                <p className='flex Gilroy pb-3'> <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Detect and prevent invalid claims automatically.</p>
                                <p className='flex Gilroy'> <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-center' /> Build trust with accurate and fair claim management across all stakeholders.</p>
                            </div>
                        </div>
                        <div className='col-span-6 h-full'>
                            <div className='border border-[#104649] p-8 rounded-lg h-full'>
                                <Image title="Hero image description" src={Business1} className='py-4' alt="mask" />
                                <p className='Brockmann text-xl'>Accelerate Claim Approvals</p>
                                <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Cut down processing times with real-time claim tracking and automated workflows.</p>
                                <p className='flex Gilroy pb-3'> <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Speed up warranty claims through precise validation.</p>
                                <p className='flex Gilroy'> <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Enhance customer satisfaction with faster service resolutions.</p>
                            </div>
                        </div >
                        <div className='col-span-6 h-full'>
                            <div className='border border-[#104649] p-8 rounded-lg h-full'>
                                <Image title="Hero image description" src={Business2} className='py-4' alt="mask" />
                                <p className='Brockmann text-xl'>Seamless API Integration</p>
                                <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Integrate with existing CRM, ERP, and dealer management systems for a unified warranty management ecosystem.</p>
                                <p className='flex Gilroy pb-3'> <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' /> Synchronize customer, product, and claim data seamlessly across platforms.</p>
                                <p className='flex Gilroy pb-3' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Eliminate redundant data entry and improve operational efficiency.</p>
                                <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' /> Enable real - time updates and consistent information across all connected systems.</p>
                            </div >
                        </div >
                        <div className='col-span-6 h-full'>
                            <div className='border border-[#104649] p-8 rounded-lg h-full'>
                                <Image title="Hero image description" src={Business3} className='py-4' alt="mask" />
                                <p className='Brockmann text-xl'>Reduce Operational Complexity</p>
                                <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Simplify the management of dealers, servicers, and customers with centralized operations.</p>
                                <p className='flex Gilroy pb-3'> <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Consolidate warranty data across all stakeholders in one platform.</p>
                                <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' />Use bulk uploads and automation to reduce administrative workload.</p>
                            </div >
                        </div >
                        <div className='col-span-6 h-full'>
                            <div className='border border-[#104649] p-8 rounded-lg h-full'>
                                <Image title="Hero image description" src={Business4} alt="mask" className='py-4' />
                                <p className='Brockmann text-xl'>Optimize Financial Recovery</p>
                                <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Maximize supplier recovery rates with precise claim validation and real-time tracking.</p>
                                <p className='flex Gilroy pb-3'> <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Monitor cost recoveries and reimbursement processes.</p>
                                <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Prevent financial losses with rigorous validation protocols.</p>
                            </div >
                        </div >
                        <div className='col-span-6 h-full'>
                            <div className='border border-[#104649] p-8 rounded-lg h-full'>
                                <Image title="Hero image description" src={Business5} className='py-4' alt="mask" />
                                <p className='Brockmann text-xl'>Enhance Dealer Collaboration</p>
                                <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Strengthen partnerships with tools tailored for dealer management.</p>
                                <p className='flex Gilroy pb-3'> <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Provide custom price books and clear visibility into claims and contracts.</p>
                                <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Foster smooth communication to build trust and long - term partnerships.</p>
                            </div >
                        </div >
                        <div className='col-span-6 h-full'>
                            <div className='border border-[#104649] p-8 rounded-lg h-full'>
                                <Image title="Hero image description" src={Business6} className='py-4' alt="mask" />
                                <p className='Brockmann text-xl'>Improve Data-Driven Decision Making</p>
                                <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Access powerful analytics and reporting tools to make smarter business decisions.</p>
                                <p className='flex Gilroy pb-3'> <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' /> Analyze trends in claims, sales, and operations to identify opportunities for improvement.</p>
                                <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Use actionable insights to optimize warranty policies and product quality.</p>
                            </div >
                        </div >

                    </div >
                </div >

                <div className='py-8 w-large mx-auto'>
                    <p className='text-3xl Brockmann text-[#00FFFC] text-center mb-8'>Frequently Asked Questions</p>
                    <div className='lg:px-16 md:px-8 sm:px-2'>
                        <CustomAccordion items={accordionItems} />
                    </div>
                </div >

                <div className='py-8 w-large mx-auto'>
                    <p className='text-3xl Brockmann text-white text-center'>We Deliver Across Diverse <br /> Verticals and Industries</p>
                    <p className='text-[#00FFFC] text-lg text-center Gilroy py-4'>Custom Solutions Built to Meet Your Business Needs</p>
                    <p className='text-[#95AAAD] w-2/3 mx-auto text-base text-center Gilroy mb-3'>At CodeWarranty, we pride ourselves on creating innovative warranty management solutions tailored to a wide array of industries. Our flexible platform and expertise empower businesses to achieve efficiency,
                        scalability, and customer satisfaction, no matter the vertical.</p>
                    <div className='relative'>
                        {/* <Image   title="Hero image description" src={deliver} className='mt-12 mx-auto lg:block md:hidden sm:hidden' alt="mask" />
                    <Image   title="Hero image description" src={deliver1} className='mt-12 mx-auto lg:hidden md:block sm:block' alt="mask" /> */}
                        <div className='md:block sm:hidden s:hidden'>
                            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-5'>
                                <div className='bg-[#04292B] text-[#00FFFC] text-3xl relative p-8 border border-[#104649] rounded-xl'>
                                    <p className='text-left text-3xl font-semibold Gilroy'>
                                        Industries <br /> We
                                    </p>
                                    <p className='text-3xl font-semibold Gilroy flex justify-start'>
                                        Serve <Image title="Hero image description" src={DeliverImage} alt='Deliver' className='absolute left-[40%] top-[21%]' />
                                    </p>
                                </div>
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl '>
                                    <Image title="Hero image description" src={DeliverImage1} className='mb-3' alt='Deliver' />
                                    <p className='text-lg Brockmann text-white '>Furniture Insurance</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Provide reliable warranty and recovery solutions for furniture retailers.</p>
                                </div>
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image title="Hero image description" src={DeliverImage2} className='mb-3' alt='Deliver' />
                                    <p className='text-lg Brockmann text-white'>Appliances</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Automate warranty registration and claims for home appliances.</p>
                                </div>
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image title="Hero image description" src={DeliverImage3} className='mb-3' alt='Deliver' />
                                    <p className='text-lg Brockmann text-white'>Electric Vehicles</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Enhance warranty services for next-gen automotive solutions.</p>
                                </div >
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image title="Hero image description" src={DeliverImage4} className='mb-4' alt='Deliver' />
                                    <p className='text-lg Brockmann text-white'>Logistics and Insurance</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Improve operational efficiency with streamlined claim management.</p>
                                </div >
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image title="Hero image description" src={DeliverImage5} className='mb-5' alt='Deliver' />
                                    <p className='text-lg Brockmann text-white'>Agriculture Equipment</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Simplify warranty processes for machinery and tools.</p>
                                </div >
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image title="Hero image description" src={DeliverImage6} className='mb-3' alt='Deliver' />
                                    <p className='text-lg Brockmann text-white'>Consumer Electronics</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Seamlessly manage warranties for gadgets and electronic devices.</p>
                                </div >
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image title="Hero image description" src={DeliverImage7} className='mb-3' alt='Deliver' />
                                    <p className='text-lg Brockmann text-white'>Consumer Durables</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Optimize warranty handling for long-term goods like appliances and equipment.</p>
                                </div >
                            </div >
                        </div>
                        <div className='md:hidden sm:block s:block'>
                            {/* <Carousel responsive={responsive}>
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl '>
                                    <Image   title="Hero image description" src={DeliverImage1} className='mb-3' alt='Deliver' />
                                    <p  className='text-lg Brockmann text-white '>Furniture Insurance</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Provide reliable warranty and recovery solutions for furniture retailers.</p>
                                </div>
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image   title="Hero image description" src={DeliverImage2} className='mb-3' alt='Deliver' />
                                    <p  className='text-lg Brockmann text-white'>Appliances</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Automate warranty registration and claims for home appliances.</p>
                                </div>
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image   title="Hero image description" src={DeliverImage3} className='mb-3' alt='Deliver' />
                                    <p  className='text-lg Brockmann text-white'>Electric Vehicles</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Enhance warranty services for next-gen automotive solutions.</p>
                                </div >
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image   title="Hero image description" src={DeliverImage4} className='mb-4' alt='Deliver' />
                                    <p  className='text-lg Brockmann text-white'>Logistics and Insurance</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Improve operational efficiency with streamlined claim management.</p>
                                </div >
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image   title="Hero image description" src={DeliverImage5} className='mb-5' alt='Deliver' />
                                    <p  className='text-lg Brockmann text-white'>Agriculture Equipment</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Simplify warranty processes for machinery and tools.</p>
                                </div >
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image   title="Hero image description" src={DeliverImage6} className='mb-3' alt='Deliver' />
                                    <p  className='text-lg Brockmann text-white'>Consumer Electronics</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Seamlessly manage warranties for gadgets and electronic devices.</p>
                                </div >
                                <div className='bg-[#04292b] hover:bg-[#104342] p-8 rounded-xl'>
                                    <Image   title="Hero image description" src={DeliverImage7} className='mb-3' alt='Deliver' />
                                    <p  className='text-lg Brockmann text-white'>Consumer Durables</p>
                                    <p className='text-[#95AAAD] Gilroy text-base'>Optimize warranty handling for long-term goods like appliances and equipment.</p>
                                </div >
                            </Carousel> */}
                        </div>
                    </div >
                </div >

                <div className='py-8 w-large mx-auto'>
                    <p className='text-3xl Brockmann text-white text-center'>Custom Solutions Tailored for You</p>
                    <p className='text-[#95AAAD] w-2/3 mx-auto text-base text-center Gilroy '>We understand that every business is unique. That’s why we offer:</p>
                    <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 text-white lg:px-12 md:px-8 sm:px-4 s:px-2 py-8'>
                        <div className='col-span-6 h-full'>
                            <div className='border border-[#104649] p-8 rounded-lg h-full'>
                                <Image title="Hero image description" src={custom} className='py-4' alt="mask" />
                                <p className='Brockmann text-xl'>Custom Development</p>
                                <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Tailor-made applications to suit your specific needs.</p>
                            </div>
                        </div>
                        <div className='col-span-6 h-full'>
                            <div className='border border-[#104649] p-8 rounded-lg h-full'>
                                <Image title="Hero image description" src={custom1} className='py-4 ' alt="mask" />
                                <p className='Brockmann text-xl'>End-to-End Support</p>
                                <p className='text-[#95AAAD] Gilroy py-4 pr-8'>We've got you covered from onboarding to ongoing maintenance.</p>

                            </div>
                        </div >
                    </div >

                    <p className='text-[#95AAAD] w-2/3 mx-auto text-base text-center Gilroy '>Partner with us to experience solutions that adapt to your industry and business goals.</p>
                </div >

                <div className='py-8 w-large mx-auto'>
                    <div className='lg:flex md:flex sm:block s:block bg-[#04292B] justify-center text-white p-12 mx-8'>
                        <div className='lg:w-[50%] md:w-[50%] sm:w-full s:w-full md:text-left sm:text-center s:text-center'>
                            <p className='Gilroy text-3xl text-[#95AAAD]'><span className='text-white'> Let us know </span>  if you'd <br /> like further refinements!</p>
                        </div>
                        <p className='self-center Gilroy text-[#95AAAD] lg:w-[50%] md:w-[50%] sm:w-full s:w-full lg:text-right md:text-right sm:text-center s:text-center'>

                            <button onClick={() => scrollToSection("contactUs")} className="bg-[#8BC542] Gilroy uppercase py-4 px-6 rounded-md text-white font-medium">Know More</button>
                        </p>
                    </div>
                </div >

                <div className='py-8 w-large mx-auto'>
                    <p className='text-[#95AAAD] Brockmann text-3xl text-center'>Explore the  <span className='text-[#00FFFC]'> Capabilities </span></p>
                    <p className='text-[#95AAAD] text-center Gilroy py-6'>Discover the key features to automate the warranty management process</p>


                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 px-8'>
                        <div className='col-span-1 lg:order-none md:order-none sm:order-2 s:order-2 text-white'>
                            <p className='Brockmann text-xl'>Multiple Claim Types</p>
                            <p className='text-[#95AAAD] text-lg Gilroy py-4 pr-8'>The platform supports different types of claims such as:</p>
                            <p className='flex Gilroy '> <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' />Warranty Claims</p>
                            <p className='text-[#95AAAD] Gilroy pb-3'>Handle requests for repair or replacement under valid warranty terms.</p>
                            <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Bulk Claims</p>
                            <p className='text-[#95AAAD] Gilroy pb-3'>Allows multiple claims to be uploaded and processed simultaneously.</p>
                            <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' /> Custom Claims Management</p>
                            <p className='text-[#95AAAD] Gilroy'>Tailors claim processes based on product categories or dealer requirements.</p>
                            <p className='text-white Gilroy pt-5'>Impact</p>
                            <div className='border-l border-white pl-4 mt-3'>
                                <p className='text-[#95AAAD] Gilroy py-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Ensures flexibility to manage claims across a variety of products and use cases.</p>
                                <p className='text-[#95AAAD] Gilroy pb-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Bulk uploads improve efficiency for high-volume operations.</p>
                                <p className='text-[#95AAAD] Gilroy pb-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Provides transparency to dealers and customers about the claim status.</p>
                            </div>
                        </div >

                        <div className='lg:order-none md:order-none sm:order-1 s:order-1 flex'>
                            <Image title="Hero image description" src={Banner1} className='px-6 self-center' alt="mask" />
                        </div>
                        <div className='lg:order-none md:order-none sm:order-3 s:order-3 flex'>
                            <Image title="Hero image description" src={Banner1} className='px-6 self-center' alt="mask" />
                        </div>
                        <div className='col-span-1 text-white lg:order-none md:order-none sm:order-4 s:order-4 mt-3'>
                            <p className='Brockmann text-xl'>Advanced Pricing Features</p>
                            <p className='text-[#95AAAD] text-lg Gilroy py-4 pr-8'>The system supports managing dealer-specific price books with different pricing models, including:</p>
                            <p className='flex Gilroy ' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' />Regular Pricing</p>
                            <p className='text-[#95AAAD] Gilroy pb-3'>Fixed pricing for standard sales.</p>
                            <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' />Flat Pricing</p>
                            <p className='text-[#95AAAD] Gilroy pb-3'>Uniform pricing for specific categories or ranges.</p>
                            <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' /> Quantity - Based Pricing</p>
                            <p className='text-[#95AAAD] Gilroy'>Discounted rates for bulk purchases.</p>
                            <p className='text-white Gilroy pt-5'>Impact</p>
                            <div className='border-l border-white pl-4 mt-3'>
                                <p className='text-[#95AAAD] Gilroy py-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Simplifies the creation of price books tailored to individual dealers or markets.</p>
                                <p className='text-[#95AAAD] Gilroy pb-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Reduces manual errors with automated uploads and edits.</p>
                                <p className='text-[#95AAAD] Gilroy pb-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Drives sales through strategic pricing for large orders.</p>
                            </div>
                        </div >
                        <div className='col-span-1 text-white lg:order-none md:order-none sm:order-6 s:order-6 mt-3'>
                            <p className='Brockmann text-xl'>Real-Time Claim Tracking</p>
                            <p className='text-[#95AAAD] text-lg Gilroy py-4 pr-8'>Track claims at every stage of their lifecycle with features like:</p>
                            <p className='flex Gilroy ' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' />Status Updates</p>
                            <p className='text-[#95AAAD] Gilroy pb-3'>Clear visibility into claim processing.</p>
                            <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Approval Workflows</p>
                            <p className='text-[#95AAAD] Gilroy pb-3'>Automated steps for claim validation and approvals.</p>
                            <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' />Filters and Searches</p>
                            <p className='text-[#95AAAD] Gilroy'>Quickly locate claims by type, status, or dealer.</p>
                            <p className='text-white Gilroy pt-5'>Impact</p>
                            <div className='border-l border-white pl-4 mt-3'>
                                <p className='text-[#95AAAD] Gilroy py-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Improves communication between manufacturers, dealers, and customers.</p>
                                <p className='text-[#95AAAD] Gilroy pb-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Reduces delays by automating approval processes.</p>
                                <p className='text-[#95AAAD] Gilroy pb-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Ensures accurate record-keeping and faster resolutions.</p>
                            </div>
                        </div >
                        <div className='lg:order-none md:order-none sm:order-5 s:order-5 flex'>
                            <Image title="Hero image description" src={Banner1} className='px-6 self-center' alt="mask" />
                        </div>
                        <div className='lg:order-none md:order-none sm:order-7 s:order-7 flex'>
                            <Image title="Hero image description" src={Banner1} className='px-6 self-center' alt="mask" />
                        </div>
                        <div className='col-span-1 text-white lg:order-none md:order-none sm:order-8 s:order-8 mt-3'>
                            <p className='Brockmann text-xl'>Dealer Management Tools</p>
                            <p className='text-[#95AAAD] text-lg Gilroy py-4 pr-8'> Facilitate efficient dealer operations with features like:</p>
                            <p className='flex Gilroy ' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' />Dealer Approval Workflows</p>
                            <p className='text-[#95AAAD] Gilroy pb-3'>Quickly onboard or update dealer accounts.</p>
                            <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' />Order Management</p>
                            <p className='text-[#95AAAD] Gilroy pb-3'>Manage dealer-specific orders, contracts, and claims in one place.</p>
                            <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' /> Performance Insights</p>
                            <p className='text-[#95AAAD] Gilroy'>View dealer activity and performance metrics.</p>
                            <p className='text-white Gilroy pt-5'>Impact</p>
                            <div className='border-l border-white pl-4 mt-3'>
                                <p className='text-[#95AAAD] Gilroy py-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Enhances collaboration with dealers through streamlined operations.</p>
                                <p className='text-[#95AAAD] Gilroy pb-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Provides a centralized view of dealer activities for better decision-making.</p>
                                <p className='text-[#95AAAD] Gilroy pb-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Ensures transparency in claims and contract handling.</p>
                            </div>
                        </div >
                        <div className='col-span-1 lg:order-none md:order-none sm:order-10 s:order-10 text-white mt-3'>
                            <p className='Brockmann text-xl'>Reporting and Insights</p>
                            <p className='text-[#95AAAD] text-lg Gilroy py-4 pr-8'>Generate comprehensive reports to analyze performance across warranty operations:</p>
                            <p className='flex Gilroy ' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' />Claims Reporting</p>
                            <p className='text-[#95AAAD] Gilroy pb-3'>View claims by type, dealer, or product category.</p>
                            <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2' /> Sales Reports</p>
                            <p className='text-[#95AAAD] Gilroy pb-3'>Track order volumes and revenue trends.</p>
                            <p className='flex Gilroy' > <Image title="Hero image description" src={Mask} alt="mask" className='pr-2 self-start' />Custom Dashboards</p>
                            <p className='text-[#95AAAD] Gilroy'>Tailored visualizations to monitor KPIs.</p>
                            <p className='text-white Gilroy pt-5'>Impact</p>
                            <div className='border-l border-white pl-4 mt-3'>
                                <p className='text-[#95AAAD] Gilroy py-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Supports data-driven decisions with actionable insights.</p>
                                <p className='text-[#95AAAD] Gilroy pb-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Identifies bottlenecks and areas for improvement.</p>
                                <p className='text-[#95AAAD] Gilroy pb-3 flex'><Image title="Hero image description" src={Mask1} alt="mask" className='pr-2 self-center' /> Ensures better alignment of warranty operations with business goals.</p>
                            </div>
                        </div >
                        <div className='lg:order-none md:order-none sm:order-9 s:order-9 flex'>
                            <Image title="Hero image description" src={Banner1} className='px-6 self-center' alt="mask" />
                        </div>

                    </div >
                </div >
                <div id='contactUs'></div>
                <div className='py-8 w-large mx-auto'>
                    <Contact />
                </div>

                <div className='w-large mx-auto'>
                    <div className='lg:flex md:block sm:block bg-[#04292B] justify-center text-white p-12 mx-8'>
                        <div className='lg:w-[50%] md:w-full sm:w-full'>
                            <p className='Gilroy text-3xl text-[#95AAAD] lg:text-left md:text-center sm:text-center'>Your <span className='text-white'> warranty <br /> transformation begins now. </span> <br />  Let us simplify, automate, and <br /> elevate your operations.</p>
                        </div>
                        <p className='self-center Gilroy text-[#95AAAD] lg:w-[50%] md:w-full sm:w-full lg:text-right lg:pt-0 md:pt-5 sm:pt-5 md:text-center sm:text-center'>Let us know if you'd like any further adjustments!</p>
                    </div>
                </div >

                <Footer />
            </div >
        </>

    )
}


