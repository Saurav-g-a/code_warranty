"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/logo.png"; 
import Menu from "@/public/assets/images/menu.png";
import { useRouter } from "next/router";

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
  return (
    <>
      <div className="py-6">
        <div className="grid lg:grid-cols-12 md:grid-cols-7 sm:grid-cols-7 s:grid-cols-7 gap-4">
          <div className="col-span-3">
            {/* Logo */}
            <Link href="/">
              <Image src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="col-span-5 lg:block md:hidden sm:hidden s:hidden"></div>
          <div className="col-span-4">
          <div className="md:flex sm:hidden s:hidden lg:w-[77%] md:w-full sm:w-full ml-auto justify-end">
          <a
        href="/"
        className={`${
          currentPath === "/" ? "text-[#00FFFC] bg-[#104649]" : "text-[#95AAAD]"
        } hover:text-[#00FFFC] hover:bg-[#104649] border-[#104649] px-5 py-3 rounded-s-[7px] border`}
      >
        Home
      </a>
      <a
        href="/blogs"
        className={`${
          currentPath === "/blogs" ? "text-[#00FFFC] bg-[#104649]" : "text-[#95AAAD]"
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
              <Image src={Menu} alt="Menu" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
