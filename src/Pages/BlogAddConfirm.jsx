import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div>
      <h1>Congrats! Blog has been Added!</h1>
      <button className="confirm-button">
        <Link to={"/blogs"}>&larr; Back to Blog List</Link>
      </button>
    </div>
  );
};

export default Confirm;
