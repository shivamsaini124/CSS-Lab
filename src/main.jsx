import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {styleContext} from "./context.jsx"

const style = {
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
    width: "50px",
    maxWidth: "100px",
    height: "50px",
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
    position: "relative",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    zIndex: 1
  }
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <styleContext.Provider value={style}>
      <App />
    </styleContext.Provider>
  </StrictMode>,
)
