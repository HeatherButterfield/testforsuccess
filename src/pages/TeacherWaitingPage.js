import React from "react";
import Clock from "../assets/clock.gif"

function TeacherWaitingPage() {
  return (
    <div>
      <div className="title"> Waiting for the Brodie...</div>
      <div class="d-flex justify-content-center align-items-center" style={{height: "500px"}}>
          <a href="/teacher/test">
            <img src={Clock} alt="clock" />
          </a>
      </div>
    </div>
  )
}

export default TeacherWaitingPage;
