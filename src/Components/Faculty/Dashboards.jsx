import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FactSidebar from "./FactSidebar";
import FactProfile from "./FactProfile";
import UploadResources from "./UploadResources";
import FactCourse from "./FactCourse";
import LectureSchedule from "./LectureSchedule";

const FacultyDashboard = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Faculty/Fact_Profile">
          <FactSidebar Content={<FactProfile />} />
        </Route>
        <Route path="/Faculty/UploadResources">
          <FactSidebar Content={<UploadResources />} />
        </Route>
        <Route path="/Faculty/Fact_course">
          <FactSidebar Content={<FactCourse />} />
        </Route>
        <Route path="/Faculty/Lecture_schedule">
          <FactSidebar Content={<LectureSchedule />} />
        </Route>
        {/* Add more routes for additional features */}

        {/* Default route */}
        <Route path="/">
          <FactSidebar Content={<FactProfile />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default FacultyDashboard;
