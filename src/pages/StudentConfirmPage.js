import React from "react";
import Xmark from "../assets/xmark.svg"
import Checkmark from "../assets/checkmark.svg"

function StudentConfirmPage() {
  return (
    <div>
      <div class="center">
        <div class="center-text-confirm">Are you Brodie?</div>
        <br/>
        <div class="container">
          <div class="row justify-content-around">
            <div className="margins-bottom margin-top">
              <div className="card" style={{ width: "25vw" }}>
                <a href="/student/test">
                  <div className="card-body">
                    <h4 className="card-title text-center"><a>Yes</a></h4>
                    <img className="card-img-top text-center" src={Checkmark} alt="Checkmark" style={{ height: "15vh", width: "15vw" }}></img>
                  </div>
                </a>
              </div>
            </div>
            <div className="margin-bottom margin-top">
              <div className="card" style={{ width: "25vw" }}>
                <a href="/student/home">
                  <div className="card-body">
                    <h4 className="card-title text-center"><a>No</a></h4>
                    <img className="card-img-top text-center" src={Xmark} alt="Xmark" style={{ height: "15vh", width: "15vw" }}></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentConfirmPage;
