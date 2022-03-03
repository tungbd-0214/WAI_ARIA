import React from "react";
import "./BreadCrumb-item.css";
const BreadCrumb_Item = (props) => {
  return (
    <li>
      {props.item === "Breadcrumb Example" ? (
        <a href={props.href} aria-current="page">
          {props.item}
        </a>
      ) : (
        <a href={props.href}>{props.item}</a>
      )}
    </li>
  );
};

export default BreadCrumb_Item;
