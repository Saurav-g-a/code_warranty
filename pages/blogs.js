import Header from "@/components/header";
import React from "react";
import Arrow from "@/public/assets/images/blog/arrow.png"
import Image from "next/image";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const BlogPage = ({ blogs, error }) => {
  console.log(blogs)
  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className='bg-[#002025] bg-headerBackground bg-contain bg-no-repeat'>
      <div className='w-large mx-auto'>
        <Header />
        <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 s:grid-cols-6 gap-4 py-8'>
          <div className='col-span-3 lg:block md:hidden sm:hidden s:hidden'></div>
          <div className='col-span-6'>
            <h1 className='text-[#95AAAD] Brockmann text-3xl text-center'><span className='text-[#00FFFC]'> Blogs </span></h1>
            <p className='text-[#95AAAD] text-center Gilroy py-6 w-2/3 mx-auto'>Keeping you up to date with the latest updates, announcements, and articles concerning warranty technology and the industry.</p>
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
                    <div className="bg-[#082B30] p-4 rounded-[14px]">
                      {/* Ensure bannerImage is a valid URL */}
                      {blog.bannerImage && (
                        <Image
                          src={blog.bannerImage}
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
                      <div className="my-5">
                        <a href={`/blogs/${blog._id}`}>
                          <Image src={Arrow} alt='arrow' className='w-[60px] h-[60px]' />

                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </>
              // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            )}
          </div>
        </div>

        <div id='contactUs'></div>
        <div className='py-8 w-large mx-auto'>
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
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
