import React from "react";
import styles from "./Breadcrumb.module.css";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = (props) => {
  const lastIndex = props.items.length - 1;
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol>
        {props.items.map((item,index) => <BreadcrumbItem href={item.href} label={item.label} key={item.href} current={index === lastIndex}/>)}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
