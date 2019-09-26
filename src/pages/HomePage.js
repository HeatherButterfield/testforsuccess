import React from "react";
import Header from "../assets/homePageHeader.jpg"
import Card1 from "../assets/homePageCard1.jpg"
import Card2 from "../assets/homePageCard2.jpg"

function HomePage() {
  return (
    <div>
      <div class="card card-image margins-2" style={{ backgroundImage: `url(${Header})`, backgroundSize: "cover" }}>
        <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
          <div>
            <h3 class="card-title pt-2"><strong>Welcome to Test for Success!</strong></h3>
            <p class="margins-20">We are a testing software designed for elementary school teachers. Dicover how easy it is to create tests and then quickly test a student’s reading ability (letters, letter sounds, simple sight words, vowel families, etc) 1 on 1. Student test data is at your fingertips. You can view and download student scores so you can target students for interventions.</p>
            <a href="" className="btn btn-rounded yellow accent-1 text-dark">Sign up!</a>
            <a href="" className="btn btn-rounded btn-outline-white waves-effect">Login</a>
          </div>
        </div>
      </div>
      <div className="cardContainer">
        <div class="card margins-2 half">
          <img class="card-img-top" src={Card1} alt="Card image cap"></img>
          <div class="card-body">
            <h4 class="card-title text-center"><a>Easily test students one on one</a></h4>
          </div>
        </div>
        <div class="card margins-2 half">
          <img class="card-img-top" src={Card2} alt="Card image cap"></img>
          <div class="card-body">
            <h4 class="card-title text-center"><a>View student test data</a></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
