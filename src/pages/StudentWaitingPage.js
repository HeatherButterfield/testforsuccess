import React from "react";
import Clock from "../assets/clock.gif"

function StudentWaitingPage() {
  return (
    <div>
      <div className="title"> Waiting for the teacher...</div>
      <div class="d-flex justify-content-center align-items-center" style={{height: "500px"}}>
          <a href="/student/confirm">
            <img src={Clock} alt="clock" />
          </a>
      </div>
    </div>
  )
}

export default StudentWaitingPage;
