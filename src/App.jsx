import React, { useState } from "react";
import { ButtonSelector, DropDownSelector } from "./components/selector";
import { LayoutOptions } from "./components/layout";
import { SizingOptions } from "./components/sizing";
import { SpacingOptions } from "./components/spacing";
import "./App.css";

export default function App() {
  const [projectName, setProjectName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState("");
  // Placeholder for generated CSS
  const [cssCode] = useState("/* CSS code will appear here */");

  return (
    <div className={"app-container"} style={darkMode ? { background: "#222" } : {}}>
      {/* Header */}
      <header className="app-header">
        <div className="logo-section">
          <div className="logo-circle" />
          <span className="logo-text">CSS Labs</span>
        </div>
        <input
          className="project-input"
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
        />
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(dm => !dm)}
        >
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Column: Preview + Code Panel */}
        <div className="left-column">
          <div className="preview-area">
            <div className="preview-box" />
          </div>
          {/* CSS Code Panel at the bottom left */}
          <div className="code-panel">
            <div className="code-header">CSS Code</div>
            <div className="code-output">
              <pre style={{ margin: 0, color: "#fff" }}>{cssCode}</pre>
            </div>
          </div>
        </div>
        {/* Sidebar (CSS Generator) */}
        <div className="sidebar-column">
          <aside className="sidebar">
            <div>
              <select
                className="select-element"
                value={selectedElement}
                onChange={e => setSelectedElement(e.target.value)}
              >
                <option value="" disabled>
                  Select the element to style
                </option>
                <option value="element1">Element 1</option>
                <option value="element2">Element 2</option>
              </select>
            </div>
            <div className="css-options-container">
              <div className="css-options-header">CSS Options</div>
              <div className="css-section">
                <LayoutOptions />
                <div style={{ borderTop: "1px solid #eee", margin: "16px 0" }} />
                <SizingOptions />
                <div style={{ borderTop: "1px solid #eee", margin: "16px 0" }} />
                <SpacingOptions />
                {/* Add Position and Border sections here if needed */}
              </div>
            </div>
            <button className="generate-css-btn">
              Generate CSS
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}