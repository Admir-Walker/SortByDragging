import Axios from "axios";
import React, { useState, useEffect } from "react";

import SortingWrapper from "./SortingWrapper";

const App = () => {
  const [elements, setElements] = useState([]);

  const getData = async () => {
    const result = await Axios.get(
      "https://randomapi.com/api/12e6ea4ecf6533abdf979ad13b92e17c"
    );
    setElements(result.data.results[0]);
  };
  useEffect(() => {
    getData();
  }, []);

  const stylingItemRule = (element) => {
    return (
      <div style={{ border: "red dotted 1px" }}>
        <h1>{element.name}</h1>
        <h2>{element.surname}</h2>
      </div>
    );
  };
  return (
    <div>
      <SortingWrapper
        items={elements}
        updateItems={setElements}
        childRule={stylingItemRule}
      />
    </div>
  );
};

export default App;
