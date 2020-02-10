import React from "react";
import Restart from "../assets/restart.png"

function StudentRestartPage() {
  return (
    <div>
      <div>
        <div className="title"> Great Job!</div>
        <div className="center">Click below to restart test</div>
      </div>
      <a href="/student/test">
        <div class="d-flex justify-content-center align-items-center" style={{height: "25vh"}}>
            <img src={Restart} alt="restart" style={{ height: "25vh", width: "auto" }} />
        </div>
      </a>
      <a href="/student/home">
        <div className="center">Click to go back home</div>
      </a>
    </div>
  )
}

export default StudentRestartPage;
