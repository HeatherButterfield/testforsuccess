import React from "react";

function StudentHomePage() {
  return (
    <div>
      <div className="title">Welcome!</div>
      <div className="center">Find your name below to start test!</div>
      <div class="d-flex justify-content-center" style={{height: "250px"}}>
        <div className="card margin-top">
          <div className="card-body">
          <label for="select">Student</label>
              <select className="browser-default custom-select mb-4" id="select">
                  <option value="" disabled="" selected="">Select student...</option>
                  <option value="1">Kellie</option>
                  <option value="2">Brodie</option>
                  <option value="3">Corey</option>
                  <option value="4">Heather</option>
                  <option value="5">Ammon</option>
                  <option value="6">Baylee</option>

              </select>
            <a href="/student/waiting">
              <button className="btn btn-block my-4 text-white rgba-cyan-strong" type="submit">Start Test</button>
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default StudentHomePage;
