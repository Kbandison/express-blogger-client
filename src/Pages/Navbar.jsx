import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const serverData = process.env.REACT_APP_ENDPOINT;
  return (
    <div>
      <div className="header">
        <h1>Blog App</h1>
        <nav className="nav-bar">
          <Link to={"/"}>Home</Link>
          <Link to={"/blogs"}>Blog List</Link>
        </nav>
      </div>
      <Outlet context={serverData} />
    </div>
  );
};

export default Navbar;
