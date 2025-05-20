import Header from "@/components/header";
import React, { useEffect, useState } from "react";
import Arrow from "@/public/assets/images/blog/arrow.png"
import Image from "next/image";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import Head from "next/head";
import close from '@/public/assets/images/active.svg';
import Link from "next/link";
import Script from "next/script";

const BlogPage = ({ blogs, error }) => {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();
  // console.log(blogs)
  if (error) {
    router.push('/404');
    return null;
  }
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
      <Head>  <title>{'Blog'}</title>
        <meta name="description" content={"Key Features to Look for in a Warranty Management Platform"} />
        <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
        <link rel="canonical" href={`https://codewarranty.com/blogs`} />
        <link rel="icon" type="image/x-icon" href="./assets/images/fabIcon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="./assets/images/fabIcon.png" />
      </Head>
      <div className='bg-[#002025] bg-headerBackground bg-contain bg-no-repeat'>
        <div className='w-large mx-auto'>
          <Header />
          <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 s:grid-cols-6 gap-4 py-4'>
            <div className='col-span-3 lg:block md:hidden sm:hidden s:hidden'></div>
            <div className='col-span-6'>
              <h1 className='text-[#95AAAD] Brockmann text-3xl text-center'><span className='text-[#00FFFC]'> Blogs </span></h1>
              {/* <p className='text-[#95AAAD] text-center Gilroy py-6 w-2/3 mx-auto'>Keeping you up to date with the latest updates, announcements, and articles concerning warranty technology and the industry.</p> */}
            </div>
            <div className='col-span-3 lg:block md:hidden sm:hidden s:hidden'></div>
          </div>
          <div className="container mx-auto p-4">
            {/* <h1 className="text-2xl font-bold mb-4">Blog List</h1> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8">
              {blogs.length === 0 ? (
                <div className="text-center">No blogs available.</div>
              ) : (
                <>
                  {blogs.map((blog) => (
                    <div
                      key={blog._id} // Assuming MongoDB's default `_id` is used
                      className=""
                    >
                      <Link href={`/blogs/${blog.paramUrl}`} passHref>
                        <div className="bg-[#082B30] p-4 rounded-[14px] h-full relative">
                          {/* Ensure bannerImage is a valid URL */}
                          {blog.thumbnailImage && (
                            <Image
                              src={blog.thumbnailImage}
                              alt={blog.title}
                              width={500} // Add width and height for Image
                              height={300}
                              className="w-full"
                            />
                          )}
                          <p className="text-[#00FFFC] Brockmann mt-8">
                            {new Date(blog.uploadDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                          <h2 className="text-[#fff] text-xl Brockmann mb-3 font-[500]">
                            {blog.title || "Default Blog Title"}
                          </h2>
                          <p className="text-[#95AAAD] Gilroy leading-tight mb-3 pr-8">
                            {blog.extractDescription || "Default description for the blog..."}
                          </p>
                          <div className="my-5 opacity-0">
                            {/* <Link href={`/blogs/${blog.paramUrl}`} passHref> */}
                            <Image title="Hero image description" src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />

                            {/* </Link> */}
                          </div>
                          <div className="absolute bottom-6">
                            {/* <Link href={`/blogs/${blog.paramUrl}`} passHref> */}
                            <Image title="Hero image description" src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />

                            {/* </Link> */}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
                // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              )}
            </div>
          </div>

          <div className='py-8'>
            <div id='contactUs'></div>
            <Contact />
          </div>
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
            className="fixed bottom-5 Gilroy leading-none font-semibold left-5 text-center px-4 py-2 rounded-tl-[0px] rounded-tr-[20px] rounded-br-[0px] rounded-bl-[20px] shadow-[1px_1px_4px_0px_#504d4d] bg-[#00FFFC] text-black "
          >Book <br />  Appointment
          </a>
          <Footer />
        </div>
      </div >
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const protocol = context.req.headers["x-forwarded-proto"] || "http";
    const host = context.req.headers.host;
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/post`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const { data: blogs } = await res.json(); // Assuming the API response has a `data` property

    return {
      props: {
        blogs,
      },
    };
  } catch (err) {
    return {
      props: {
        blogs: [],
        error: err.message,
      },
    };
  }
}

export default BlogPage;
