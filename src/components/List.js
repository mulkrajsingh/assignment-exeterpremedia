import React, { useState } from "react";
import Table from "./Table";

const List = ({ data, isExpanded, toggleView, name }) => {
  return (
    <section className="list_container">
      <header
        onClick={() => toggleView(name)}
        className={`list_header ${isExpanded ? "expanded" : ""}`}
      >
        <span>{isExpanded ? "-" : "+"} </span>
        {name}
      </header>
      <section className={`table_wrapper ${isExpanded ? "visible" : ""}`}>
          <Table data={data} />
      </section>
    </section>
  );
};

export default List;
