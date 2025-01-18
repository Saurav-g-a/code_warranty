import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const StaticID = "ghe6hvwayvpof82zcp7gsbudxh0anvdv";

export default function BlogListPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if(router.query.id !=undefined){
    if (router.query.id != StaticID) {
        router.replace("/404");
      } else {
        fetchBlogs();
      }
  }
  }, [router.query.id]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/post");
      const data = await response.json();
      if (data.success) {
        setBlogs(data.data);
      } else {
        console.error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmed.isConfirmed) {
      try {
        const response = await fetch(`/api/posts/${id}`, { method: "DELETE" });
        const data = await response.json();
        if (data.success) {
          Swal.fire("Deleted!", "Your blog has been deleted.", "success");
          fetchBlogs();
        } else {
          console.error("Failed to delete blog");
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const columns = [
    {
      name: "Blog Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Author",
      selector: (row) => row.author.name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => new Date(row.uploadDate).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="space-x-2">
          <button
            className="btn btn-primary"
            onClick={() => router.push(`/blogs/${row._id}`)}
          >
            View
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => router.push(`/editBlog/${row._id}`)}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(row._id)}>
            Delete
          </button>
        </div>
      ),
    },
  ];

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Blog List</h1>
      <DataTable columns={columns} data={blogs} pagination />
    </div>
  );
}
