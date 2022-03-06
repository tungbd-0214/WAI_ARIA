import React from "react";
import styles from "./Breadcrumb.module.css";
import BreadcrumbItem from "./BreadcrumbItem";

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

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className={`${styles.breadcrumb}`}>
      <ol>
        {breadcrumbItems.map(Element => <BreadcrumbItem href={Element.href} label={Element.label} key={Math.random()}/>)}
      </ol>
    </nav>
  );
};
export default Breadcrumb;
