import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Facebook from '../../public/assets/images/facebook.png';
import linkin from '../../public/assets/images/linkedin.png';
import twitter from '../../public/assets/images/twitter.png';
import instagram from '../../public/assets/images/instagram.png';
import Image from 'next/image';

export default function Blog({ blog, error, isLoading }) {
  const router = useRouter();

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
  console.log(blog)
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const contentDiv = document.getElementById("contentSection");
      if (contentDiv) {
        const rect = contentDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if we have reached the bottom
        const atBottom = rect.bottom <= windowHeight - 170;

        if (atBottom) {
          setIsSticky(false);
          setBottomOffset(rect.height); // Adjust 40px if needed for positioning
        } else {
          setIsSticky(true);
        }
        console.log("================================", windowHeight, rect.bottom)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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
              {bannerImage && <img src={bannerImage} alt='banner' className='mx-auto w-full h-[350px] my-3' />}
              <div className='w-[80%] mx-auto bg-[#11474A] z-10 -mt-[10%] p-5 rounded-xl relative shadow-lg'>
                <div>

                </div>
                <h1 className='text-white text-3xl Brockmann text-left'>{title}</h1>
                <div className='flex  mt-3'>

                  <img src={author?.photo} alt='author photo' className='mr-3 rounded-full w-[50px] h-[50px]' />

                  <p className='text-white self-center Gilroy capitalize font-semibold text-lg text-left'>By {author?.name}  on {uploadDate ? new Date(uploadDate).toLocaleDateString() : ''}</p>


                </div>
              </div>
              <div id="contentSection" className='w-[75%] mx-auto  z-10 p-5 mt-7 rounded-xl relative'>
                <div className={`left-[-45px] ${isSticky ? "sticky top-5" : ""}`}
                  style={!isSticky ? { bottom: `-${bottomOffset}px` } : {}}>
                  <div className={"absolute left-[-45px]"}>
                    <a href=''><Image src={Facebook} alt='facebook' className='mb-3' /></a>
                    <a href=''><Image src={twitter} alt='twitter' className='mb-3' /></a>
                    <a href=''><Image src={linkin} alt='linkin' className='mb-3' /></a>
                    <a href=''><Image src={instagram} alt='instagram' className='mb-3' /></a>
                  </div>
                </div>
                <div className='text-[#65868B] mt-5 text-left mx-auto Gilroy custom-content text-base' dangerouslySetInnerHTML={{ __html: content || '' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#002025]'>
          <div className='py-8 w-large mx-auto ' id='contactUs'>
            <Contact />
          </div>
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