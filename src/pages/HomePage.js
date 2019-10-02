import React from "react";
import Header from "../assets/homePageHeader.png"
import OneOnOne from "../assets/homePageOneOnOne.png"
import BarGraph from "../assets/barGraph.png"
import MobileHeader from "../assets/homePageMobileHeader.png"

function HomePage() {
  return (
    <div className="container">
      <div class="row margin-top margin-bottom desktop">
        <div class="homePageHeader" style={{backgroundImage: "url(" + Header + ")", backgroundSize: "100% auto", height: "800px", backgroundRepeat: "no-repeat"}}>
          <div class="text-center py-5 px-4 margin-sides">
            <div>
              <h2 class="h1-responsive pt-3 mb-5 font-bold margin-top"><strong>Welcome to Test for Success!</strong></h2>
              <p class="mx-5 mb-5">We are a testing software designed for elementary school teachers. Dicover how easy it is to create tests and then quickly test a student’s reading ability (letters, letter sounds, simple sight words, vowel families, etc) one on one. Student test data is at your fingertips. You can view and download student scores so you can target students for interventions.
              </p>
              <a class="btn text-dark yellow accent-1 btn-rounded btn-md">Sign-up</a>
              <a href="/login" class="btn text-white rgba-cyan-strong btn-rounded btn-md">Login</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile">
        <div class="row text-center">
          <div class="margin-bottom margin-top">
            <h2 class="h1-responsive font-bold"><strong>Welcome to Test for Success!</strong></h2>
            <p class="margin-sides">We are a testing software designed for elementary school teachers. Dicover how easy it is to create tests and then quickly test a student’s reading ability (letters, letter sounds, simple sight words, vowel families, etc) one on one. Student test data is at your fingertips. You can view and download student scores so you can target students for interventions.
            </p>
            <a class="btn text-dark yellow accent-1 btn-rounded btn-md">Sign-up</a>
            <a href="/login" class="btn text-white rgba-cyan-strong btn-rounded btn-md">Login</a>
          </div>
        </div>
      </div>
      <div className="row text-center margin-bottom align-items-center">
        <div class="col-sm-12 col-md-6">
          <img src={OneOnOne} alt="one on one" style={{ width: "90%" }}/>
        </div>
        <div class="col-sm-12 col-md-6">
          <h2>Test students one on one</h2>
        </div>
      </div>
      <div className="row text-center margin-bottom align-items-center">
        <div class="col-sm-12 col-md-6">
          <h2>View student test data</h2>
        </div>
        <div class="col-sm-12 col-md-6">
          <img src={BarGraph} alt="student data" style={{ width: "90%" }}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
