import React from 'react'
import '../App.css';
import {Link, useHistory} from "react-router-dom";

const Navbar = () => {

    const history = useHistory();

    const handleLogout = () => {
        history.replace("/Login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Dragon Ball
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"><Link to={`/home`}>
            Home
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to={`/man`}>
            Man
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to={`/woman`}>
            Woman
            </Link>
          </a>
        </li>
      </ul>
      <div className="d-flex me-auto">
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
      <form className="container-fluid d-flex">
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>
    </div>
  </div>
</nav>
    )
}

export default Navbar
