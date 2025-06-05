import React, { useState } from "react";
import WaterForm from "./components/WaterForm";
import WaterList from "./components/WaterList";
import { calculateTotal } from "./helpers/utils";

const App = () => {
  const [logs, setLogs] = useState([]);

  const handleAdd = (log) => {
    setLogs([...logs, log]);
  };

  const handleRemove = (index) => {
    const newLogs = logs.filter((_, i) => i !== index);
    setLogs(newLogs);
  };

  const handleReset = () => setLogs([]);

  const total = calculateTotal(logs);

  return (
    <div>
      <h1>Water Tracker</h1>
      <WaterForm onAdd={handleAdd} />
      <WaterList logs={logs} onRemove={handleRemove} />
      <p style={{ color: total > 3000 ? "red" : "black" }}>Total: {total}ml</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
