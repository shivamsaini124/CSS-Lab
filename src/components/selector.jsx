import { useState } from "react";

// 🔽 Dropdown Selector Component
export const DropDownSelector = ({ propertyName, options, state, setState }) => {
  const [localValue, setLocalValue] = useState(options[0]);
  const value = state !== undefined ? state : localValue;
  const handleChange = (e) => {
    const val = e.target.value;
    setState ? setState(val) : setLocalValue(val);
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}>
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
          backgroundColor: "#ccc",
          fontWeight: "bold",
          fontSize: 16,
          color: "#000",
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ color: "#000" }}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

// 🔘 Button Selector Component
export const ButtonSelector = ({ propertyName, options, state, setState }) => {
  const [localValue, setLocalValue] = useState(options[0].value);
  const value = state !== undefined ? state : localValue;
  const handleClick = (val) => {
    setState ? setState(val) : setLocalValue(val);
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}>
        {propertyName}
      </label>
      <div style={{ display: "flex", gap: 10 }}>
        {options.map(({ icon, value }) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            style={{
              padding: 8,
              borderRadius: 6,
              border: "none",
              fontSize: 20,
              width: 35,
              backgroundColor: value === value ? "#ccc" : "#eee",
              cursor: "pointer",
              userSelect: "none",
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
export const InputBox = ({ propertyName, value, onChange, style }) => {
  return (
    <div style={{ marginBottom: 10, ...style }}>
      <label style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}>
        {propertyName}
      </label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder="px"
        style={{
          width: "100%",
          padding: 8,
          borderRadius: 6,
          border: "none",
          backgroundColor: "#ccc",
          fontWeight: "bold",
          fontSize: 16,
          color: "#000",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

// 🔳 Small Input Box
export const InputBoxSmall = ({ propertyName, value, onChange, style }) => {
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
      <label style={{ fontWeight: "normal" }}>{propertyName}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder="px"
        style={{
          width: "60%",
          padding: 8,
          borderRadius: 6,
          border: "none",
          backgroundColor: "#ccc",
          fontWeight: "bold",
          fontSize: 16,
          color: "#000",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};