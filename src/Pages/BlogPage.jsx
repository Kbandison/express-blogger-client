import { useOutletContext, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleBlog, reset } from "../Features/blogs/blogSlice";
import axios from "axios";
import { useState, useEffect } from "react";

const BlogPage = () => {
  // const serverData = useOutletContext();
  const { id } = useParams();

  const dispatch = useDispatch();

  const { blogs, isError, message } = useSelector((state) => state.blogs);

  // const [blog, setBlog] = useState({
  //   title: "",
  //   text: "",
  //   author: "",
  //   year: "",
  //   categories: [],
  // });

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getSingleBlog(id));

    return () => {
      dispatch(reset());
    };

    // axios
    //   .get(`${serverData}/blogs/single/${id}`)
    //   .then((res) => {
    //     setBlog(res.data.blog);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [id, dispatch, isError, message]);

  return (
    <div>
      <div>
        <h1>Title: {blogs.title}</h1>
        <p>ID: {blogs.id}</p>
        <p>Blog Text: {blogs.text}</p>
        <p>Author: {blogs.author}</p>
        <p>Year: {blogs.year}</p>
        <p>Categories: {blogs.categories}</p>
        <p>Created At: {new Date(blogs.createdAt).toLocaleString("en-US")}</p>
        {blogs.updatedAt && (
          <p>
            Last Updated: {new Date(blogs.updatedAt).toLocaleString("en-US")}
          </p>
        )}
      </div>
      <button>
        <Link to={`/blog-update/${id}`}>Update Blog</Link>
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
