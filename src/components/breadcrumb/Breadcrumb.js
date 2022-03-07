import React from "react";
import styles from "./Breadcrumb.module.css";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = (props) => {
  const lastIndex = props.items.length;
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol>
        {props.items.map(item => <BreadcrumbItem href={item.href} label={item.label} key={item.id} current={item.id === lastIndex ? true : false  }/>)}
      </ol>
    </nav>
  );
};
export default Breadcrumb;
