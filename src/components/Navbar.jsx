import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo-section">

        <img
          src={logo}
          alt="Music Zone Logo"
          className="site-logo"
        />

        <div className="logo-text">
          <h2>Music Zone</h2>
          <p>Music Classes</p>
        </div>

      </Link>

      <ul className="nav-links">

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/vacancy-training"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Vacancy Training
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Contact
          </NavLink>
        </li>

      </ul>

      <a
        href="https://wa.me/919575335798"
        target="_blank"
        rel="noreferrer"
        className="nav-btn"
      >
        Join Now
      </a>

    </nav>
  );
}

export default Navbar;