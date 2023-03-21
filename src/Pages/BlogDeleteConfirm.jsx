import { Link } from "react-router-dom";

const DeleteOne = () => {
  return (
    <div>
      <h1>Congrats! Blog has been Deleted!</h1>
      <Link to={"/blogs"}>Back to Blog List</Link>
    </div>
  );
};

export default DeleteOne;
