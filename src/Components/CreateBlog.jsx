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
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog title:</label>
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
        <textarea
          name="text"
          value={newBlog.text}
          onChange={handleChange}
          placeholder="Add A Description"
          required
        ></textarea>
        <br />
        <label htmlFor="author">Blog author:</label>
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
        <input
          type="text"
          name="year"
          value={newBlog.year}
          onChange={handleChange}
          placeholder="Enter the Year Created"
          required
        />
        <br />
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
