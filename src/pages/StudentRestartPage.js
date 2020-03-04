import React from "react";
import Restart from "../assets/restart.png"

function StudentRestartPage() {
  return (
    <div>
      <div>
        <div className="title"> Great Job!</div>
        <div className="center">Click below to restart test</div>
      </div>
      <a class="yes-link" href="/student/waiting">
        <div class="d-flex justify-content-center align-items-center" style={{height: "25vh"}}>
            <i class="fas fa-redo fa-10x"></i>
        </div>
      </a>
      <a href="/">
        <div className="center">Finished/Logout</div>
      </a>
    </div>
  )
}

export default StudentRestartPage;
