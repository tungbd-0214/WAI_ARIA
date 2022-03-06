import "./App.css";
import BreadCrumb from "./components/breadcrumb/Breadcrumb";

function App() {
  const breadcrumbItems = [
    {
      id : 1,
      label : "WAI-ARIA Authoring Practices 1.1",
      href : "../../",
    },
    {
      id : 2,
      label : "Design Patterns",
      href : "../../#aria_ex",
    },
    {
      id : 3,
      label : "Breadcrumb Pattern",
      href : "../../#aria_ex/#breadcrumb",
    },
    {
      id : 4,
      label : "Breadcrumb Example",
      href : "../../#aria_ex/#breadcrumb/index.html",
    }
  ] 
 
  return <BreadCrumb items={breadcrumbItems}/>;
}

export default App;
