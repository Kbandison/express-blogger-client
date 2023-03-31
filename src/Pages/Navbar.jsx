import { Link, Outlet } from "react-router-dom";

const serverData = process.env.REACT_APP_ENDPOINT;
const Navbar = () => {
  return (
    <div>
      <div className="header">
        <h1>Blog App</h1>
        <nav className="nav-bar">
          <Link to={"/"}>Home</Link>
          <Link to={"/blogs"}>Blog List</Link>
          <Link to={"/user-login"}>Login / Sign-up</Link>
        </nav>
      </div>
      <Outlet context={serverData} />
    </div>
  );
};

export default Navbar;
