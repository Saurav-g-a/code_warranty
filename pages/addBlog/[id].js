import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill-new/dist/quill.snow.css";
const StaticID = "ghe6hvwayvpof82zcp7gsbudxh0anvdv";

export default function AddBlogPage() {
  const [value, setValue] = useState("");
  const [uploadTime, setUploadTime] = useState(new Date());
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill-new"), { ssr: false }),
    []
  );

  const [formData, setFormData] = useState({
    title: "",
    extractDescription: "",
    content: "",
    author: {
      name: "",
      photo: null,
    },
    bannerImage: null,
    thumbnailImage: null,
    metaTitle: "",
    metaDescription: "",
    metaTags: [],
  });

  const router = useRouter();
  const { id } = router.query;

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
      const flag =
        name === "bannerImage"
          ? "bannerImage"
          : name === "thumbnailImage"
          ? "thumbnailImage"
          : null;

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

  const handleMetaTagsChange = (e) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setFormData((prev) => ({
      ...prev,
      metaTags: tags,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const dataToSend = {
      title: formData.title,
      extractDescription: formData.extractDescription,
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
      uploadTime: uploadTime.toISOString(),
    };

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Blog created:", result);
        setFormData({});
       router.push("/blogs"); // Uncomment this line to redirect after submission
      } else {
        console.error("Failed to create blog");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  if (id != StaticID) {
    return (
      <div>
        <h1>404 - Not Found</h1>
        <p>The requested page does not exist.</p>
      </div>
    );
  }
  else{
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            required
          />
  
          <textarea
            name="extractDescription"
            placeholder="Extract Description"
            onChange={handleChange}
            className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            required
          />
  
          <input
            type="text"
            name="name"
            placeholder="Author Name"
            onChange={handleAuthorChange}
            className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            required
          />
  
          <div>
            <label className="block mb-2 font-medium">Author Photo</label>
            <input
              type="file"
              name="photo"
              onChange={handleAuthorPhotoChange}
              accept="image/*"
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
              required
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
              required
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
              required
            />
          </div>
  
          <input
            type="text"
            name="metaTitle"
            placeholder="Meta Title"
            onChange={handleChange}
            className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            required
          />
  
          <textarea
            name="metaDescription"
            placeholder="Meta Description"
            onChange={handleChange}
            className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            required
          />
  
          <input
            type="text"
            name="metaTags"
            placeholder="Meta Tags (comma-separated)"
            onChange={handleMetaTagsChange}
            className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            required
          />
  
          <div>
            <label className="block mb-2 font-medium">Upload Time</label>
            <DatePicker
              selected={uploadTime}
              onChange={(date) => setUploadTime(date)}
              className="block px-4 py-2 w-full text-base text-black bg-white rounded-lg border border-gray-300"
            />
          </div>
  
          <div>
            <ReactQuill
              value={value}
              onChange={setValue}
              modules={quillModules}
              formats={quillFormats}
              placeholder="Blog content"
              style={{ backgroundColor: "white", color: "black" }}
            />
          </div>
  
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

}
