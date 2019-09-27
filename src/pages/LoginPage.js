import React from "react";
import Teacher from "../assets/teacher.png"
import Student from "../assets/student.png"

function LoginPage() {
  return (
    <div class="container">
      <div class="row justify-content-center margin-bottom margin-top">
        <h1>Who are you?</h1>
      </div>
      <div class="row justify-content-around">
        <div className="margins-bottom">
          <div className="card" style={{ width: "350px" }}>
            <a href="/login/student">
              <img className="card-img-top" src={Student} alt="Student" ></img>
              <div className="card-body">
                <h4 className="card-title text-center"><a>Student</a></h4>
              </div>
            </a>
          </div>
        </div>
        <div className="margin-bottom">
          <div className="card" style={{ width: "350px" }}>
            <a href="/login/teacher">
              <img className="card-img-top" src={Teacher} alt="Teacher" ></img>
              <div className="card-body">
                <h4 className="card-title text-center"><a>Teacher</a></h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
