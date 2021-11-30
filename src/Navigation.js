import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from "./SignupButton";

export default function Navigation() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Auth Demo
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          {!isLoading && (
            <div className="d-flex">
              {isAuthenticated ? (
                <LogoutButton />
              ) : (
                <>
                  <LoginButton />
                  <SignupButton />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
