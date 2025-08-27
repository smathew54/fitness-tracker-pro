import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  //const { setPage } = usePage();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/">Activities</NavLink>
          </li>
          {token ? (
            <li onClick={() => logout()}>Log out</li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/Register">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Login">Login</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
