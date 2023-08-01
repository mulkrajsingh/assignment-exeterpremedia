import React, { useState } from "react";
import List from "./List";

const ListWrapper = ({ data }) => {
  const [expandedItem, setExpandedItem] = useState("");

  const toggleView = (name) => {
    if (expandedItem === name) {
      setExpandedItem("");
    } else {
      setExpandedItem(name);
    }
  };

  return (
    <section>
      {Object.keys(data).map((name, i) => {
        const item = data[name];

        return (
          <List
            key={`${name}_${i}`}
            name={name}
            data={item}
            isExpanded={expandedItem === name}
            toggleView={toggleView}
          />
        );
      })}
    </section>
  );
};

export default ListWrapper;
