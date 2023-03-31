import { useOutletContext, useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const BlogPage = () => {
  const serverData = useOutletContext();
  const { id } = useParams();

  const [blog, setBlog] = useState({
    title: "",
    text: "",
    author: "",
    year: "",
    categories: [],
  });

  useEffect(() => {
    axios
      .get(`${serverData}/blogs/single/${id}`)
      .then((res) => {
        setBlog(res.data.blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [serverData, id]);

  return (
    <div>
      <div>
        <h1>Title: {blog.title}</h1>
        <p>ID: {blog.id}</p>
        <p>Blog Text: {blog.text}</p>
        <p>Author: {blog.author}</p>
        <p>Year: {blog.year}</p>
        <p>Categories: {blog.categories.join(", ")}</p>
        <p>Created At: {blog.createdAt}</p>
        {blog.updatedAt && <p>Last Updated: {blog.updatedAt}</p>}
      </div>
      <button>
        <Link to={`/blog-update/${blog.id}`}>Update Blog</Link>
      </button>
      <br />
      <br />
      <br />
      <button className="bigger-button confirm-button">
        <Link to="/blogs">&larr; Back to Blog List</Link>
      </button>
    </div>
  );
};

export default BlogPage;
