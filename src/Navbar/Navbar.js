import React from 'react'
import '../App.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-info">
        <div className="container-fluid">
          <h1 className="navbar-brand">Navbar</h1>
          <ul className="options">
              <li className="nav-item">
                  <Link to={`/man`}><h2>Hombres</h2></Link>
              </li>
              <li className="nav-item">
                  <Link to={`/woman`}><h2>Woman</h2></Link>
              </li>
          </ul>
          <form className="d-flex">
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
      </nav>
    )
}

export default Navbar
