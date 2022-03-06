import React from "react";
import styles from "./BreadcrumbItem.module.css";

const BreadcrumbItem = (props) => {
  return (
    <li className={`${styles["breadcrumbItem"]}`}>
      {props.label === "Breadcrumb Example" ? (
        <a href={props.href} aria-current="page">
          {props.label}
        </a>
      ) : (
        <a href={props.href}>{props.label}</a>
      )}
    </li>
  );
};

export default BreadcrumbItem;
