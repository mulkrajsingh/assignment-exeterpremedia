import React, { useState } from "react";

const List = ({ data, isExpanded, toggleView, name }) => {
  return (
    <section>
      <header
        onClick={() => toggleView(name)}
        className={`list_header ${isExpanded ? "expanded" : ''}`}
      >
        <span>{isExpanded ? "-" : "+"} </span>
        {name}
      </header>
      <section className={`table_wrapper ${isExpanded ? "visible" : ''}`}>
        <div className="table_container">
            <table className="table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Population</th>
                  <th>Total Covid Cases</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => {
                  return (
                    <tr key={item.time}>
                      <td>{item.country}</td>
                      <td>{item.population}</td>
                      <td>{item.cases.total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
        </div>
      </section>
    </section>
  );
};

export default List;
