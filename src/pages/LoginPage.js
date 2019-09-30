import React from "react";
import Teacher from "../assets/loginPageTeacher.png"
import Student from "../assets/loginPageStudents.png"

function LoginPage() {
  return (
    <div class="container">
      <div class="row justify-content-around">
        <div className="margins-bottom margin-top">
          <div className="card" style={{ width: "400px" }}>
            <a href="/login/student">
              <div className="card-body">
                <h4 className="card-title text-center"><a>Student View</a></h4>
                <img className="card-img-top text-center" src={Student} alt="Student" style={{ height: "400px", width: "auto" }}></img>
              </div>
            </a>
          </div>
        </div>
        <div className="margin-bottom margin-top">
          <div className="card" style={{ width: "400px" }}>
            <a href="/login/teacher">
              <div className="card-body">
                <h4 className="card-title text-center"><a>Teacher View</a></h4>
                <img className="card-img-top text-center" src={Teacher} alt="Teacher" style={{ height: "400px", width: "auto" }}></img>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
