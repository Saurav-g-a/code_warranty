"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/logo.png";
import Menu from "@/public/assets/images/menu.png";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import cross from '@/public/assets/images/cross.svg';

function Header() {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 50;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const openDiv = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.smartlook||(function(d) {
              var o=smartlook=function(){o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '361f09aeaedbeba64bb124477f3d60ee4596f29c', {region: 'eu' });
          `,
        }}
      />
      <div className="py-6">
        <div className="grid lg:grid-cols-12 md:grid-cols-7 sm:grid-cols-7 s:grid-cols-7 gap-4">
          <div className="col-span-3">
            {/* Logo */}
            <Link href="/">
              <Image title="Hero image description" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="col-span-5 lg:block md:hidden sm:hidden s:hidden"></div>
          <div className="col-span-4">
            <div className="md:flex sm:hidden s:hidden lg:w-[77%] md:w-full sm:w-full ml-auto justify-end">
              <a
                href="/"
                className={`${currentPath === "/" ? "text-[#00FFFC] bg-[#104649]" : "text-[#95AAAD]"
                  } hover:text-[#00FFFC] hover:bg-[#104649] border-[#104649] px-5 py-3 rounded-s-[7px] border`}
              >
                Home
              </a>
              <a
                href="/blogs"
                className={`${currentPath === "/blogs" ? "text-[#00FFFC] bg-[#104649]" : "text-[#95AAAD]"
                  } hover:text-[#00FFFC] hover:bg-[#104649] border-[#104649] px-5 py-3 border`}
              >
                Blogs
              </a>
              <a
                className="text-[#95AAAD] cursor-pointer border-[#104649] hover:text-[#00FFFC] hover:bg-[#104649] border px-4 py-3 rounded-e-[7px]"
                onClick={() => {
                  // Scroll to contact section (define `scrollToSection` function in your component)
                  scrollToSection("contactUs");
                }}
              >
                Contact Us
              </a>
            </div>

            <div className="md:hidden sm:block s:block ml-auto max-w-fit">
              {/* Menu Icon */}
              <Image title="Hero image description" onClick={openDiv} src={Menu} alt="Menu" />
            </div>

            {isVisible && (
              <div className='fixed top-0 left-0 w-full h-screen z-50 bg-[#002025] backdrop-blur-2xl'>
                <Image src={cross} onClick={openDiv} className='ml-5 mt-5' alt='cross' />
                <div className='mt-8  w-full text-center  mx-auto'>
                  <Link href='/'>
                    <Image src={Logo} className="w-[158px] mx-auto mb-3" alt='logo' />
                  </Link>

                  <div className='text-center mx-auto py-3 mt-5 text-[#4E4D69] cursor-pointer'><a href="/" className=' text-[#4E4D69] cursor-pointer' >Home</a> </div>
                  <div className='text-center mx-auto py-3 text-[#4E4D69] cursor-pointer'><a href="/blogs" className=' text-[#4E4D69] cursor-pointer' >Blogs</a></div>
                  <div className='text-center mx-auto py-3 text-[#4E4D69] cursor-pointer'><a className=' text-[#4E4D69] cursor-pointer' onClick={() => {
                    // Scroll to contact section (define `scrollToSection` function in your component)
                    scrollToSection("contactUs");
                    setIsVisible(!isVisible);
                  }} >Contact Us</a></div>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
