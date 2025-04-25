import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { useEffect, useState } from "react";
import Input from '@/components/input';
import { RotateLoader } from "react-spinners";
import contactImage from '@/public/assets/images/ContactUs.png'
import Phone from '@/public/assets/images/Phone.png'
import Email from '@/public/assets/images/Email.png'
import Address from '@/public/assets/images/address11.png'
import close from '@/public/assets/images/active.svg';
import Image from 'next/image'
import Head from 'next/head'

function ContactUs() {
    const [showButton, setShowButton] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [text, setText] = useState("");
    const [emailError, setEmailError] = useState("");
    const [loading, setLoading] = useState(false);
    const [phoneError, setPhoneError] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [categorys, setCategorys] = useState({
        CodeWarranty_Catalog: false,
        CodeWarranty_Warranty: false,
        CodeWarranty_Manual: false,
        CodeWarranty_Desk: false,
        CodeWarranty_RMS: false
    });

    useEffect(() => {
        console.log(countryCode)
        const fetchCountryCode = async () => {
            try {
                console.log("Fetching IP address...");

                // Get the IP address
                const ipResponse = await fetch("https://api.ipify.org?format=json");
                const ipData = await ipResponse.json();
                const ipAddress = ipData.ip;
                console.log("IP Address:", ipAddress);

                // Get country code using IP
                const geoResponse = await fetch(`https://ipwho.is/${ipAddress}`);
                const geoData = await geoResponse.json();
                console.log("Geolocation Data:", geoData);

                if (geoData.success) {
                    setCountryCode(geoData.country_code.toLowerCase());
                } else {
                    console.error("Error fetching country code:", geoData.message);
                }
            } catch (error) {
                console.error("Error fetching IP or country code:", error);
            }
        };

        fetchCountryCode();
        console.log("Country Code Set:", countryCode);
    }, []);

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

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailValue)) {
            setEmailError("Invalid email Format");
        } else {
            setEmailError("");
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCategorys((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handlePhoneChange = (e) => {
        console.log(e.target.value)
        let digitsOnly = e.target.value.replace(/\D/g, "");



        setPhoneNumber(digitsOnly);

        setPhoneError("");

    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (emailError || phoneError) {
            setShow(true);
            setText("Please fix the validation errors before submitting.");
            setTimeout(() => {
                setText("");
            }, 4000);
            return;
        }

        try {
            // Fetch the IP address
            let ipAddress = null;
            try {
                const ipResponse = await fetch("https://api.ipify.org?format=json");
                const ipData = await ipResponse.json();
                ipAddress = ipData.ip;
            } catch (error) {
                console.warn("Failed to fetch IP address:", error);
            }

            // Get the site URL
            const siteURL = window.location.href;

            // Attempt to get the location
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    // If location is granted, include it in the payload
                    const payload = {
                        firstName,
                        lastName,
                        email,
                        phoneNumber,
                        description,
                        products: Object.keys(categorys).filter((key) => categorys[key]),
                        siteURL,
                        ipAddress, // Send IP when location is allowed
                        server: "codewarranty",
                    };

                    console.log("Payload with IP:", payload);
                    await sendRequest(payload);
                },
                async (error) => {
                    console.warn("Location access denied:", error);

                    // If location is denied, omit the IP from the payload
                    const payload = {
                        firstName,
                        lastName,
                        email,
                        phoneNumber,
                        description,
                        products: Object.keys(categorys).filter((key) => categorys[key]),
                        siteURL,
                        server: "codewarranty",
                    };

                    console.log("Payload without IP:", payload);
                    await sendRequest(payload);
                }
            );
        } catch (error) {
            console.error("Error occurred while sending message:", error);
            setShow(true);
            setText("An error occurred. Please try again later.");
            setTimeout(() => {
                setText("");
            }, 4000);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    };

    // Helper function to send the request
    const sendRequest = async (payload) => {
        try {
            const response = await fetch("https://api.demo.codewarranty.com/api-v1/user/contact-us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            console.log("API response status:", response.status);
            if (!response.ok) {
                const errorDetails = await response.json();
                console.log("API error response:", errorDetails);
                setShow(true);
                setText(errorDetails.message);
                return;
            }

            console.log("Message sent successfully!");
            setShow(true);
            setText("Message sent successfully!");
            setTimeout(() => {
                setText("");
            }, 10000);

            // Clear form fields
            setFirstName("");
            setLastName("");
            setEmail("");
            setDescription("");

        } catch (error) {
            console.error("Error sending request:", error);
            setShow(true);
            setText("An error occurred. Please try again later.");
            setTimeout(() => {
                setText("");
            }, 4000);
        }
    };
    return (
        <>
            <Head>
                <link rel="canonical" href="https://codewarranty.com/contact-us" />
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
            <div>
                <div className='bg-[#002025] bg-headerBackground1 bg-contain bg-no-repeat'>
                    <div className='w-large mx-auto'>
                        <Header />
                        <div className='grid grid-cols-12 gap-0 pb-8 pt-16'>
                            <div className='col-span-1'></div>
                            <div className='lg:col-span-10 md:col-span-12 s:col-span-12 pt-5 px-6'>
                                <div className='grid grid-cols-12 gap-2'>
                                    <div className='col-span-12'>
                                        <p className='text-[#00FFFC] Gilroy uppercase mb-3'>Get In Touch With CodeWarranty</p>
                                        <h1 className=' w-full mx-auto text-left text-white lg:text-[65px] md:text-[50px] sm:text-[47px] s:text-[47px] leading-none	Brockmann'>Discover How CodeWarranty  <br /> Can Empower Your Business</h1>

                                    </div>
                                </div>

                                {/* <Image title="Hero image description" src={Banner} alt="banner" className='mx-auto' /> */}
                            </div>
                            <div className='col-span-1'></div>
                        </div>
                        <div className='grid grid-cols-12 gap-0 pb-8 pt-16 '>
                            <div className='lg:col-span-5 md:col-span-12 s:col-span-12'>
                                <Image src={contactImage} title="Hero image description" className='w-75 lg:ml-auto md:mx-auto sm:mx-auto s:mx-auto ' alt='Contact Us' />
                            </div>
                            <div className='col-span-1'></div>
                            <div className='lg:col-span-6 md:col-span-12 s:col-span-12 self-center'>
                                <div className='flex my-4'>
                                    <div className='bg-number bg-no-repeat bg-cover flex mb-5 rounded-ss-[35px] pr-1 rounded-ee-[10px]'>
                                        <p className='self-center text-2xl mx-auto Brockmann p-3'>01</p>
                                    </div>
                                    <div className='pl-4'>
                                        <p className='text-xl text-white Brockmann mb-1'>Fill this form</p>
                                        <p className='text-[#95AAAD] Gilroy'>Share your details with us, and our team will reach out within 48 hours to guide you through the next steps.</p>
                                    </div>
                                </div>
                                <div className='flex mb-4'>
                                    <div className='bg-number bg-no-repeat bg-cover flex mb-5 rounded-ss-[35px] rounded-ee-[10px]'>
                                        <p className='self-center text-2xl mx-auto Brockmann p-3'>02</p>
                                    </div>
                                    <div className='pl-4'>
                                        <p className='text-xl text-white Brockmann mb-1'>Schedule a free demo</p>
                                        <p className='text-[#95AAAD] Gilroy'>Our experts will walk you through the platForm, explaining its features and how it can address your specific needs.</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='bg-number bg-no-repeat bg-cover flex mb-5 rounded-ss-[35px] rounded-ee-[10px]'>
                                        <p className='self-center text-2xl mx-auto Brockmann p-3'>03</p>
                                    </div>
                                    <div className='pl-4'>
                                        <p className='text-xl text-white Brockmann mb-1'>Go live in 7 days</p>
                                        <p className='text-[#95AAAD] Gilroy'>Get up and running quickly! Our streamlined onboarding ensures your warranty operations are automated and optimized in just one week.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-large mx-auto'>
                        <div className='grid grid-cols-12 gap-3'>
                            <div className='lg:col-span-5 md:col-span-12 s:col-span-12 bg-[#0B3635] p-6 rounded-2xl flex'>
                                <div className='self-center'>
                                    <div className='grid grid-cols-12 gap-4 mb-4'>
                                        <div className='col-span-3 text-right'>
                                            <Image src={Phone} title="Hero image description" className='w-12 h-12 ml-auto' alt='Phone No Image' />
                                        </div>
                                        <div className='col-span-9'>
                                            <p className='text-xl text-[#fff] Brockmann'>Phone Number</p>
                                            <a href='tel:9041311724' className='text-base text-[#95AAAD] Gilroy'>+91 90413-11724</a>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-12 gap-4 mb-4'>
                                        <div className='col-span-3 text-right'>
                                            <Image src={Email} title="Hero image description" className='w-12 h-12 ml-auto' alt='Email Image' />
                                        </div>
                                        <div className='col-span-9'>
                                            <p className='text-xl text-[#fff] Brockmann'>Email</p>
                                            <a href='mailto:sales@codewarranty.com' className='text-base text-[#95AAAD] Gilroy'>sales@codewarranty.com </a>
                                            <a href='mailto:nikhil@codewarranty.com' className='text-base text-[#95AAAD] Gilroy'>nikhil@codewarranty.com </a>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-12 gap-4 mb-4'>
                                        <div className='col-span-3 text-right'>
                                            <Image src={Address} title="Hero image description" className='w-12 h-12 ml-auto' alt='Address Image' />
                                        </div>
                                        <div className='col-span-9'>
                                            <p className='text-xl text-[#fff] Brockmann'>Address</p>
                                            <a href='https://maps.app.goo.gl/fawJcT3PwSFb3o5s8' target='_blank' className='text-base text-[#95AAAD] Gilroy'>F-298, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:col-span-7 md:col-span-12 s:col-span-12'>
                                {loading ?
                                    <div className=" h-[400px] w-full flex py-5">
                                        <div className="self-center mx-auto">
                                            <RotateLoader color="#fff" />
                                        </div>
                                    </div> :
                                    <div className='bg-[#0B3635] p-6 rounded-2xl'>
                                        <form onSubmit={handleSubmit}>
                                            <div className='grid grid-cols-12 gap-4'>
                                                <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 s:col-span-12'>
                                                    <Input placeholder=''
                                                        type='text'
                                                        label='First Name'
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        value={firstName}
                                                    />
                                                </div>
                                                <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 s:col-span-12'>
                                                    <Input
                                                        type="text"
                                                        name="lastName"
                                                        required
                                                        label='Last Name'
                                                        placeholder=""
                                                        value={lastName}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                    />
                                                </div>
                                                <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 s:col-span-12'>
                                                    <Input placeholder=''
                                                        type="email"
                                                        name="email"
                                                        required
                                                        label='Email ID'
                                                        value={email}
                                                        onChange={(e) => handleEmailChange(e)} />
                                                    {emailError && (
                                                        <div className="text-sm text-red-600 ">
                                                            {emailError}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 s:col-span-12'>
                                                    <Input
                                                        placeholder=""
                                                        type="number"
                                                        name="phoneNumber"
                                                        label="Phone No."
                                                        required
                                                        minLength={9}
                                                        maxLength={10}
                                                        country={countryCode || "91"}  // Default to "us" if countryCode is not set
                                                        countryCodeEditable={false}
                                                        value={phoneNumber}
                                                        onChange={(e) => handlePhoneChange(e)}
                                                    />
                                                    {phoneError && (
                                                        <div className="text-sm text-red-600">{phoneError}</div>
                                                    )}
                                                </div>
                                                <div className='col-span-12'>
                                                    <div className="relative rounded-lg border bg-[#04292b] border-[#104649]">
                                                        <label
                                                            htmlhtmlFor="description"
                                                            className=" text-[#00FFFC] z-10 Brockmann text-sm absolute top-[-9px] left-4"
                                                        >
                                                            Description of inquiry
                                                        </label>
                                                        <textarea
                                                            id="description"
                                                            rows="3"
                                                            name="description"
                                                            value={description}
                                                            onChange={handleDescriptionChange}
                                                            placeholder=' '
                                                            maxLength={120}

                                                            className="resize-none  block px-4 pb-4 pt-4 w-full text-base placeholder-[#9ca3af] focus:placeholder-transparent  outline-none font-medium rounded-lg bg-[transparent] appearance-none peer  text-[#fff]"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                {show && (
                                                    <div className='col-span-12 '>
                                                        <p className="self-center pl-5 text-[#fff] my-3 text-lg">
                                                            {text}
                                                        </p>
                                                    </div>
                                                )}
                                                <div className='col-span-12 text-left py-4'>
                                                    <button type="submit" className='text-[#000] text-base bg-[#00FFFC] Brockmann rounded-lg px-12 py-4 uppercase'>Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='w-large mx-auto mt-12'>
                        {showButton && (
                            <button
                                onClick={scrollToTop}
                                className="fixed bottom-5 left-5 px-4 py-2 rounded-full shadow-lg "
                            >
                                <Image title="Hero image description" className="rotate-180" src={close} width={40} height={40} alt="Go To Up" />
                            </button>
                        )}

                        <a href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3TUE4miGSgGYkjSRA71gPaWzwLoUya5WDHu3IXW7Zt6nyC8VQW1SamtXC-W8Yig-01MGvDaoJp' target='_blank'
                            onClick={scrollToTop}
                            className="fixed bottom-5 Gilroy font-semibold leading-none right-5 text-center px-4 py-2 rounded-tl-[0px] rounded-tr-[20px] rounded-br-[0px] rounded-bl-[20px] shadow-[1px_1px_4px_0px_#504d4d] bg-[#00FFFC] text-black "
                        >Book <br />  Appointment
                        </a>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
