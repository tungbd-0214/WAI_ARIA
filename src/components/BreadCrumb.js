import React from "react";
import "./BreadCrumb.css";
import BreadCrumb_Item from "./BreadCrumb-item";
const BreadCrumb = () => {
  return (
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <BreadCrumb_Item
          href="../../"
          item="WAI-ARIA Authoring Practices 1.1"
        />
        <BreadCrumb_Item href="../../#aria_ex" item="Design Patterns" />
        <BreadCrumb_Item href="../../#breadcrumb" item="Breadcrumb Pattern" />
        <BreadCrumb_Item href="./index.html" item="Breadcrumb Example" />
      </ol>
    </nav>
  );
};

export default BreadCrumb;
