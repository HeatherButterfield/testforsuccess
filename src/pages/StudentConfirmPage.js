import React from "react";

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
                <a class="yes-link" href="/student/test">
                  <div className="card-body">
                    <h4 className="card-title text-center"><a>Yes</a></h4>
                    <i class="fas fa-check fa-7x"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="margin-bottom margin-top">
              <div className="card" style={{ width: "25vw" }}>
                <a class="no-link" href="/student/waiting">
                  <div className="card-body">
                    <h4 className="card-title text-center"><a>No</a></h4>
                    <i class="fas fa-times fa-7x"></i>
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
