import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../Features/auth/authSlice";

const serverData = process.env.REACT_APP_ENDPOINT;
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <header className="header">
        <h1>Blog App</h1>
        <div>
          <nav className="nav-bar">
            <Link to={user ? "/" : "/user-login"}>Home</Link>
            {user && <Link to={"/blogs"}>Blog List</Link>}
          </nav>
        </div>
        {user ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <button>
            <Link to={"/user-login"}>Login / Sign-up</Link>
          </button>
        )}
      </header>
      <Outlet context={serverData} />
    </div>
  );
};

export default Navbar;
