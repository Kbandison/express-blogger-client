import { useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteBlog = (props) => {
  const serverData = useOutletContext();
  const navigate = useNavigate();

  const deleteBlog = (id) => {
    axios
      .delete(`${serverData}/delete-single/${props.blog.id}`)
      .then((res) => {
        navigate("/blog-deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={() => deleteBlog(props.blog.id)}>Delete Blog</button>
    </div>
  );
};

export default DeleteBlog;
