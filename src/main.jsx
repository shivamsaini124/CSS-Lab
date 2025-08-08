import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {styleContext} from "./context.jsx"

export function createCSS(styleObj) {
  function toKebabCase(str) {
    return str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
  }

  return Object.entries(styleObj)
    .map(([key, value]) => `${toKebabCase(key)}: ${value};\n`)
    .join('');
}

const defaultStyle = {
  layout: {
    display: "flex",
    flex: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      flexWrap: "wrap",
      gap: "10px"
    },
    grid: {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto",
      justifyItems: "start",
      alignItems: "start",
      gap: "0px"
    }
  },

  sizing: {
    width: "100px",
    maxWidth: "100px",
    height: "100px",
    maxHeight: "100px",
    minWidth: "50px",
    minHeight: "50px"
  },

  spacing: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "10px",
    marginRight: "10px"
  },

  position: {
    position: "fixed",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    zIndex: 1
  },

  border: {
    borderWidth: "1px",
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: "20px"
  },

  extras: {
    backgroundColor: "#ffffff",
  }
};

export function parseStyle(styleObj) {
  const result = {};

  // 1. Layout (display + flex/grid props)
  if (styleObj.layout) {
    const { display, flex, grid } = styleObj.layout;
    if (display) result.display = display;

    if (display === "flex" && flex) {
      Object.assign(result, flex);
    } else if (display === "grid" && grid) {
      Object.assign(result, grid);
    }
  }

  // 2. Merge other style groups
  const styleGroups = ["sizing", "spacing", "position", "border", "extras"];
  styleGroups.forEach(group => {
    if (styleObj[group] && typeof styleObj[group] === "object") {
      Object.assign(result, styleObj[group]);
    }
  });

  return result;
}

export function sanitizeStyleForContainer(flatStyle) {
  const disallowedProps = ["position", "top", "left", "right", "bottom", "zIndex"];

  const safeStyle = {};
  for (const key in flatStyle) {
    if (!disallowedProps.includes(key)) {
      safeStyle[key] = flatStyle[key];
    }
  }
  return safeStyle;
}


function Root() {
  const [style, setStyle] = useState(defaultStyle);
  return (
    <StrictMode>
      <styleContext.Provider value={{ style, setStyle }}>
        <App />
      </styleContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(
  <Root />
);
