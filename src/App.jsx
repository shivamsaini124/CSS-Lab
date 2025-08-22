import React, { useState, useEffect, useContext } from "react";
import { ButtonSelector, DropDownSelector } from "./selector.jsx";
import { LayoutOptions } from "./layout.jsx";
import { SizingOptions } from "./sizing.jsx";
import { SpacingOptions } from "./spacing.jsx";
import "./App.css";
import { PositionOptions } from "./position.jsx";
import { BorderOptions } from "./border.jsx";
import { Preview } from "./preview.jsx";
import { styleContext } from "./context.jsx";
import { createCSS, parseStyle } from "./main.jsx";

export default function App() {

  const { style, setStyle, generatedCSS, setGeneratedCSS, exportCSS, copyCSS } = useContext(styleContext);

  const [projectName, setProjectName] = useState("");
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true" ? true :false);
  const [selectedElement, setSelectedElement] = useState("");
  // Use generatedCSS from context instead of local state
  const [cssCode, setCssCode] = useState(generatedCSS || "/* CSS code will appear here */");
  // Add state to track when preview should update - will contain the current context style
  const [previewStyle, setPreviewStyle] = useState({});
  // Add state to track copy feedback
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Effect to manage body class for dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Sync with context generatedCSS
  useEffect(() => {
    if (generatedCSS) {
      setCssCode(generatedCSS);
    }
  }, [generatedCSS]);

  const handleExportCSS = async () => {
    if (exportCSS) {
      const success = exportCSS();
      if (success) {
        // Could add a toast notification here
        console.log('CSS exported successfully');
      }
    }
  };

  const handleCopyCSS = async () => {
    if (copyCSS) {
      const success = await copyCSS();
      if (success) {
        // Could add a toast notification here
        console.log('CSS copied to clipboard');
        setCopyFeedback(true);
        setTimeout(() => {
          setCopyFeedback(false);
        }, 2000);
      }
    }
  };

  const handleGenerateCSS = () => {
    // This button now serves as a manual refresh/regenerate
    // The CSS is already being generated automatically via useEffect
    const currentStyle = Object.keys(style).length > 0 ? style : {
      layout: { display: "flex" },
      sizing: { width: "100px", height: "100px" },
      spacing: { padding: "10px" },
      border: { borderWidth: "1px", borderStyle: "solid", borderColor: "#000000" },
      extras: { backgroundColor: "#ffffff" }
    };
    
    const newCssCode = createCSS(parseStyle(currentStyle));
    setCssCode(newCssCode);
    
    // Update the context's generatedCSS as well
    if (setGeneratedCSS) {
      setGeneratedCSS(newCssCode);
    }
    
    // Update the preview style with the current context style
    setPreviewStyle(style);
    
    // Provide feedback that manual generation occurred
    console.log('CSS manually regenerated:', newCssCode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Header */}
      <header className="app-header">
        <div className="logo-section">
          <div className="logo-circle" />
          <span className="logo-text">CSS Labs</span>
        </div>
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
            <Preview darkMode={darkMode} style={previewStyle} />
          </div>
          <div style={{backgroundColor: "#2d3748"}}>
            <div className="code-header">
              CSS Code
              <div className="css-actions" style={{ 
                display: 'flex', 
                gap: '8px', 
                marginLeft: 'auto',
                fontSize: '12px'
              }}>
                <button 
                  onClick={handleCopyCSS}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#4299e1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '11px'
                  }}
                >
                  {copyFeedback ? "Copied!" : "Copy"}
                </button>
                <button 
                  onClick={handleExportCSS}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#38b2ac',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '11px'
                  }}
                >
                  Export
                </button>
              </div>
            </div>
            {/* CSS Code Panel at the bottom left */}
            <div className="code-panel">
              <div className="code-output">
                <pre style={{ margin: 0, color: "#fff" }}>{cssCode}</pre>
              </div>
            </div>
          </div>
          
        </div>
        {/* Sidebar (CSS Generator) */}
        <div className="sidebar-column">
          <aside className="sidebar">
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
            <button 
              className="generate-css-btn"
              onClick={handleGenerateCSS}
            >
              Generate CSS
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}