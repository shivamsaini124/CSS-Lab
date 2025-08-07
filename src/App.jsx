import React, { useState, useEffect } from "react";
import { ButtonSelector, DropDownSelector } from "./selector.jsx";
import { LayoutOptions } from "./layout.jsx";
import { SizingOptions } from "./sizing.jsx";
import { SpacingOptions } from "./spacing.jsx";
import "./App.css";
import { PositionOptions } from "./position.jsx";
import { BorderOptions } from "./border.jsx";

export default function App() {
  const [projectName, setProjectName] = useState("");
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true" ? true :false);
  const [selectedElement, setSelectedElement] = useState("");
  // Placeholder for generated CSS
  const [cssCode] = useState("/* CSS code will appear here */");

  // Effect to manage body class for dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
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
          onClick={() => setDarkMode((dm) => {
            localStorage.setItem("darkMode", !dm);
            return !dm
          })}
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
          <div className="code-header">CSS Code</div>
          {/* CSS Code Panel at the bottom left */}
          <div className="code-panel">
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
            <div className="css-options-header">CSS Options</div>
            <div className="css-options-container">
              <div className="css-section">
                <LayoutOptions darkMode={darkMode} />
                <div style={{ borderTop: darkMode ? "1px solid #4a5568" : "1px solid #eee", margin: "16px 0", transition: "border-color 0.3s ease" }} />
                <SizingOptions darkMode={darkMode} />
                <div style={{ borderTop: darkMode ? "1px solid #4a5568" : "1px solid #eee", margin: "16px 0", transition: "border-color 0.3s ease" }} />
                <SpacingOptions darkMode={darkMode} />
                <div style={{ borderTop: darkMode ? "1px solid #4a5568" : "1px solid #eee", margin: "16px 0", transition: "border-color 0.3s ease" }} />
                <PositionOptions darkMode={darkMode} />
                <div style={{ borderTop: darkMode ? "1px solid #4a5568" : "1px solid #eee", margin: "16px 0", transition: "border-color 0.3s ease" }} />
                <BorderOptions darkMode={darkMode} />
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