import React from "react";

function TeacherLoginPage() {
  return (
    <div class="row d-flex justify-content-center">
      <div class="form margin-top col-md-3 text-center">
        <form class="text-center margin-bottom" action="/teacher/dashboard" >
          <p class="h4 mb-4">Teacher Login</p>
          <input type="email" id="password" class="form-control mb-4" placeholder="E-mail"/>
          <input type="password" id="password" class="form-control mb-4" placeholder="Password"/>

          <button href="teacher/dashboard" class="btn yellow-btn btn-block my-4" type="submit">Sign in</button>

          <p>Not a member?
              <a href="/signup"> Sign Up</a>
          </p>

          <p>or sign in with:</p>

          <a href="#" class="mx-2" role="button"><i class="fab fa-google light-blue-text"></i></a>

        </form>
      </div>
    </div>
  )
}

export default TeacherLoginPage;
