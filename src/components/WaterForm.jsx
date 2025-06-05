import React, { useRef, useState } from "react";

const WaterForm = ({ onAdd }) => {
  const amountRef = useRef();
  const timeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = amountRef.current.value;
    const time = timeRef.current.value;
    if (!amount || !time) return;
    onAdd({ amount: +amount, time });
    amountRef.current.value = "";
    timeRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={amountRef} type="number" placeholder="Amount (ml)" />
      <input ref={timeRef} type="time" />
      <button type="submit">Add Log</button>
    </form>
  );
};

export default WaterForm;
