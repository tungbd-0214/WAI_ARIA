import React from "react";
import styles from "./Breadcrumb.module.css";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = (props) => {
  return (
    <nav aria-label="Breadcrumb" className={`${styles.breadcrumb}`}>
      <ol>
        {props.breadcrumbItems.map(Element => <BreadcrumbItem href={Element.href} label={Element.label} key={Math.random()}/>)}
      </ol>
    </nav>
  );
};
export default Breadcrumb;
