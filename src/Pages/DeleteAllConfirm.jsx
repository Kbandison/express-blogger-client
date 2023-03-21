import { Link } from "react-router-dom";

const DeleteAll = () => {
  return (
    <div>
      <h1>Congrats! You have Deleted All Blogs!</h1>
      <Link to={"/blogs"}>Back to Blog List</Link>
    </div>
  );
};

export default DeleteAll;
