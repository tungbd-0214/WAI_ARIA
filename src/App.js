import React from "react";
import "./App.css";
import BreadCrumb from "./components/breadcrumb/Breadcrumb";
import Table from "./components/table/Table";
import MinimalDataGrid from "./components/grid/minimalDataGrid/MinimalDataGrid";
import SortableDataGrid from "./components/grid/SortableDataGrid/SortableDataGrid";

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

	const grid1Items = [
		{date : "01-Jan-16", type : "Deposit" , description : {desc:"Cash Deposit", href:"#"} , amount : "$1,000,000.00" , balance : "$1,000,000.00"},
		{date : "02-Jan-16", type : "Debit" , description : {desc:"Down Town Grocery", href:"#"} , amount : "$250.00" , balance : "$999,750.00"},
		{date : "03-Jan-16", type : "Debit" , description : {desc:"Hot Coffee",href:"#"} , amount : "$9.00" , balance : "$999,741.00"},
		{date : "04-Jan-16", type : "Debit" , description : {desc:"The Filling Station", href:"#"} , amount : "$88.00" , balance : "$999,653.00"},
		{date : "05-Jan-16", type : "Debit" , description : {desc:"Tinker's Hardware", href:"#"} , amount : "$3,421.00" , balance : "$996,232.00"},
		{date : "06-Jan-16", type : "Debit" , description : {desc:"Cutey's Salon", href: "#"} , amount : "$700.00" , balance : "$995,532.00"},
	]
	const grid2Items = [
		{date : "01-Jan-16", type : "Deposit" , description :"Cash Deposit",category:"Income", amount : 1000000.00 , balance : "$1,000,000.00"},
		{date : "02-Jan-16", type : "Debit" , description :"Down Town Grocery",category:"Groceries", amount : 250.00 , balance : "$999,750.00"},
		{date : "03-Jan-16", type : "Debit" , description :"Hot Coffee",category:"Dining Out", amount : 9.00 , balance : "$999,741.00"},
		{date : "04-Jan-16", type : "Debit" , description :"The Filling Station", category:"Auto", amount : 88.00 , balance : "$999,653.00"},
		{date : "05-Jan-16", type : "Debit" , description :"Tinker's Hardware", category:"HouseHold", amount : 3421.00 , balance : "$996,232.00"},
		{date : "06-Jan-16", type : "Debit" , description :"Cutey's Salon", category:"Beauty", amount : 700.00 , balance : "$995,532.00"},
	]
 const categoryOptions = ['Income','Groceries','Dining Out','Auto','Household','Beauty']
  return (
    <React.Fragment>
      <BreadCrumb items={breadcrumbItems}/>
      <Table  description={tableDescription} contents={studensTable} />
			<MinimalDataGrid gridData={grid1Items} label="Minimal Data Grid"/>
			<SortableDataGrid gridData= {grid2Items} label="Sortable Data Grid with editable cells" category={categoryOptions}/>
    </React.Fragment>
  );
}

export default App;
