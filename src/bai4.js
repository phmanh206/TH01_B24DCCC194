import React, {useState} from "react";

function StudentCard({name, age, className}) {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        margin: 10,
        borderRadius: 8,
      }}
    >
      <h3>{name}</h3>
      <button onClick={() => setShow(!show)}>
        {show ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {show && (
        <p>
          Tuổi: {age} - Lớp: {className}
        </p>
      )}
    </div>
  );
}

function StudentApp() {
  const students = [
    {name: "Nguyễn Văn A", age: 20, className: "CNTT1"},
    {name: "Trần Thị B", age: 21, className: "CNTT2"},
    {name: "Lê Văn C", age: 19, className: "CNTT3"},
  ];

  return (
    <div style={{padding: 20}}>
      {students.map((s, i) => (
        <StudentCard
          key={i}
          name={s.name}
          age={s.age}
          className={s.className}
        />
      ))}
    </div>
  );
}

export default StudentApp;
