import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill-new/dist/quill.snow.css";
import Head from "next/head";

const StaticID = "ghe6hvwayvpof82zcp7gsbudxh0anvdv";

export default function EditBlogPage() {

  const router = useRouter();
  const { slug, id } = router.query;
  const [editorContent, setEditorContent] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    extractDescription: "",
    content: "",
    author: {
      name: "",
      photo: null,
    },
    bannerImage: null,
    paramUrl: "",
    thumbnailImage: null,
    metaTitle: "",
    metaDescription: "",
    metaTags: [],
  });
  const [uploadTime, setUploadTime] = useState(null); // Track upload time
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill-new"), { ssr: false }), []);

  // Fetch blog details when component mounts
  useEffect(() => {
    if (slug != StaticID) {
      router.replace("/404");
    }
    else {
      if (id) {
        const fetchBlogDetails = async () => {
          try {
            const response = await fetch(`/api/posts/${id}`, {
              method: "GET",
            });

            const data = await response.json();
            if (data.success) {
              setBlogData(data.data);
              setFormData({
                title: data.data.title,
                extractDescription: data.data.extractDescription,
                content: data.data.content,
                author: {
                  name: data.data.author.name,
                  photo: data.data.author.photo,
                },
                bannerImage: data.data.bannerImage,
                paramUrl: data.data.paramUrl,
                thumbnailImage: data.data.thumbnailImage,
                metaTitle: data.data.metaTitle,
                metaDescription: data.data.metaDescription,
                metaTags: data.data.metaTags,
              });
              setValue(data.data.content)
              setUploadTime(data.data.uploadDate);
            }
          } catch (error) {
            console.error("Error fetching blog details:", error);
            router.push("/404");
          } finally {
            setLoading(false);
          }
        };
        fetchBlogDetails();
      }
    }

  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      author: {
        ...prev.author,
        [name]: value,
      },
    }));
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("file", file);
      const flag = name === "bannerImage" ? "bannerImage" : name === "thumbnailImage" ? "thumbnailImage" : null;

      if (flag) {
        const response = await fetch(
          `https://api.demo.codewarranty.com/api-v1/dealer/uploadBannerImage?flag=${flag}`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();
          const uploadedUrl = result.file.location;
          setFormData((prev) => ({
            ...prev,
            [name]: uploadedUrl,
          }));
        } else {
          console.error("Image upload failed", await response.text());
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleAuthorPhotoChange = async (e) => {
    const { files } = e.target;
    const file = files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "https://api.demo.codewarranty.com/api-v1/dealer/uploadBannerImage?flag=authorImage",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        const uploadedUrl = result.file.location;

        setFormData((prev) => ({
          ...prev,
          author: {
            ...prev.author,
            photo: uploadedUrl,
          },
        }));
      } else {
        console.error("Author image upload failed", await response.text());
      }
    } catch (error) {
      console.error("Error uploading author photo:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      title: formData.title,
      extractDescription: formData.extractDescription,
      paramUrl: formData.paramUrl,
      content: value,
      author: {
        name: formData.author.name,
        photo: formData.author.photo,
      },
      bannerImage: formData.bannerImage,
      thumbnailImage: formData.thumbnailImage,
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      metaTags: formData.metaTags,
      uploadDate: uploadTime || new Date().toISOString(),
    };

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        router.push("/blogs");
      } else {
        console.error("Failed to update blog");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleMetaTagsChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      metaTags: e.target.value.split(",").map(tag => tag.trim()),
    }));
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // Add <h1>, <h2>, <h3>
      ["bold", "italic", "underline"], // Basic formatting
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      [{ script: "sub" }, { script: "super" }], // Subscript/Superscript
      [{ indent: "-1" }, { indent: "+1" }], // Indentation
      [{ align: [] }], // Text alignment
      [{ 'direction': 'rtl' }], // Right-to-left text direction
      ["link", "image", "video"], // Media options
      ["blockquote", "code-block"], // Add <blockquote> and <pre>
      [{ color: [] }, { background: [] }], // Text color & highlight
      ["clean"], // Remove formatting
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "indent",
    "list",
    "bullet",
    "link",
    "image",
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (!blogData) {
    router.push("/404");
    return null;
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        />
        <script
          src="https://unpkg.com/react@16/umd/react.development.js"
          crossorigin
        ></script>
        <script
          src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
          crossorigin
        ></script>
        <script src="https://unpkg.com/react-quill@1.3.3/dist/react-quill.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Extract Description</label>
            <textarea
              name="extractDescription"
              placeholder="Extract Description"
              value={formData.extractDescription}
              onChange={handleChange}
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Author Name</label>
            <input
              type="text"
              name="name"
              placeholder="Author Name"
              value={formData.author.name}
              onChange={handleAuthorChange}
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Author Photo</label>
            <input
              type="file"
              name="photo"
              onChange={handleAuthorPhotoChange}
              accept="image/*"
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Banner Image</label>
            <input
              type="file"
              name="bannerImage"
              onChange={handleFileChange}
              accept="image/*"
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Thumbnail Image</label>
            <input
              type="file"
              name="thumbnailImage"
              onChange={handleFileChange}
              accept="image/*"
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Param Url</label>
            <input
              type="text"
              name="paramUrl"
              placeholder="Param Url"
              value={formData.paramUrl}
              onChange={handleChange}
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Meta Title</label>
            <input
              type="text"
              name="metaTitle"
              placeholder="Meta Title"
              value={formData.metaTitle}
              onChange={handleChange}
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Meta Description</label>
            <textarea
              name="metaDescription"
              placeholder="Meta Description"
              value={formData.metaDescription}
              onChange={handleChange}
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Meta Tags (comma-separated)</label>
            <input
              type="text"
              name="metaTags"
              placeholder="Meta Tags (comma-separated)"
              value={formData.metaTags.join(", ")}
              onChange={handleMetaTagsChange}
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Upload Time</label>
            <DatePicker
              selected={uploadTime ? new Date(uploadTime) : null}
              onChange={(date) => setUploadTime(date)}
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Content</label>
            <ReactQuill
              value={value}
              theme="snow"
              onChange={setValue}
              modules={quillModules}
              formats={quillFormats}
              className="w-full"
            >
            </ReactQuill>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Update Blog
          </button>
        </form>
      </div>
    </>
  );
}
