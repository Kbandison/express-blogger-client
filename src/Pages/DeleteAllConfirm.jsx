import { Link } from "react-router-dom";

const DeleteAll = () => {
  return (
    <div>
      <h1>Congrats! You have Deleted All Blogs!</h1>
      <button className="confirm-button">
        <Link to={"/blogs"}>&larr; Back to Blog List</Link>
      </button>
    </div>
  );
};

export default DeleteAll;
