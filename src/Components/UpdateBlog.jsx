import { useOutletContext, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const UpdateBlog = () => {
  const serverData = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const [updateBlog, setUpdateBlog] = useState({
    title: "",
    text: "",
    author: "",
    year: "",
    categories: [],
  });

  useEffect(() => {
    axios
      .get(`${serverData}/single/${id}`)
      .then((res) => {
        setUpdateBlog(res.data.blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [serverData, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdateBlog((blog) => {
      return {
        ...blog,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${serverData}/update-single/${id}`, updateBlog)
      .then((res) => {
        setUpdateBlog(res.data.blog);
        navigate("/blog-added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="blog-area">
      <div className="blog-form-area">
        <h1>Update Blog</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Blog title:</label>

          <br />
          <br />
          <input
            type="text"
            name="title"
            value={updateBlog.title}
            onChange={handleChange}
            placeholder="Add A Tiltle"
          />
          <br />
          <label htmlFor="text">Blog text:</label>

          <br />
          <br />
          <textarea
            name="text"
            value={updateBlog.text}
            onChange={handleChange}
            placeholder="Add A Description"
          ></textarea>
          <br />
          <label htmlFor="author">Blog author:</label>

          <br />
          <br />
          <input
            type="text"
            name="author"
            value={updateBlog.author}
            onChange={handleChange}
            placeholder="Enter the Author's Name"
          />
          <br />
          <label htmlFor="categories">Blog Categories:</label>

          <br />
          <br />
          <input
            type="text"
            name="categories"
            value={updateBlog.categories}
            onChange={handleChange}
            placeholder="Enter the Categories"
          />
          <br />
          <label htmlFor="year">Blog Year:</label>

          <br />
          <br />
          <input
            type="text"
            name="year"
            value={updateBlog.year}
            onChange={handleChange}
            placeholder="Enter the Year Created"
          />
          <br />
          <button>Update Blog</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
