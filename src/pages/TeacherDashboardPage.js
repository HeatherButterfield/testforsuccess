import React from "react";
import BarGraph from "../assets/barGraph.png"
import Assess from "../assets/assess.jpg"
import Edit from "../assets/edit.jpg"


function TeacherDashboardPage() {
  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substr(0,10);

  return (
    <div className="container d-flex justify-content-around flex-wrap margin-bottom">

      <div className="flex-column">
        <div class="text-center margin-top">
          <img src={Assess} alt="data" style={{ height: "200px" }}/>
        </div>

        <div className="card margin-top">
          <div className="card-body">
            <form>
              <p className="h4 mb-4 text-center">Assess</p>

              <label for="select">Class</label>
              <select className="browser-default custom-select mb-4" id="select">
                  <option value="" disabled="" selected="">Select test...</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
              </select>

              <label for="select">Student</label>
              <select className="browser-default custom-select mb-4" id="select">
                  <option value="" disabled="" selected="">Select student...</option>
                  <option value="1">Kellie</option>
                  <option value="2">Brodie</option>
                  <option value="3">Corey</option>
                  <option value="4">Heather</option>
                  <option value="3">Ammon</option>
              </select>

              <label for="select">Test</label>
              <select className="browser-default custom-select mb-4" id="select">
                  <option value="" disabled="" selected="">Select test...</option>
                  <option value="1">Test 1</option>
                  <option value="2">Test 2</option>
                  <option value="3">Test 3</option>
              </select>

              <label for="date-picker">Date</label>
              <input type="date" id="date-picker" defaultValue={date} class="form-control datepicker"/>

              <button className="btn btn-block my-4 text-white rgba-cyan-strong" type="submit">Assess</button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex-column">
        <div class="text-center margin-top">
          <img src={BarGraph} alt="data" style={{ height: "200px" }}/>
        </div>

        <div className="card margin-top">
          <div className="card-body">
            <form>
              <p className="h4 mb-4 text-center">Student Data</p>

              <label for="select">Student</label>
              <select className="browser-default custom-select mb-4" id="select">
                  <option value="" disabled="" selected="">Select student...</option>
                  <option value="1">Kellie</option>
                  <option value="2">Brodie</option>
                  <option value="3">Corey</option>
                  <option value="4">Heather</option>
                  <option value="3">Ammon</option>
              </select>

              <button className="btn btn-block my-4 text-white rgba-cyan-strong" type="submit">View</button>
            </form>
          </div>
        </div>

        <div className="card margin-top">
          <div className="card-body">
            <form>
              <p className="h4 mb-4 text-center">Class Data</p>

              <label for="select">Class</label>
              <select className="browser-default custom-select mb-4" id="select">
                  <option value="" disabled="" selected="">Select class...</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
              </select>

              <button className="btn btn-block my-4 text-white rgba-cyan-strong" type="submit">View</button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex-column">
        <div class="text-center margin-top">
          <img src={Edit} alt="data" style={{ height: "200px" }}/>
        </div>

        <div className="card margin-top">
          <div className="card-body">
            <form>
              <p className="h4 mb-4 text-center">Edit Class</p>

              <label for="select">Class</label>
              <select className="browser-default custom-select mb-4" id="select">
                  <option value="" disabled="" selected="">Select class...</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
              </select>

              <button className="btn btn-block my-4 text-white rgba-cyan-strong" type="submit">Edit</button>
            </form>
          </div>
        </div>

        <div className="card margin-top">
          <div className="card-body">
            <form>
              <p className="h4 mb-4 text-center">Edit Test</p>

              <label for="select">Test</label>
              <select className="browser-default custom-select mb-4" id="select">
                  <option value="" disabled="" selected="">Select test...</option>
                  <option value="1">Test 1</option>
                  <option value="2">Test 2</option>
                  <option value="3">Test 3</option>
              </select>

              <button className="btn btn-block my-4 text-white rgba-cyan-strong" type="submit">Edit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TeacherDashboardPage;
