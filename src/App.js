import { useEffect, useState } from "react";
import "./App.scss";
import { getStatistics } from "./Api";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStatistics().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <section className="container">
      <Main data={data} />
    </section>
  );
}

export default App;
