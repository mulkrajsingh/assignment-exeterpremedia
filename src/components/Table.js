import React from "react";

const Table = ({ data }) => {
  return (
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
              <tr key={`${item.country}_${item.time}`}>
                <td>{item.country ?? "-"}</td>
                <td>{item.population ?? "-"}</td>
                <td>{item.cases.total ?? "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
