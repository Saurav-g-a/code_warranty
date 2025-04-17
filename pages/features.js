import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/header'
import Banner1 from '@/public/assets/images/video.png'
import aboutImage from '@/public/assets/images/Centralized.png'
import aboutImage1 from '@/public/assets/images/FeaturesBanner.png'
import aboutImage2 from '@/public/assets/images/Automated.png'
import Mask1 from '@/public/assets/images/Vector.png'
import How from '@/public/assets/images/CodeWarranty.png'
import team from '@/public/assets/images/nikImge.png'
import Team1 from '@/public/assets/images/Team1.png'
import Team2 from '@/public/assets/images/Team2.png'
import Team3 from '@/public/assets/images/Team3.png'
import Team4 from '@/public/assets/images/Team4.png'
import Team5 from '@/public/assets/images/Team5.png'
import arrow from '@/public/assets/images/teamarrow.png'
import 'react-multi-carousel/lib/styles.css';
import close from '@/public/assets/images/active.svg';
import Footer from '@/components/footer'
import CustomAccordion from '@/components/accordion'
import Contact from '@/components/contact'
import Carousel from 'react-multi-carousel';
import WithStyles from '@/components/withStyles';


function Features() {
    const [showButton, setShowButton] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
            setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
            setActiveIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
        }
    };

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

    const carouselData = [
        {
            headline: (
                <>
                    Returns & Repairs <br /> Management (RMA)
                </>
            ),
            description:
                "Handle the logistics of product returns or repairs with ease. When a claim is approved, CodeWarranty can automatically generate a Return Merchandise Authorization (RMA) and shipping labels, or schedule a service visit. Track the product’s journey through repair, and update the customer at each step.",
            description2:
                "By linking claims to RMA and repair workflows, nothing falls through the cracks. You’ll reduce turnaround time on fixes/replacements and keep customers informed, which improves transparency and satisfaction. For industries, this means less downtime for your end-users; for consumer electronics, it means swift replacements and fewer calls to support."
        },
        {
            headline: (
                <>
                    Whitelabeling & Brand <br /> Customization
                </>
            ),
            description:
                "Make CodeWarranty look and feel like an extension of your brand. Our platform supports full whitelabeling, allowing you to customize everything – logo, colors, domain, and even the customer portal – to match your corporate identity.",
            description2:
                "Deliver a seamless, branded experience to customers and partners without compromising functionality. Whether you're a manufacturer, OEM, or distributor, you can maintain consistency across your digital presence while using our robust backend platform."
        },
        {
            headline: (
                <>
                    Analytics & Quality <br /> Insights
                </>
            ),
            description:
                "Leverage powerful analytics to turn warranty data into actionable insights. CodeWarranty’s dashboard and reporting suite lets you monitor key metrics – claim rates by product, average resolution time, cost per claim, and more – in real time. Visual charts and reports help you spot trends, such as a spike in claims for a certain batch or a particular issue recurring across customers.",
            description2:
                "Benefit: These insights create a feedback loop to engineering and quality teams. For instance, if analytics show 30% of claims on an electronics device are due to one faulty capacitor, your team can initiate a design change or recall. By identifying issues early, you improve product quality and reduce future claims. Analytics also help in forecasting warranty reserves and making data-driven decisions to lower warranty costs."
        },
        {
            headline: (
                <>
                    Custom Policy <br /> Management
                </>
            ),
            description:
                "Make CodeWarranty look and feel like an extension of your brand. Our platform supports full whitelabeling, allowing you to customize everything – logo, colors, domain, and even the customer portal – to match your corporate identity.",
            description2:
                "Deliver a seamless, branded experience to customers and partners without compromising functionality. Whether you're a manufacturer, OEM, or distributor, you can maintain consistency across your digital presence while using our robust backend platform."
        },
        {
            headline: (
                <>
                    Whitelabeling & Brand <br /> Customization
                </>
            ),
            description:
                "Configure warranty terms and business rules to fit different products or regions. CodeWarranty lets you set up multiple warranty types (standard warranty, extended warranty, service contracts) with varying durations, coverages, and conditions. You can automate rules – e.g., offer a 2-year extended warranty for an EV battery if certain maintenance actions are logged, or handle goodwill exceptions.",
            description2:
                "This flexibility means your sales and product teams can create tailored warranty offerings (a huge plus for high-value products like solar installations or commercial electronics) without creating administrative burden. The system ensures each claim is evaluated against the correct policy terms, maintaining fairness and consistency."
        },
        {
            headline: (
                <>
                    Servicer Repair <br /> Portal
                </>
            ),
            description:
                "Empower your repair partners with a dedicated portal. Servicers can log in to view assigned cases, access customer and product information, update repair statuses, and upload supporting documentation (like photos or repair notes). They can also request parts, schedule appointments, and manage returns.",
            description2:
                "Streamlines coordination between manufacturers and service providers, ensuring faster repairs and fewer errors. Having a centralized portal means no back-and-forth via phone or email, and gives manufacturers full visibility into service performance."
        },
        {
            headline: (
                <>
                    Enhanced Customer <br /> Experience
                </>
            ),
            description:
                "Turn warranty service into a competitive advantage. CodeWarranty keeps customers in the loop with automated updates (“Your claim has been approved – part is shipped!”) and offers a convenient user-friendly interface for them to initiate and track claims. It also supports multi-channel communications – customers can receive notifications via email, and your support reps can manage all warranty conversations in one place.",
            description2:
                "Benefit: By making warranty service hassle-free, you increase customer satisfaction and loyalty. Happy customers are more likely to buy from you again or recommend your brand, effectively making your warranty not just a cost center but a loyalty driver. A seamless claims experience also reduces inbound calls and confusion, freeing your team to focus on complex cases rather than status inquiries."
        }
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };



    return (
        <>
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
                    <div className='grid grid-cols-12 gap-0 pb-8 pt-16 px-8'>
                        <div className='lg:col-span-7 md:col-span-12 s:col-span-12'>
                            <p className='text-[#00FFFC] Gilroy uppercase my-3'>Platform Features & Benefits</p>
                            <h1 className=' w-full mx-auto text-left text-white leading-[50px] lg:text-[40px] md:text-[30px] sm:text-[24px] s:text-[24px] Brockmann'>Efficient, End-to-End <br /> Warranty Management
                                <br /> for   <span className='opacity-50'>Modern Manufacturers</span></h1>
                            <p className='pr-12 text-[#95AAAD] Gilroy mt-4'>CodeWarranty is a cloud-based warranty <br />
                                management software built to handle the entire <br />
                                warranty lifecycle for manufacturers. Whether you produce <br /> EV batteries, solar panels, or electronic devices, our platform <br /> provides all the tools you need to manage warranties <br />
                                proactively and effortlessly. </p>
                        </div>
                        <div className='lg:col-span-5 md:col-span-12 s:col-span-12'>
                            <Image src={aboutImage1} title="Hero image description" className='w-full' alt='about Us' />
                        </div>
                    </div>
                </div>

                <div className='py-8 w-large mx-auto'>
                    <div className='grid grid-cols-2 gap-4 Gilroy'>
                        <div className='lg:col-span-1 md:col-span-2 s:col-span-2'>
                            <div className='bg-[#052B2D] rounded-xl px-16 py-8 h-full'>
                                <Image src={aboutImage} title="Hero image description" className='w-50 mb-4' alt='about Us' />
                                <p className='text-[#00FFFC] text-[24px] mb-3 Brockmann'>Centralized Product <br /> Registration</p>
                                <p className='text-[#95AAAD]'>Easily capture and record warranty registrations for every product. Our platform supports QR codes and online forms for instant registration at point of sale or installation (no more mailed paper cards). This means you’ll start warranty coverage on time with accurate data.
                                    <br />
                                    <br />
                                    Benefit: <span className='text-[#5A7377]'> Build a rich database of customers and product data from day one, enabling better support and targeted product updates. Having all warranty info in one place reduces errors and gives your team a single source of truth for warranty status. </span>
                                </p>
                            </div>
                        </div>
                        <div className='lg:col-span-1 md:col-span-2 s:col-span-2'>
                            <div className='bg-[#052B2D] rounded-xl px-16 py-8 h-full'>
                                <Image src={aboutImage2} title="Hero image description" className='w-50 mb-4' alt='about Us' />
                                <p className='text-[#00FFFC] text-[24px] mb-3 Brockmann'>Automated Claims <br /> Registration</p>
                                <p className='text-[#95AAAD]'>Streamline how claims are submitted, validated, and resolved. CodeWarranty provides a self-service claims portal for customers and dealers, guided claim submission (with prompts to upload photos, proof-of-purchase, etc.), and an auto-validate claims against warranty terms.
                                    <br />
                                    <br />
                                    Benefit: <span className='text-[#5A7377]'> Your warranty team spends less time on manual review and paperwork – the system automatically catches non-eligible claims (out-of-warranty, improper use) and flags high-priority issues. Valid claims can trigger instant authorizations for repair or replacement, cutting down cycle time dramatically. Faster claims processing leads to happier customers and lower support costs. </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className='py-12 text-white opacity-50 Gilroy text-center'> <b> CodeWarranty </b>  <span className=''> covers every aspect of the warranty lifecycle, similar to leading platforms. Our features handle <br /> registration, claims, returns, supplier recovery, and analytics in one integrated system (as illustrated above), ensuring <br /> no stakeholder – customer, dealer, or supplier – is left out of the loop. </span></p>
                </div>
                <div>

                    <div className='grid grid-cols-1 gap-4 Gilroy slider lg:block md:block relative sm:hidden s:hidden'>
                        <Carousel
                            ref={carouselRef}
                            responsive={responsive}
                            centerMode
                            infinite
                            arrows={false}
                            draggable
                            swipeable
                            autoPlaySpeed={3000}
                        // afterChange={handleAfterChange}
                        >
                            {carouselData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 ease-in-out px-4 ${index == activeIndex
                                        ? 'blur-none opacity-100 scale-100'
                                        : 'blur-sm opacity-60 scale-95'
                                        }`}
                                >
                                    <WithStyles
                                        headline={item.headline}
                                        description={item.description}
                                        description2={item.description2}
                                    />
                                </div>
                            ))}
                        </Carousel>
                        <button className='absolute left-[10%] top-[40%] self-center' onClick={handlePrev}> <Image title="Hero image description" className="rotate-90" src={close} width={40} height={40} alt="close" /></button>
                        <button className='absolute right-[10%] top-[40%] self-center' onClick={handleNext}><Image title="Hero image description" className="rotate-[-93deg]" src={close} width={40} height={40} alt="close" /></button>
                    </div>
                    <div className='grid grid-cols-1 gap-4 Gilroy slider relative lg:hidden md:hidden sm:block'>
                        <Carousel
                            ref={carouselRef}
                            responsive={responsive}

                            infinite
                            arrows={false}
                            draggable
                            swipeable
                            autoPlaySpeed={3000}
                        // afterChange={handleAfterChange}
                        >
                            {carouselData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 ease-in-out px-4 ${index == activeIndex
                                        ? 'blur-none opacity-100 scale-100'
                                        : 'blur-sm opacity-60 scale-95'
                                        }`}
                                >
                                    <WithStyles
                                        headline={item.headline}
                                        description={item.description}
                                        description2={item.description2}
                                    />
                                </div>
                            ))}
                        </Carousel>
                        <button className='absolute left-[1%] top-[40%] self-center' onClick={handlePrev}> <Image title="Hero image description" className="rotate-90" src={close} width={40} height={40} alt="close" /></button>
                        <button className='absolute right-[1%] top-[40%] self-center' onClick={handleNext}><Image title="Hero image description" className="rotate-[-93deg]" src={close} width={40} height={40} alt="close" /></button>
                    </div>
                </div>

                <div className='py-8 w-large mx-auto'>
                    <p className='text-3xl Brockmann text-[#00FFFC] text-center mb-8'>Frequently Asked Questions</p>
                    <div className='lg:px-16 md:px-8 sm:px-2'>
                        <CustomAccordion items={accordionItems} />
                    </div>
                </div >

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
                        className="fixed bottom-5 right-5 px-4 py-2 rounded-full shadow-lg "
                    >
                        <Image title="Hero image description" className="rotate-180" src={close} width={40} height={40} alt="close" />
                    </button>
                )}
                <Footer />
            </div >
        </>
    )
}

export default Features
