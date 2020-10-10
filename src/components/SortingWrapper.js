// This is your placeholder for all elements
import React, { useState, useEffect } from "react";
import SortingElement from "./SortingElement";

const SortingWrapper = ({ className, items, childRule, updateItems }) => {
  const [startId, setStartId] = useState(null);
  const [endId, setEndId] = useState(null);

  const drop = (e) => {
    e.preventDefault();
  };
  const modifyArray = () => {
    const finalArray = [...items];
    const temp = finalArray[startId];
    finalArray[startId] = finalArray[endId];
    finalArray[endId] = temp;

    updateItems(finalArray);
  };

  useEffect(() => {
    if ((startId != null) & (endId != null)) modifyArray();
  }, [endId]);

  const mapElements = () => {
    return items.map((element, index) => {
      return (
        <SortingElement
          key={index}
          id={index}
          callbackEnd={setEndId}
          callBackStart={setStartId}
        >
          {childRule(element)}
        </SortingElement>
      );
    });
  };
  return (
    <div
      className={className}
      onDrop={drop}
      onDragOver={(e) => e.preventDefault()}
    >
      {mapElements()}
    </div>
  );
};

export default SortingWrapper;
