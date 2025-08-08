import React, { useContext } from 'react';
import { styleContext } from './context.jsx';
import { parseStyle, sanitizeStyleForContainer } from './main.jsx';


// Preview component to display the current style
export const Preview = () => {
  const { style, setStyle } = useContext(styleContext);

  const parsedStyle = sanitizeStyleForContainer(parseStyle(style));

  return (
    <div style={parsedStyle}>
      <h2>Preview</h2>
    </div>
  );
};