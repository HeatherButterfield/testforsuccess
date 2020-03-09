import React from "react";

function TeacherSelectPage() {
  return (
    <div>
      <div className="title">Find the name of the student you want to test below!</div>
      <div class="d-flex justify-content-center" style={{height: "250px"}}>
        <div className="card margin-top">
          <div className="card-body">
            <label for="select">Students</label>
              <select className="browser-default custom-select mb-4" id="select">
                  <option value="" disabled="" selected="">Select student...</option>
                  <option value="1">Kellie</option>
                  <option value="2">Brodie</option>
                  <option value="3">Corey</option>
                  <option value="4">Heather</option>
                  <option value="5">Ammon</option>
                  <option value="6">Baylee</option>

              </select>
            <a href="/teacher/waiting">
              <button className="btn btn-block my-4 text-dark yellow accent-1 btn-lg margin-top" type="submit">Start Test</button>
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default TeacherSelectPage;
