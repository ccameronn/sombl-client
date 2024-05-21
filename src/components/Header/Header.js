import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import somblLogo from "../../assets/images/sombl-logo.png";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <img src={somblLogo} alt="sombl-logo" className="sombl-logo" />
        <h1 className="logo-title">sombl</h1>
      </Link>
      <ul className="nav-list">
        <NavLink to="/rehearsals" className="nav-link">
          Rehearsals
        </NavLink>
        <NavLink to="/home" className="nav-link">
          To Do
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
