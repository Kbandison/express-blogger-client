import { useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteAllBlogs = (props) => {
  const serverData = useOutletContext();
  const navigate = useNavigate();

  const deleteAllBlogs = () => {
    axios
      .delete(`${serverData}/delete-all`)
      .then((res) => {
        navigate("/blogs-deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button
        onClick={() => deleteAllBlogs()}
        className="delete-button bigger-button confirm-button"
      >
        {`* Delete ${props.blogs.length} ${
          props.blogs.length > 1 ? "Blogs" : "Blog"
        } *`}
      </button>
    </div>
  );
};

export default DeleteAllBlogs;
