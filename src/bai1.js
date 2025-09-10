import React from "react";

function NumberViewer({ current }) {
  return <p style={{ fontSize: 24 }}>Số hiện tại: {current}</p>;
}

function SimpleCounter() {
  const [number, updateNumber] = React.useState(0);

  const increase = () => updateNumber(prev => prev + 1);
  const decrease = () => updateNumber(prev => prev - 1);

  return (
    <section style={{ padding: 30, textAlign: "center" }}>
      <h1>👆 Bộ đếm số 👇</h1>
      <NumberViewer current={number} />
      <div style={{ marginTop: 10 }}>
        <button onClick={decrease} style={{ marginRight: 10 }}>Giảm</button>
        <button onClick={increase}>Tăng</button>
      </div>
    </section>
  );
}
export default SimpleCounter;
