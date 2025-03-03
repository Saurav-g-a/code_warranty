import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

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
    metaDescription,
    metaTags,
    metaTitle,
    title,
    uploadDate,
  } = blog;

  return (
    <>
      <Head>
        <title>{metaTitle || 'Features of Warranty Software'}</title>
        <meta name="description" content={metaDescription || "Key Features to Look for in a Warranty Management Platform"} />
        <meta name="keywords" content={metaTags?.join(', ')} />
        <link rel="canonical" href="https://codewarranty.com/" />
        <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
        <meta name="theme-color" content="#002025" />
        <link rel="icon" type="image/x-icon" href="../assets/images/fabIcon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="../assets/images/fabIcon.png" />
      </Head>

      <div className='bg-[#002025] '>
        <div className='w-large mx-auto'>
          <Header />
        </div>


        <div>
          <div>
            {bannerImage && <img src={bannerImage} alt='banner' className='mx-auto w-full h-[500px] my-3' />}
            <div className='w-[65%] mx-auto bg-[#002025] z-10 -mt-[10%] p-5 rounded-md relative shadow-lg'>
              <div>

              </div>
              <h1 className='text-white text-3xl Brockmann text-left'>{title}</h1>
              <div className='flex  mt-3'>

                <img src={author?.photo} alt='author photo' className='mr-3 rounded-full w-[50px] h-[50px]' />

                <p className='text-white self-center Gilroy capitalize font-semibold text-lg text-left'>By {author?.name}  on {uploadDate ? new Date(uploadDate).toLocaleDateString() : ''}</p>


              </div>
            </div>
            <div className='w-[65%] mx-auto bg-[#002025] z-10 p-5 mt-7 rounded-md relative shadow-xl'>
              <div className='text-white mt-5 text-left mx-auto Gilroy text-base' dangerouslySetInnerHTML={{ __html: content || '' }} />
            </div>
          </div>
        </div>

        <div className='w-large mx-auto'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12'>

            </div>
          </div>
        </div>

        <div className='py-8 w-large mx-auto' id='contactUs'>
          <Contact />
        </div>
        <Footer />
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