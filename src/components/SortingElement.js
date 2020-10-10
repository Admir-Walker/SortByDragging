// Element of array that you want to sort

import React from "react";

const SortingElement = ({
  id,
  draggable = true,
  children,
  callBackStart,
  callbackEnd,
}) => {
  return (
    <div
      key={id}
      id={id}
      draggable={draggable}
      onDragStart={(e) => {
        callBackStart(e.target.id);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        callbackEnd(id);
      }}
    >
      {children}
    </div>
  );
};

export default SortingElement;
