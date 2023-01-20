import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/songs">
        <h1>Tuner App</h1>
      </Link>

      <Link to="/">
        <h3>Home</h3>
      </Link>

      <Link to="/songs/new">
        <button>New Song</button>
      </Link>
    </nav>
  );
};
export default NavBar;
