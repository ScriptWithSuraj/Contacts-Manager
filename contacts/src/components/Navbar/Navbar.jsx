import React from "react";
import { Link } from "react-router-dom";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#"> */}
          <ImportContactsIcon />
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  style={{ color: "#503e98", fontWeight: "bold" }}
                >
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: "#503e98", fontWeight: "bold" }}
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: "#503e98", fontWeight: "bold" }}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="#"
                  style={{ color: "#503e98", fontWeight: "bold" }}
                >
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
