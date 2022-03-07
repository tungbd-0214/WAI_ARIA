import React from "react";
import "./App.css";
import BreadCrumb from "./components/breadcrumb/Breadcrumb";
import Table from "./components/table/Table";

function App() {
  const breadcrumbItems = [
    {
      label : "WAI-ARIA Authoring Practices 1.1",
      href : "../../",
    },
    {
      label : "Design Patterns",
      href : "../../#aria_ex",
    },
    {
      label : "Breadcrumb Pattern",
      href : "../../#aria_ex/#breadcrumb",
    },
    {
      label : "Breadcrumb Example",
      href : "../../#aria_ex/#breadcrumb/index.html",
    }
  ] 
 const studensTable = [
   ["First Name","Last Name","Company","Address","Unique Id"],
   ["Fred","JackSon","Acme, Inc.","123 Broad St.","Ahs12"],
   ["Sara","James","Acme, Inc.","123 Broad St.","Sgd26"],
   ["Ralph","Jefferson","XYZ, Inc.","456 Main St.","Hsu12"],
   ["Nancy","Jensen","XYZ, Inc.","456 Main St.","kgs98"]
  ]

const tableDescription = "Students currently enrolled in WAI-ARIA 101 for the coming semester"

  return (
    <React.Fragment >
      <BreadCrumb items={breadcrumbItems}/>
      <Table  description={tableDescription} contents={studensTable} />
    </React.Fragment>
  );
}

export default App;
