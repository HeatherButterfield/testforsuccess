import React from "react";

function SignUpPage() {
  return (
    <div class="row d-flex justify-content-center">
      <div class="form margin-top col-md-3 text-center">
        <form class="text-center margin-bottom" action="/teacher/dashboard">
          <p class="h4 mb-4">Please Enter Your Info</p>
          <input type="fname" id="fname" class="form-control mb-4" placeholder="First Name"/>
          <input type="lname" id="lname" class="form-control mb-4" placeholder="Last Name"/>
          <input type="facultyid" id="facultyid" class="form-control mb-4" placeholder="Faculty ID"/>
          <input type="email" id="email" class="form-control mb-4" placeholder="E-mail"/>
          <input type="password" id="password" class="form-control mb-4" placeholder="Password"/>

          <button href="/teacher/dashboard" class="btn yellow-btn btn-block my-4" type="submit">Create Account</button>
        </form>
        <a href="#">
          <button class="btn yellow-btn btn-block my-4 text-dark" type="submit"><i class="fab fa-google light-blue-text"></i> Sign up with Google</button>
        </a>
      </div>
    </div>
  )
}

export default SignUpPage;
