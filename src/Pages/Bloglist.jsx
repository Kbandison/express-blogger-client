import { useOutletContext, Link } from "react-router-dom";
import { useEffect } from "react";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs, reset } from "../Features/blogs/blogSlice";
import BlogCard from "../Components/BlogCard";
import DeleteBlog from "../Components/DeleteBlog";
import DeleteAllBlogs from "../Components/DeleteAllBlogs";
import Spinner from "../Components/Spinner";

const Bloglist = () => {
  const serverData = useOutletContext();
  // const [blogs, setBlogs] = useState([]);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    // axios
    //   .get(`${serverData}/blogs/user-blog`)
    //   .then((res) => {
    //     setBlogs(res.data.blogs);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    if (isError) {
      console.log(message);
    }

    dispatch(getBlogs());
    console.log(blogs);

    return () => {
      dispatch(reset());
    };
  }, [user, dispatch, isError, message, serverData]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="blogs-page">
      <br />
      <br />
      <br />
      <button>
        <Link to={"/create-blog"}>+ Add A Blog</Link>
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>{user.firstName}'s Blog list</h1>
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
                {/* <button>
                  <Link to={`/blog-update/${blog.id}`} className="link-button">
                    Update Blog
                  </Link>
                </button> */}
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
