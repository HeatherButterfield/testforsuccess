import React from "react";
import Header from "../assets/homePageHeader.png"
import OneOnOne from "../assets/homePageOneOnOne.png"
import BarGraph from "../assets/barGraph.png"

function HomePage() {
  return (
    <div className="container">
      <div className="row margin-bottom margin-top">
        <img src={Header} alt="welcome" style={{ width: "100%" }}/>
      </div>
      <div className="row margin-bottom align-items-center">
        <div class="col-sm-12 col-md-6">
          <img src={OneOnOne} alt="one on one" style={{ width: "100%" }}/>
        </div>
        <div class="col-sm-12 col-md-6">
          <h2>Test students one on one</h2>
        </div>
      </div>
      <div className="row margin-bottom align-items-center">
        <div class="col-sm-12 col-md-6">
          <h2>View student test data</h2>
        </div>
        <div class="col-sm-12 col-md-6">
          <img src={BarGraph} alt="student data" style={{ width: "100%" }}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
