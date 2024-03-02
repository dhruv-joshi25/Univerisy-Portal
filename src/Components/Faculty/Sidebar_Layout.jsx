import React from "react";
import FactSidebar from "./Fact_Sidebar";

const FactLayout = ({ Content }) => {
  return <>{<FactSidebar>{Content}</FactSidebar>}</>;
};

export default FactLayout;
