import "./App.css";
import BreadCrumb from "./components/breadcrumb/Breadcrumb";

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
 
  return <BreadCrumb items={breadcrumbItems}/>;
}

export default App;
