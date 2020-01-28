import React, { useState, useEffect } from "react";
import TestCard from "../components/TestCard";


function TeacherTestPage() {
  const [ titles, setTitles ] = useState([]);

  useEffect(() => {
    setTitles(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="d-flex flex-row flex-wrap">
              {titles.map((value, index) => {
                return <TestCard id={index} title={value}/>
              })}
            </div>
          </div>
          <div className="col-md-3">
          <div className="card note-card rgba-cyan-strong">
            <div className="card-body">
              <h4 className="card-title text-white">Test 1<br/>Heather Butterfield<br/>11/27/20</h4>
              <div className="form-group">
                <label for="notes" className="text-white">Notes</label>
                <textarea className="form-control rounded-0" id="notes" rows="6"></textarea>
              </div>
              <div className="text-center">
                <button type="button" className="btn yellow-btn text-white" style={{width: "175px"}}><b>Done</b></button>
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
