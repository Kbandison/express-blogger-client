import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div>
      <h1>Congrats! Blog has been Added!</h1>
      <Link to={"/blogs"}>Back to Blog List</Link>
    </div>
  );
};

export default Confirm;
