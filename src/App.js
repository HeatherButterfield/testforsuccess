import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Logo from "./assets/logoWhite.png";

function App() {
  return (
    <Router>
      <div>
        <main>
           <div id="page-container">
             <div id="content-wrap">
               <nav className="mb-1 navbar navbar-expand-lg navbar-dark rgba-blue-strong">
               <a className="navbar-brand" href="#"><img src={Logo} style={{ height: "3rem" }} /></a>
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
                   <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">Classes
                     </a>
                     <div class="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                       <a class="dropdown-item" href="#">Class 1</a>
                       <a class="dropdown-item" href="#">Class 2</a>
                     </div>
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
                   <li className="nav-item">
                     <a className="nav-link waves-effect waves-light">
                        <i class="fas fa-question"></i>
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

             </div>
             <footer className="page-footer font-small rgba-blue-strong pt-4" id="footer">
               <div className="text-center py-3">© 2019 Copyright: Test for Success</div>
             </footer>
           </div>

        </main>
      </div>
    </Router>
  )
}

export default App;
