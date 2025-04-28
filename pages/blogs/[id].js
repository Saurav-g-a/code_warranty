import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import Facebook from '../../public/assets/images/facebook.png';
import linkin from '../../public/assets/images/linkedin.png';
import twitter from '../../public/assets/images/twitter.png';
import close from '@/public/assets/images/active.svg';
import instagram from '../../public/assets/images/instagram.png';
import Arrow from "@/public/assets/images/blog/arrow.png"
import Image from 'next/image';
import Link from 'next/link';

export default function Blog({ blog, error, isLoading }) {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const [blogs1, setBlogs1] = useState([]);
  // const [error, setError] = useState(false);
  useEffect(() => {
    if (!blog || error) {
      router.push('/404');
    }
  }, [blog, error, router]);

  if (isLoading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  if (!blog || error) {
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

  const {
    author,
    bannerImage,
    content,
    extractDescription,
    paramUrl,
    metaDescription,
    metaTags,
    metaTitle,
    title,
    uploadDate,
  } = blog;

  const [isSticky, setIsSticky] = useState(true);
  console.log(blogs1)
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    fetchBlogs();
    const handleScroll = () => {
      const contentDiv = document.getElementById("contentSection");
      if (contentDiv) {
        const rect = contentDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if we have reached the bottom
        const atBottom = rect.bottom <= windowHeight - 400;

        if (atBottom) {
          setIsSticky(false);
          setBottomOffset(rect.height); // Adjust 40px if needed for positioning
        } else {
          setIsSticky(true);
        }
        // console.log("================================", )
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchBlogs = async () => {
    try {
      // setError(false);
      const response = await fetch("/api/post");
      const data = await response.json();
      if (data.success) {
        setBlogs1(data.data);
      } else {
        throw new Error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      // setError(true); // ✅ Set error state when API request fails
    } finally {
      // setLoading(false);
    }
  };

  const randomBlogs = useMemo(() => {
    if (!blogs1 || blogs1.length === 0) return [];

    // 1. Filter out the current blog by paramUrl
    const filtered = blogs1.filter(b => b.paramUrl !== paramUrl);

    // 2. Shuffle randomly
    const shuffled = filtered.sort(() => 0.5 - Math.random());

    // 3. Take first 3
    return shuffled.slice(0, 3);
  }, [blogs1, paramUrl]);

  return (
    <>
      <Head>
        <title>{metaTitle || 'Features of Warranty Software'}</title>
        <meta name="description" content={metaDescription || "Key Features to Look for in a Warranty Management Platform"} />
        <meta name="keywords" content={metaTags?.join(', ')} />
        <link rel="canonical" href={`https://codewarranty.com/blogs/${paramUrl}`} />
        <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
        <meta name="theme-color" content="#002025" />
        <link rel="icon" type="image/x-icon" href="../assets/images/fabIcon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="../assets/images/fabIcon.png" />
      </Head>

      <div className='bg-headerBackground bg-contain bg-no-repeat'>
        <div className='bg-custom-gradient   bg-contain bg-no-repeat'>
          <div className='w-large mx-auto'>
            <Header />
          </div>
          <div>
            <div>
              {bannerImage && <img src={bannerImage} alt='banner' className='mx-auto w-full my-3' />}
              <div className='w-[80%] mx-auto bg-[#11474A] z-10 -mt-[3%] p-5 rounded-xl relative shadow-lg'>
                <div>

                </div>
                <h1 className='text-white text-3xl Brockmann text-left'>{title}</h1>
                <div className='flex  mt-3'>
                  <a href='https://www.linkedin.com/in/nikg510/' target='_blank'>
                    <img src={author?.photo} alt='author photo' className='mr-3 rounded-full w-[50px] h-[50px]' />
                  </a>

                  <p className='text-white self-center Gilroy capitalize font-semibold text-lg text-left'>By  <a href='https://www.linkedin.com/in/nikg510/' target='_blank'>{author?.name}</a>  on {uploadDate ? new Date(uploadDate).toLocaleDateString() : ''}</p>


                </div>
              </div>
              <div id="contentSection" className='w-[75%] mx-auto  z-10 p-5 mt-7 rounded-xl relative'>
                {/* <div className={`left-[-55px] ${isSticky ? "sticky top-5" : ""}`}
                  style={!isSticky ? { bottom: `-${bottomOffset}px` } : {}}>
                  <div className={"absolute left-[-55px]"}>
                    <a href=''><Image src={Facebook} alt='facebook' className='mb-3' /></a>
                    <a href=''><Image src={twitter} alt='twitter' className='mb-3' /></a>
                    <a href=''><Image src={linkin} alt='linkin' className='mb-3' /></a>
                    <a href=''><Image src={instagram} alt='instagram' className='mb-3' /></a>
                  </div>
                </div> */}
                <div className='text-[#fff] mt-5 text-left mx-auto Gilroy custom-content text-base' dangerouslySetInnerHTML={{ __html: content || '' }} />
              </div>
            </div>
          </div>

          <div className='py-8 w-large mx-auto'>
            <h2 className="text-[#00fffc] text-3xl Brockmann my-3 font-[500]">
              Recent Posts
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8">
              {randomBlogs.length === 0 ? (
                <div className="text-center">No blogs available.</div>
              ) : (
                <>
                  {randomBlogs.map((blog) => (
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
                              width={300} // Add width and height for Image
                              height={200}
                              className="w-full"
                            />
                          )}
                          <h2 className="text-[#fff] text-lg Brockmann my-3 font-[500]">
                            {blog.title || "Default Blog Title"}
                          </h2>
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
                // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              )}
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className='bg-[#002025]'>
          <div className='py-8 w-large mx-auto' id='contactUs'>
            <Contact />
          </div>
          {showButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-5 left-5 px-4 py-2 rounded-full shadow-lg "
            >
              <Image title="Hero image description" className="rotate-180" src={close} width={40} height={40} alt="close" />
            </button>
          )}

          <a href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3TUE4miGSgGYkjSRA71gPaWzwLoUya5WDHu3IXW7Zt6nyC8VQW1SamtXC-W8Yig-01MGvDaoJp' target='_blank'
            onClick={scrollToTop}
            className="fixed bottom-5 Gilroy z-20 font-semibold leading-none right-5 text-center px-4 py-2 rounded-tl-[0px] rounded-tr-[20px] rounded-br-[0px] rounded-bl-[20px] shadow-[1px_1px_4px_0px_#504d4d] bg-[#00FFFC] text-black "
          >Book <br />  Appointment
          </a>
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params, req }) {
  const { id } = params;
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  try {
    const res = await fetch(`${baseUrl}/api/posts/${id}`, {
      method: "GET",
    });

    if (res.status === 500) {
      return {
        props: {
          blog: null,
          error: 'Internal Server Error. Please try again later.',
          isLoading: false,
        },
      };
    }

    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }

    const blog = await res.json();

    return {
      props: {
        blog: blog.data,
        error: null,
        isLoading: false,
      },
    };
  } catch (err) {
    return {
      props: {
        blog: null,
        error: err.message,
        isLoading: false,
      },
    };
  }
}