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
      .get(`${serverData}/blogs/blog-list`)
      .then((res) => {
        setBlogs(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [serverData]);

  return (
    <div className="blogs-page">
      <br />
      <br />
      <br />
      <button>
        <Link to={"/create-blog"}>+ Add A Blog</Link>
      </button>

      <div className="blog-list-area">
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="blog-card">
              <BlogCard blog={blog} />
              <div className="bloglist-buttons">
                <button>
                  <Link to={`/blog/${blog.id}`} className="link-button">
                    View Blog
                  </Link>
                </button>
                <button>
                  <Link to={`/blog-update/${blog.id}`} className="link-button">
                    Update Blog
                  </Link>
                </button>
                <DeleteBlog blog={blog} />
              </div>
            </div>
          );
        })}
        <br />
        <br />
        <br />
        <br />
      </div>
      {blogs.length > 0 ? (
        <DeleteAllBlogs blogs={blogs} />
      ) : (
        <h1>There are No Blogs</h1>
      )}
    </div>
  );
};

export default Bloglist;
