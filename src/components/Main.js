import React, { useEffect, useState } from "react";
import ListWrapper from "./ListWrapper";
import Search from "./Search";

const Main = ({ data = [] }) => {
  const [modifiedData, setModifiedData] = useState(data);

  const cleanData = () => {
    if (data && data.length) {
      return data.reduce((prev, curr) => {
        if (prev[curr.continent]) {
          prev[curr.continent].push(curr);
        } else {
          prev[curr.continent] = [curr];
        }

        return prev;
      }, {});
    }
    return {};
  };

  useEffect(() => {
    setModifiedData(cleanData());
  }, [data]);

  return (
    <section className="main_container">
      <Search />
      <ListWrapper data={modifiedData} />
    </section>
  );
};

export default Main;
