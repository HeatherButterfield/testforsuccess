import React from "react";

function StudentLoginPage() {
  return (
    <div>
      <div class="margin-top text-center">
        <label for="password" data-error="wrong" data-success="right" class="h1-responsive margin-top">Teacher ID</label>
        <br/>
        <input type="password" id="password" class="form-control-lg validate margin-top"/>
        <br/>
        <a href="/student/home" class="btn text-dark yellow accent-1 btn-lg margin-top" style={{width: "250px"}}>Sign in</a>
      </div>
    </div>
  )
}

export default StudentLoginPage;
