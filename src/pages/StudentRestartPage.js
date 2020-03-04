import React from "react";
import Restart from "../assets/restart.png"
import Celebrate from "../assets/celebrate.jpg"

function StudentRestartPage() {
  return (
    <div>
      <div className="container">
                <div className="title">Great Job!</div>
        <div class="d-flex justify-content-center align-items-center">

          <div>
                <img src={Celebrate} alt="Celebrate" style={{backgroundImage: "Celebrate", backgroundSize: "100% auto", height: "60vh", backgroundRepeat: "no-repeat"}}></img>
          </div>
        </div>
        <div class="yes-link center-under" >
          <a href="/student/waiting">
            <div>Restart</div>
          </a>
          <a href="/">
            <div>Finished/Logout</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default StudentRestartPage;
