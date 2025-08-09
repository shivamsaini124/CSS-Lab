import { createContext, useState, useEffect } from "react";

export const styleContext = createContext(undefined);

// Enhanced StyleProvider component with useEffect for data management
export const StyleProvider = ({ children, initialStyle = {} }) => {
  const [style, setStyle] = useState(initialStyle);
  const [generatedCSS, setGeneratedCSS] = useState("");
  const [cssHistory, setCssHistory] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  // useEffect to load initial data from localStorage
  useEffect(() => {
    const loadStoredData = () => {
      try {
        const storedStyle = localStorage.getItem('csslab-style');
        const storedHistory = localStorage.getItem('csslab-history');
        
        if (storedStyle) {
          const parsedStyle = JSON.parse(storedStyle);
          setStyle(parsedStyle);
        }
        
        if (storedHistory) {
          const parsedHistory = JSON.parse(storedHistory);
          setCssHistory(parsedHistory);
        }
        
        setLastUpdated(new Date().toISOString());
      } catch (error) {
        console.error('Error loading stored data:', error);
      }
    };

    loadStoredData();
  }, []);

  // useEffect to save data to localStorage when style changes
  useEffect(() => {
    if (Object.keys(style).length > 0) {
      try {
        localStorage.setItem('csslab-style', JSON.stringify(style));
        setLastUpdated(new Date().toISOString());
      } catch (error) {
        console.error('Error saving style data:', error);
      }
    }
  }, [style]);

  // useEffect to update CSS history when generatedCSS changes
  useEffect(() => {
    if (generatedCSS && generatedCSS !== "/* CSS code will appear here */" && generatedCSS !== "/* Select styling options from the sidebar to generate CSS */") {
      setCssHistory(prev => {
        const newHistory = [...prev, {
          css: generatedCSS,
          timestamp: new Date().toISOString(),
          styleSnapshot: { ...style }
        }].slice(-10); // Keep only last 10 entries
        
        try {
          localStorage.setItem('csslab-history', JSON.stringify(newHistory));
        } catch (error) {
          console.error('Error saving CSS history:', error);
        }
        
        return newHistory;
      });
    }
  }, [generatedCSS, style]);

  // Function to export CSS
  const exportCSS = () => {
    if (!generatedCSS) return false;
    
    try {
      const blob = new Blob([generatedCSS], { type: 'text/css' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `csslab-styles-${new Date().toISOString().split('T')[0]}.css`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return true;
    } catch (error) {
      console.error('Error exporting CSS:', error);
      return false;
    }
  };

  // Function to copy CSS to clipboard
  const copyCSS = async () => {
    if (!generatedCSS) return false;
    
    try {
      await navigator.clipboard.writeText(generatedCSS);
      return true;
    } catch (error) {
      console.error('Error copying CSS:', error);
      return false;
    }
  };

  // Function to clear history
  const clearHistory = () => {
    setCssHistory([]);
    localStorage.removeItem('csslab-history');
  };

  // Function to load style from history
  const loadFromHistory = (historyItem) => {
    if (historyItem && historyItem.styleSnapshot) {
      setStyle(historyItem.styleSnapshot);
    }
  };

  const contextValue = {
    style,
    setStyle,
    generatedCSS,
    setGeneratedCSS,
    cssHistory,
    lastUpdated,
    exportCSS,
    copyCSS,
    clearHistory,
    loadFromHistory
  };

  return (
    <styleContext.Provider value={contextValue}>
      {children}
    </styleContext.Provider>
  );
};