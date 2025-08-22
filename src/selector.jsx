import { useState } from "react";

// 🔽 Dropdown Selector Component
export const DropDownSelector = ({ propertyName, options, state, setState, darkMode = false }) => {
  const [localValue, setLocalValue] = useState(options[0]);
  const value = state !== undefined ? state : localValue;
  const handleChange = (e) => {
    const val = e.target.value;
    setState ? setState(val) : setLocalValue(val);
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ 
        fontWeight: "normal", 
        display: "block", 
        marginBottom: 6,
        color: darkMode ? "#fff" : "#000",
        transition: "color 0.3s ease"
      }}>
        {propertyName}
      </label>
      <select
        value={value}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: 8,
          borderRadius: 6,
          border: "none",
          backgroundColor: darkMode ? "#4a5568" : "#ccc",
          fontWeight: "bold",
          fontSize: 16,
          color: darkMode ? "#fff" : "#000",
          transition: "background-color 0.3s ease, color 0.3s ease"
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ 
            color: darkMode ? "#fff" : "#000",
            backgroundColor: darkMode ? "#4a5568" : "#ccc"
          }}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

// 🔘 Button Selector Component
export const ButtonSelector = ({ propertyName, options, state, setState, darkMode = false, updateStyle}) => {
  const [localValue, setLocalValue] = useState(options[0].value);
  const value = state !== undefined ? state : localValue;
  const handleClick = (val) => {
    setState ? setState(val) : setLocalValue(val);
    updateStyle(val);
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ 
        fontWeight: "normal", 
        display: "block", 
        marginBottom: 6,
        color: darkMode ? "#fff" : "#000",
        transition: "color 0.3s ease"
      }}>
        {propertyName}
      </label>
      <div style={{ display: "flex", gap: 10 }}>
        {options.map(({ icon, value: optionValue }) => (
          <button
            key={optionValue}
            onClick={() => handleClick(optionValue)}
            style={{
              padding: 8,
              borderRadius: 6,
              border: "none",
              fontSize: 20,
              width: 35,
              backgroundColor: optionValue === value 
                ? (darkMode ? "#2d3748" : "#ccc") 
                : (darkMode ? "#4a5568" : "#eee"),
              color: darkMode ? "#fff" : "#000",
              cursor: "pointer",
              userSelect: "none",
              transition: "background-color 0.3s ease, color 0.3s ease"
            }}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
};

// 🔲 Standard Input Box
export const InputBox = ({ propertyName, value, onChange, style, darkMode = false }) => {
  return (
    <div style={{ marginBottom: 10, ...style }}>
      <label style={{ 
        fontWeight: "normal", 
        display: "block", 
        marginBottom: 6,
        color: darkMode ? "#fff" : "#000",
        transition: "color 0.3s ease"
      }}>
        {propertyName}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="px"
        style={{
          width: "100%",
          padding: 8,
          borderRadius: 6,
          border: "none",
          backgroundColor: darkMode ? "#4a5568" : "#ccc",
          fontWeight: "bold",
          fontSize: 16,
          color: darkMode ? "#fff" : "#000",
          boxSizing: "border-box",
          transition: "background-color 0.3s ease, color 0.3s ease"
        }}
      />
    </div>
  );
};

// 🔳 Small Input Box
export const InputBoxSmall = ({ propertyName, value, onChange, style, darkMode = false , updateStyle}) => {
  const handleChange = (e) => {
    if(onChange) onChange();
    updateStyle(e.target.value);
  }
  return (
    <div
      style={{
        marginBottom: 5,
        display: "flex",
        justifyContent: "space-between",
        width: "45%",
        alignItems: "center",
        gap: 8,
        paddingRight: 10,
        ...style,
      }}
    >
      <label style={{ 
        fontWeight: "normal",
        color: darkMode ? "#fff" : "#000",
        transition: "color 0.3s ease"
      }}>
        {propertyName}
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="px"
        style={{
          width: "60%",
          padding: 8,
          borderRadius: 6,
          border: "none",
          backgroundColor: darkMode ? "#4a5568" : "#ccc",
          fontWeight: "bold",
          fontSize: 16,
          color: darkMode ? "#fff" : "#000",
          boxSizing: "border-box",
          transition: "background-color 0.3s ease, color 0.3s ease"
        }}
      />
    </div>
  );
};

export const ColorInputBoxSmall = ({propertyName, value, onChange, style, darkMode = false}) => {
  return (
    <div
      style={{
        marginBottom: 5,
        display: "flex",
        justifyContent: "space-between",
        width: "45%",
        alignItems: "center",
        gap: 8,
        paddingRight: 10,
        ...style,
      }}
    >
      <label style={{ 
        fontWeight: "normal",
        color: darkMode ? "#fff" : "#000",
        transition: "color 0.3s ease"
      }}>
        {propertyName}
      </label>
      <input
        type="color"
        value={value}
        onChange={onChange}
        placeholder="px"
        style={{
          height: "100%",
          width: "60%",
          padding: 4,
          borderRadius: 6,
          border: "none",
          backgroundColor: darkMode ? "#4a5568" : "#ccc",
          fontWeight: "bold",
          fontSize: 16,
          color: darkMode ? "#fff" : "#000",
          boxSizing: "border-box",
          transition: "background-color 0.3s ease, color 0.3s ease"
        }}
      />
    </div>
  )
}