import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { ReactComponent as Logo } from "./assets/logoWhite.svg";

function App() {
  return (
    <Router>
      <div>
        <main>
          <nav className="mb-1 navbar navbar-expand-lg navbar-dark rgba-blue-strong">
          <a className="navbar-brand" href="#"><Logo style={{ height: "4rem", width: "15rem" }} /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
            aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Data</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Classes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Tests</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link waves-effect waves-light">
                  <i className="fas fa-plus"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link waves-effect waves-light">
                  <i className="fas fa-cog"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-user"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-default"
                  aria-labelledby="navbarDropdownMenuLink-333">
                  <a className="dropdown-item" href="/login">Login</a>
                  <a className="dropdown-item" href="">Profile</a>
                </div>
              </li>
            </ul>
          </div>
          </nav>

          <Routes />

          <footer className="page-footer font-small rgba-blue-strong pt-4">
            <div className="text-center py-3">© 2019 Copyright: Test for Success</div>
          </footer>
        </main>
      </div>
    </Router>
  )
}

export default App;
