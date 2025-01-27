import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Head from 'next/head';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Blog({ blog, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Destructure the blog properties
  const {
    author,
    bannerImage,
    content,
    extractDescription,
    metaDescription,
    metaTags,
    metaTitle,
    thumbnailImage,
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

      <div className='bg-[#002025]'>
        <div className='w-large mx-auto'>
          <Header />

          <div className='grid grid-cols-12 gap-4 mt-12'>
            <div className='col-span-3'>
              <div className='flex justify-start'>
                <img src={author.photo} alt='author photo' className='mr-3 w-[50px] h-[50px]' />
                <div>
                  <p className='text-white font-semibold text-lg text-left'>{author.name}</p>
                  <p className='text-[#00FFFC] Brockmann text-left'>{new Date(uploadDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            <div className='col-span-9'>
              <h1 className='text-white text-3xl Brockmann'>{title}</h1>

              <p className='text-white mt-5 w-[80%] Gilroy text-base'>{extractDescription}</p>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        <img src={bannerImage} alt='banner' className='mx-auto my-8' />

        <div className='w-large mx-auto'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12'>
              <div
                className='text-white mt-5 text-left mx-auto Gilroy text-base'
                dangerouslySetInnerHTML={{ __html: content }} // Rendering HTML content
              />
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

    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }

    const blog = await res.json();

    return {
      props: {
        blog: blog.data,
      },
    };
  } catch (err) {
    return {
      props: {
        blog: null,
        error: err.message,
      },
    };
  }
}
