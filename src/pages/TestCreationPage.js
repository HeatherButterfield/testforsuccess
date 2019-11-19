import React from "react";
import "../index.css";

function TestCreationPage() {
  return (

      <div class="container-fluid">
        <div class="d-flex bd-highlight text-white">
          <div class="p-2 flex-fill bd-highlight bg-warning">

            <div class="border-0 card">


              <div class="card-body bg-warning">

                <i class="d-flex fas fa-edit fa-5x justify-content-center"></i>
                <p class="card-text"></p>
                <a href="#" class="d-flex btn btn-primary align-items-stretch justify-content-center"><h5 class="m-0">Edit Class</h5></a>

              </div>

            </div>

          </div>

          <div class="p-2 flex-fill bd-highlight bg-success">
            <div class="border-0 card">

              <div class="card-body bg-success">
                <i class="d-flex fas fa-chart-bar fa-5x justify-content-center"></i>
                <p class="card-text"></p>
                <a href="#" class="d-flex btn btn-primary align-items-stretch justify-content-center"><h5 class="m-0">Edit Class</h5></a>
              </div>

            </div>
          </div>

          <div class="p-2 flex-fill bd-highlight bg-danger">
            <div class="border-0 card">
              <div class="card-body bg-danger">

                <i class="d-flex fas fa-cogs fa-5x justify-content-center pb-3"></i>
                <p class="card-text"></p>
                <form>
                  <div class="form-group row">
                    <label for="classSelection" class="col-sm-3 col-form-label"><h5>Class</h5></label>
                    <div class="col-sm-8">
                      <select class="form-control" id="classSelection">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </form>
                <a href="#" class="d-flex btn btn-primary align-items-stretch justify-content-center"><h5 class="m-0">Edit Class</h5></a>

                  <label class="mdb-main-label">Blue select</label>
                  <select class="mdb-select md-form colorful-select dropdown-danger">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>
                  </select>
                <a href="#" class="d-flex btn btn-primary align-items-stretch justify-content-center"><h5 class="m-0">Modify Test</h5></a>


              </div>

            </div>
          </div>
        </div>
      </div>

  )
}

export default TestCreationPage;
