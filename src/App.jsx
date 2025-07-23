import React, { useState } from "react";
import { ButtonSelector, DropDownSelector } from "./components/selector";
import { LayoutOptions } from "./components/layout";


export default function App() {
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
        <LayoutOptions/>

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