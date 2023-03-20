import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const serverData = process.env.REACT_APP_ENDPOINT;
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/blogs"}>Blog List</Link>
        <Link to={"/create-blog"}>Add A Blog</Link>
      </nav>
      <Outlet context={serverData} />
    </div>
  );
};

export default Navbar;
