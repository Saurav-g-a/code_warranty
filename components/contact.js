"use client";
import React, { useState } from "react";
import Input from './input'

function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [text, setText] = useState("");
    const [emailError, setEmailError] = useState("");
    const [category, setCategory] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [show, setShow] = useState(false);

    const [categorys, setCategorys] = useState({
        CodeWarranty_Catalog: false,
        CodeWarranty_Warranty: false,
        CodeWarranty_Manual: false,
        CodeWarranty_Desk: false,
        CodeWarranty_RMS: false
    });


    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailValue)) {
            setEmailError("Invalid email htmlFormat");
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
        let digitsOnly = e.target.value.replace(/\D/g, "");

        // Limit to 10 digits
        if (digitsOnly.length > 10) {
            digitsOnly = digitsOnly.slice(0, 10);
        }

        setPhoneNumber(digitsOnly);

        if (digitsOnly.length !== 10) {
            setPhoneError("Phone number must be 10 digits.");
        } else {
            setPhoneError("");
        }
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (emailError || phoneError) {
            setShow(true);
            setText("Please fix the validation errors behtmlFore submitting.");
            setTimeout(() => {
                setText("");
            }, 4000);
            return;
        }

        try {
            // Fetch the IP address
            const ipResponse = await fetch("https://api.ipify.org?htmlFormat=json");
            const ipData = await ipResponse.json();
            const ipAddress = ipData.ip;

            // Get the site URL
            const siteURL = window.location.href;

            // Get the location
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };

                    const payload = {
                        firstName,
                        lastName,
                        email,
                        phoneNumber,
                        description,
                        products: Object.keys(categorys).filter((key) => categorys[key]),
                        siteURL,
                        ipAddress,
                        server: "codewarranty",
                    };

                    console.log(payload);
                    const response = await fetch(
                        "https://api.demo.codewarranty.com/api-v1/user/contact-us",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(payload),
                        }
                    );

                    if (!response.ok) {
                        const errorDetails = await response.json();
                        setShow(true);
                        setText(errorDetails.message);
                        setTimeout(() => {
                            setText("");
                        }, 10000);
                        return;
                    }


                    setShow(true);
                    setText("Message sent successfully!");
                    setTimeout(() => {
                        setText("");
                    }, 10000);

                    // Clear htmlForm fields
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhoneNumber("");
                    setDescription("");
                    setCategorys({
                        CodeWarranty_Catalog: false,
                        CodeWarranty_Warranty: false,
                        CodeWarranty_Manual: false,
                        CodeWarranty_Desk: false,
                        CodeWarranty_RMS: false
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setShow(true);
                    setText("Unable to retrieve location.");
                    setTimeout(() => {
                        setText("");
                    }, 4000);
                }
            );
        } catch (error) {
            console.error("Error occurred while sending message:", error);
            setShow(true);
            setText("An error occurred. Please try again later.");
            setTimeout(() => {
                setText("");
            }, 4000);
        }
    };
    return (
        <div>

            <div className=' mx-auto'>
                <h3 className='text-[#95AAAD] Brockmann text-[40px] text-center'>Schedule a <span className='text-[#00FFFC]'> Free Demo</span>, and <span className='text-[#8BC542]'> Go Live  in just 7 days </span> </h3>
            </div>
            <p className='text-[#95AAAD] text-center Gilroy py-6'>Experience Seamless Warranty Management Like Never BehtmlFore</p>
            <p className='Brockmann text-white text-2xl text-center'>How we can help you?</p>
            <div className='grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-4 my-5'>
                <div className='col-span-4'>
                    <div className='relative p-12 border border-[#104649] rounded-lg'>
                        <div className='text-[#00FFFC] bg-[#104649] py-3 px-4 absolute top-0 left-0 rounded-ss-lg rounded-ee-lg'>
                            <p>01</p>
                        </div>
                        <p className='text-white Brockmann text-lg'>Fill this htmlForm</p>
                        <p className='text-[#8E8E8E] Gilroy lg:pr-10 md:pr-3 sm:pr-0'>Share your details with us, and  our team will reach out within  48 hours to guide you through  the next steps.</p>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='relative p-12 border border-[#104649] rounded-lg'>
                        <div className='text-[#00FFFC] bg-[#104649] py-3 px-4 absolute top-0 left-0 rounded-ss-lg rounded-ee-lg'>
                            <p>02</p>
                        </div>
                        <p className='text-white Brockmann text-lg'>Schedule a free demo</p>
                        <p className='text-[#8E8E8E] Gilroy lg:pr-10 md:pr-3 sm:pr-0'>Our experts will walk you through  the plathtmlForm, explaining its features  and how it can address your  specific needs.</p>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='relative p-12 border border-[#104649] rounded-lg'>
                        <div className='text-[#00FFFC] bg-[#104649] py-3 px-4 absolute top-0 left-0 rounded-ss-lg rounded-ee-lg'>
                            <p>03</p>
                        </div>
                        <p className='text-white Brockmann text-lg'>Go live in 7 days</p>
                        <p className='text-[#8E8E8E] Gilroy'>Get up and running quickly! Our streamlined onboarding ensures your warranty operations are automated and optimized in just one week.</p>
                    </div>
                </div>
            </div>
            <htmlForm onSubmit={handleSubmit}>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 s:col-span-12'>
                        <Input placeholder='Enter'
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
                            placeholder="Enter"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 s:col-span-12'>
                        <Input placeholder='Enter'
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
                        <Input placeholder='Enter'
                            type="number"
                            name="phoneNumber"
                            label='Phone No.'
                            required
                            minLength={9}
                            maxLength={10}
                            value={phoneNumber}
                            onChange={(e) => handlePhoneChange(e)}
                        />
                        {phoneError && (
                            <div className="text-sm text-red-600">{phoneError}</div>
                        )}
                    </div>
                    <div className='col-span-12'>
                        <p className='Gilroy text-white'>Product Name*</p>
                        <div className='grid lg:grid-cols-12 md:grid-cols-9 sm:grid-cols-6 gap-0 mt-4'>
                            <div className='col-span-3'>
                                <div className=''>
                                    <input type="checkbox" id="product1" name="CodeWarranty_Catalog"
                                        checked={categorys.CodeWarranty_Catalog}
                                        onChange={handleCheckboxChange} className='accent-[#104649] bg-transparent' />
                                    <label htmlFor="product1" className='text-[#00FFFC] Gilroy'> CodeWarranty Catalog</label>
                                </div>
                            </div>
                            <div className='col-span-3'>
                                <div className=''>
                                    <input type="checkbox" id="product2" name="CodeWarranty_Warranty"
                                        checked={categorys.CodeWarranty_Warranty}
                                        onChange={handleCheckboxChange} className='accent-[#104649] bg-transparent' />
                                    <label htmlFor="product2" className='text-[#00FFFC] Gilroy'> CodeWarranty Warranty</label>
                                </div>
                            </div>
                            <div className='col-span-3'>
                                <div>
                                    <input type="checkbox" id="product3" name="CodeWarranty_Manual"
                                        checked={categorys.CodeWarranty_Manual}
                                        onChange={handleCheckboxChange} className='accent-[#104649] bg-transparent' />
                                    <label htmlFor="product3" className='text-[#00FFFC] Gilroy'> CodeWarranty Manual</label>
                                </div>
                            </div>
                            <div className='col-span-3'></div>
                        </div>
                        <div className='grid lg:grid-cols-12 md:grid-cols-9 sm:grid-cols-6 gap-0 mb-4'>
                            <div className='col-span-3'>
                                <div className=''>
                                    <input type="checkbox" id="product4" name="CodeWarranty_Desk"
                                        checked={categorys.CodeWarranty_Desk}
                                        onChange={handleCheckboxChange} className='accent-[#104649] bg-transparent' />
                                    <label htmlFor="product4" className='text-[#00FFFC] Gilroy'> CodeWarranty Desk</label>
                                </div>
                            </div>
                            <div className='col-span-3'>
                                <div >
                                    <input type="checkbox" id="product5" name="CodeWarranty_RMS"
                                        checked={categorys.CodeWarranty_RMS}
                                        onChange={handleCheckboxChange} className='accent-[#104649] bg-transparent' />
                                    <label htmlFor="product5" className='text-[#00FFFC] Gilroy'> CodeWarranty RMS</label>
                                </div>
                            </div>
                            <div className='col-span-3'></div>
                            <div className='col-span-3'></div>


                        </div>
                    </div>
                    <div className='col-span-12'>
                        <div className="relative rounded-lg border border-[#104649]">
                            <label
                                htmlhtmlFor="description"
                                className=" text-[#00FFFC] Brockmann text-sm absolute top-4 left-4"
                            >
                                Description of inquiry
                            </label>
                            <textarea
                                id="description"
                                rows="4"
                                name="description"
                                value={description}
                                onChange={handleDescriptionChange}
                                maxLength={150}
                                className="resize-none block px-4 pb-4 pt-8 w-full text-base outline-none font-medium rounded-lg bg-[transparent] appearance-none peer placeholder-[#fff] text-[#fff]"
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
                    <div className='col-span-12 text-center py-10'>
                        <button type="submit" className='text-[#000] text-base bg-[#00FFFC] Brockmann rounded-lg px-12 py-4 uppercase'>Send Message</button>
                    </div>
                </div>
            </htmlForm>
        </div >
    )
}

export default Contact
