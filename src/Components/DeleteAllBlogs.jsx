import { useOutletContext, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAllBlogs } from "../Features/blogs/blogSlice";
import axios from "axios";

const DeleteAllBlogs = (props) => {
  // const serverData = useOutletContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const deleteAllBlogs = () => {
  //   axios
  //     .delete(`${serverData}/blogs/delete-all`)
  //     .then((res) => {
  //       navigate("/blogs-deleted");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    // <div>
    //   <button
    //     onClick={() => deleteAllBlogs()}
    //     className="delete-button bigger-button confirm-button"
    //   >
    //     {`* Delete ${props.blogs.length} ${
    //       props.blogs.length > 1 ? "Blogs" : "Blog"
    //     } *`}
    //   </button>
    // </div>
    <div>
      <button
        onClick={() => {
          dispatch(deleteAllBlogs());
          navigate("/blogs-deleted");
        }}
        className="delete-button bigger-button confirm-button"
      >
        {" "}
        Delete All
        {/* {`* Delete ${props.blogs.length} ${
          props.blogs.length > 1 ? "Blogs" : "Blog"
        } *`} */}
      </button>
    </div>
  );
};

export default DeleteAllBlogs;
