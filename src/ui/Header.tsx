import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFEECC",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontWeight: "1000",
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
          }}
        >
          TS-Todolist-lv1
        </span>
      </div>
      <span>LeeAhnjin</span>
    </div>
  );
};

export default Header;
