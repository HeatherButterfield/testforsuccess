import React, { useState, useEffect } from "react";
import TestCard from "../components/TestCard";


function TeacherTestPage() {
  const [ titles, setTitles ] = useState([]);

  useEffect(() => {
    setTitles(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
  }, []);

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="d-flex flex-row flex-wrap">
              {titles.map((value, index) => {
                return <TestCard id={index} title={value}/>
              })}
            </div>
          </div>
          <div class="col-md-3">
          <div class="card note-card rgba-cyan-strong">
            <div class="card-body">
              <h4 class="card-title text-white">Test 1<br/>Heather Butterfield<br/>11/27/20</h4>
              <div class="form-group">
                <label for="notes" class="text-white">Notes</label>
                <textarea class="form-control rounded-0" id="notes" rows="6"></textarea>
              </div>
              <div class="text-center">
                <button type="button" class="btn yellow-btn text-white" style={{width: "175px"}}><b>Done</b></button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherTestPage;
