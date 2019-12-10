import React from "react";
import { Route, Switch } from "react-router-dom";

import ColorPage from "./pages/ColorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import StudentLoginPage from "./pages/StudentLoginPage";
import TeacherLoginPage from "./pages/TeacherLoginPage";
import StudentWaitingPage from "./pages/StudentWaitingPage";
import TeacherDashboardPage from "./pages/TeacherDashboardPage"
import DataPage from "./pages/DataPage"

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/color" component={ColorPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/login/teacher" component={TeacherLoginPage} />
        <Route exact path="/login/student" component={StudentLoginPage} />
        <Route exact path="/student/waiting" component={StudentWaitingPage} />
        <Route exact path="/teacher/dashboard" component={TeacherDashboardPage} />
        <Route exact path="/teacher/data" component={DataPage} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>



    );
  }
}

export default Routes;
