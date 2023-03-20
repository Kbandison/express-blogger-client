import { useOutletContext, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../Components/BlogCard";
import DeleteBlog from "../Components/DeleteBlog";
import DeleteAllBlogs from "../Components/DeleteAllBlogs";

const Bloglist = () => {
  const serverData = useOutletContext();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${serverData}/blog-list`)
      .then((res) => {
        setBlogs(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [serverData]);

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <BlogCard blog={blog} />
            <button>
              <Link to={`/blog-update/${blog.id}`}>Update</Link>
            </button>
            <DeleteBlog blog={blog} />
          </div>
        );
      })}
      <br />
      <br />
      <br />
      <br />
      {blogs.length > 0 ? <DeleteAllBlogs /> : <h1>There are No Blogs</h1>}
    </div>
  );
};

export default Bloglist;
