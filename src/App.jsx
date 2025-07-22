import React, { useState } from "react";

const options = {
  display: ["flex", "block", "grid", "inline"],
  justifyContent: ["Center", "Start", "End", "Space Between"],
  alignItem: ["Center", "Start", "End", "Stretch"],
  alignContent: ["Center", "Start", "End", "Stretch"],
  wrap: ["No Wrap", "Wrap", "Wrap Reverse"],
};

export default function App() {
  const [display, setDisplay] = useState("flex");
  const [direction, setDirection] = useState("right");
  const [justifyContent, setJustifyContent] = useState("Center");
  const [alignItem, setAlignItem] = useState("Center");
  const [alignContent, setAlignContent] = useState("Center");
  const [wrap, setWrap] = useState("No Wrap");

  const directions = [
    { icon: "→", value: "right" },
    { icon: "↓", value: "down" },
    { icon: "←", value: "left" },
    { icon: "↑", value: "up" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#b9d1f9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: 320,
          borderRadius: 10,
          boxSizing: "border-box",
        }}
      >
        {/* Dropdown at top */}
        <select
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 6,
            border: "none",
            marginBottom: 20,
            fontSize: 16,
            fontWeight: 500,
          }}
          defaultValue=""
        >
          <option value="" disabled>
            Select the element to style
          </option>
          <option>Element 1</option>
          <option>Element 2</option>
        </select>

        {/* White box with rounded top left */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "30px 0 0 0",
            padding: "20px 15px",
            boxSizing: "border-box",
            fontWeight: "bold",
            marginBottom: 10,
            fontSize: 18,
            color: "#00234a",
          }}
        >
          CSS Options
        </div>

        {/* Panel container */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 6,
            boxShadow: "0 0 2px rgba(0,0,0,0.1)",
            padding: 10,
            fontWeight: "bold",
            fontSize: 14,
            color: "#000",
          }}
        >
          {/* Layout Header */}
          <div
            style={{
              borderBottom: "1px solid #ddd",
              paddingBottom: 5,
              marginBottom: 10,
            }}
          >
            Layout
          </div>

          {/* Display */}
          <div style={{ marginBottom: 10 }}>
            <label
              style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}
            >
              Display
            </label>
            <select
              value={display}
              onChange={(e) => setDisplay(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "none",
                backgroundColor: "#ccc",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {options.display.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Direction */}
          <div style={{ marginBottom: 10 }}>
            <label
              style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}
            >
              Direction
            </label>
            <div style={{ display: "flex", gap: 10 }}>
              {directions.map(({ icon, value }) => (
                <button
                  key={value}
                  onClick={() => setDirection(value)}
                  style={{
                    padding: 8,
                    borderRadius: 6,
                    border: "none",
                    fontSize: 20,
                    backgroundColor: direction === value ? "#ccc" : "#eee",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Justify Content */}
          <div style={{ marginBottom: 10 }}>
            <label
              style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}
            >
              Justify Content
            </label>
            <select
              value={justifyContent}
              onChange={(e) => setJustifyContent(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "none",
                backgroundColor: "#ccc",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {options.justifyContent.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Align Item */}
          <div style={{ marginBottom: 10 }}>
            <label
              style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}
            >
              Align Item
            </label>
            <select
              value={alignItem}
              onChange={(e) => setAlignItem(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "none",
                backgroundColor: "#ccc",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {options.alignItem.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Align Content */}
          <div style={{ marginBottom: 10 }}>
            <label
              style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}
            >
              Align Content
            </label>
            <select
              value={alignContent}
              onChange={(e) => setAlignContent(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "none",
                backgroundColor: "#ccc",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {options.alignContent.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Wrap */}
          <div>
            <label
              style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}
            >
              Wrap
            </label>
            <select
              value={wrap}
              onChange={(e) => setWrap(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "none",
                backgroundColor: "#ccc",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {options.wrap.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Bottom button */}
        <button
          style={{
            width: "100%",
            marginTop: 20,
            padding: 15,
            backgroundColor: "#00234a",
            borderRadius: 12,
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            border: "none",
            cursor: "pointer",
          }}
        >
          Generate CSS
        </button>
      </div>
    </div>
  );
}