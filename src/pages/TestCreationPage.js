import React from "react";

function TestCreationPage() {
  return (

      <div class="container-fluid">
          <div class="row d-flex bd-highlight text-white align-items">
            <div id="YellowContainer" class="col-lg-4 p-2 bd-highlight bg-warning">
              <div class="border-0 card">

                <div class="card-body bg-warning">

                  <i class="d-flex fas fa-edit fa-5x justify-content-center pb-5"></i>
                  <form>

                    <div class="form-group row mr-0 ml-0">
                      <div class="col-sm-12">
                        <select class="browser-default custom-select custom-select-lg ">
                          <option selected>Select Class</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group row mr-0 ml-0">
                      <div class="col-sm-12">
                        <select class="browser-default custom-select custom-select-lg ">
                          <option selected>Select Student</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group row mr-0 ml-0">
                      <div class="col-sm-12">
                        <select class="browser-default custom-select custom-select-lg ">
                          <option selected>Select Test</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="col-sm-12">
                        <a href="#" class="d-flex align-self-end btn btn-primary justify-content-center"><h5 class="m-0">Test Student</h5></a>
                      </div>
                    </div>
                  </form>
                </div>

              </div>

            </div>

            <div id="GreenContainer" class="col-lg-4 p-2 bd-highlight bg-success">
              <div class="border-0 card">
                <div class="card-body bg-success">

                  <i class="d-flex fas fa-chart-bar fa-5x justify-content-center pb-5"></i>
                  <form>
                    <div class="form-group row mr-0 ml-0">
                      <div class="col-sm-12">
                        <select class="browser-default custom-select custom-select-lg ">
                          <option selected>Select Student</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="col-sm-12">
                        <a href="#" class="d-flex btn btn-primary justify-content-center"><h5 class="m-0">View Student Data</h5></a>
                      </div>
                    </div>

                    <div class="form-group row mr-0 ml-0">
                      <div class="d-flex col-sm-12 justify-content-center text-dark">
                        <h4>OR</h4>
                      </div>
                    </div>

                    <div class="form-group row mr-0 ml-0">
                      <div class="col-sm-12">
                        <select class="browser-default custom-select custom-select-lg ">
                          <option selected>Select Class</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="col-sm-12">
                        <a href="#" class="d-flex btn btn-primary justify-content-center"><h5 class="m-0">View Class Data</h5></a>
                      </div>
                    </div>

                  </form>

                </div>

              </div>
            </div>

            <div id="RedContainer" class="col-lg-4 p-2 bd-highlight bg-danger">
              <div class="border-0 card">
                <div class="card-body bg-danger">

                  <i class="d-flex fas fa-cogs fa-5x justify-content-center pb-5"></i>
                  <form>
                    <div class="form-group row mr-0 ml-0">
                      <div class="col-sm-12">
                        <select class="browser-default custom-select custom-select-lg ">
                          <option selected>Select Class</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="col-sm-12">
                        <a href="#" class="d-flex btn btn-primary justify-content-center"><h5 class="m-0">Edit Class</h5></a>
                      </div>
                    </div>

                    <div class="form-group row mr-0 ml-0">
                      <div class="d-flex col-sm-12 justify-content-center text-dark">
                        <h4>OR</h4>
                      </div>
                    </div>

                    <div class="form-group row mr-0 ml-0">
                      <div class="col-sm-12">
                        <select class="browser-default custom-select custom-select-lg ">
                          <option selected>Select Test</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="d-flex col-sm-12 flex-row">
                        <a href="#" class="btn btn-primary flex-fill"><h5 class="m-0">Modify Test</h5></a>
                      </div>
                    </div>

                  </form>

                </div>

              </div>
            </div>
          </div>

      </div>

  )
}

export default TestCreationPage;
