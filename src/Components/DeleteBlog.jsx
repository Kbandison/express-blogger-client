import { useOutletContext, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../Features/blogs/blogSlice";
import axios from "axios";

const DeleteBlog = (props) => {
  const serverData = useOutletContext();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const deleteBlog = (id) => {
  //   axios
  //     .delete(`${serverData}/blogs/delete-single/${props.blog.id}`)
  //     .then((res) => {
  //       navigate("/blog-deleted");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    // <div>
    //   <button onClick={() => deleteBlog(props.blog.id)}>Delete Blog</button>
    // </div>
    <div>
      <button
        onClick={() => {
          dispatch(deleteBlog(props.blog.id));
          navigate("/blog-deleted");
        }}
      >
        Delete Blog
      </button>
    </div>
  );
};

export default DeleteBlog;
