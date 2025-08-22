import React, { useContext } from 'react';
import { styleContext } from './context.jsx';
import { parseStyle, sanitizeStyleForContainer } from './main.jsx';

// Preview component to display the current style
export const Preview = ({ darkMode = false, style: manualStyle = {} }) => {
  const { style: contextStyle, setStyle } = useContext(styleContext);

  // Use manual style if provided (from Generate CSS button), otherwise use context style
  // This ensures all current changes from sidebar inputs are reflected when button is pressed
  const styleToUse = Object.keys(manualStyle).length > 0 ? manualStyle : contextStyle;

  // Parse and sanitize the style for safe display
  const parsedStyle = sanitizeStyleForContainer(parseStyle(styleToUse));

  // Debug: Log the current style to see if it's updating
  console.log('Preview component - manual style:', manualStyle);
  console.log('Preview component - context style:', contextStyle);
  console.log('Preview component - style to use:', styleToUse);
  console.log('Preview component - parsed style:', parsedStyle);

  // Apply styles with better visibility and proper handling
  const appliedStyle = {
    // Apply all parsed styles first
    ...parsedStyle,
    
    // Add transition for smooth changes
    transition: 'all 0.3s ease',
    
    // Ensure the element is visible with better defaults
    backgroundColor: parsedStyle.backgroundColor || (darkMode ? '#2d3748' : '#ffffff'),
    
    // Handle border properly - combine individual border properties
    border: parsedStyle.border || 
            `${parsedStyle.borderWidth || '2px'} ${parsedStyle.borderStyle || 'solid'} ${parsedStyle.borderColor || (darkMode ? '#4a5568' : '#3b82f6')}`,
    
    // Ensure the element has some content space
    padding: parsedStyle.padding || 
             `${parsedStyle.paddingTop || '20px'} ${parsedStyle.paddingRight || '20px'} ${parsedStyle.paddingBottom || '20px'} ${parsedStyle.paddingLeft || '20px'}`,
    
    // Handle margin properly
    margin: parsedStyle.margin || 
            `${parsedStyle.marginTop || '10px'} ${parsedStyle.marginRight || '10px'} ${parsedStyle.marginBottom || '10px'} ${parsedStyle.marginLeft || '10px'}`,
    
    // Ensure dimensions are applied
    width: parsedStyle.width || '150px',
    height: parsedStyle.height || '120px',
    
    // Handle flex/grid properties for gap to work
    display: parsedStyle.display || 'flex',
    flexDirection: parsedStyle.flexDirection || 'column',
    alignItems: parsedStyle.alignItems || 'center',
    justifyContent: parsedStyle.justifyContent || 'center',
    gap: parsedStyle.gap || '10px',
    
    // Ensure the element doesn't get too small
    minWidth: '80px',
    minHeight: '60px',
    
    // Add box-sizing for proper sizing calculation
    boxSizing: 'border-box'
  };

  // Separate text styles that won't be overridden
  const textStyles = {
    title: {
      fontSize: '14px', 
      fontWeight: '500', 
      marginBottom: '4px',
      color: '#000000'
    },
    subtitle: {
      fontSize: '11px', 
      opacity: 0.9,
      color: '#000000'
    }
  };

  console.log('Preview component - applied style:', appliedStyle);

  return (
    <div className="preview-container" style={{
      padding: '30px',
      backgroundColor: 'transparent',
      borderRadius: '8px',
      border: 'none',
      minHeight: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s ease, border-color 0.3s ease',
      height: "inherit"
    }}>
      <div className="styled-element" style={appliedStyle}>
        <div style={textStyles.title}>
          Preview Element
        </div>
        <div style={textStyles.subtitle}>
          Changes reflect here
        </div>
      </div>
    </div>
  );
};