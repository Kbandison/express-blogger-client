import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CreateBlog = () => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    text: "",
    author: "",
    year: "",
    categories: [],
  });

  const serverData = useOutletContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setNewBlog((blog) => {
      return {
        ...blog,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${serverData}/create-one`, newBlog)
      .then((res) => {
        setNewBlog(res.data.blog);
        navigate("/blog-added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="blog-area">
      <div className="blog-form-area">
        <br />
        <br />
        <h1>Add Blog</h1>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Blog title:</label>
          <br />
          <br />

          <input
            type="text"
            name="title"
            value={newBlog.title}
            onChange={handleChange}
            placeholder="Add A Tiltle"
            required
          />
          <br />
          <label htmlFor="text">Blog text:</label>

          <br />
          <br />
          <textarea
            name="text"
            value={newBlog.text}
            onChange={handleChange}
            placeholder="Add A Description"
            required
          ></textarea>
          <br />
          <label htmlFor="author">Blog author:</label>

          <br />
          <br />
          <input
            type="text"
            name="author"
            value={newBlog.author}
            onChange={handleChange}
            placeholder="Enter the Author's Name"
            required
          />
          <br />
          <label htmlFor="categories">Blog Categories:</label>

          <br />
          <br />
          <input
            type="text"
            name="categories"
            value={newBlog.categories}
            onChange={handleChange}
            placeholder="Enter the Categories"
            required
          />
          <br />
          <label htmlFor="year">Blog Year:</label>

          <br />
          <br />
          <input
            type="text"
            name="year"
            value={newBlog.year}
            onChange={handleChange}
            placeholder="Enter the Year Created"
            required
          />
          <br />
          <br />
          <button>Add Blog</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
