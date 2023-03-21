import { useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteAllBlogs = () => {
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
      <button onClick={() => deleteAllBlogs()}>Delete All Blogs</button>
    </div>
  );
};

export default DeleteAllBlogs;
