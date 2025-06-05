import React from "react";

const WaterList = ({ logs, onRemove }) => {
  return (
    <ul>
      {logs.map((log, index) => (
        <li key={index}>
          {log.amount}ml at {log.time}{" "}
          <button onClick={() => onRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default WaterList;
