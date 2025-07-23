import {useState} from 'react';

//Component for selection using buttons
export const DropDownSelector = ({propertyName, options, state, setState})=> {
    let property, setProperty;
    if(state === undefined || setState === undefined){
        [property, setProperty] = useState(options[0]);
    }
    else{
        property = state;
        setProperty = setState;
    }
    

    return (
        <div style={{ marginBottom: 10 }}>
            <label
                style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}
            >
                {propertyName}
            </label>
            <select
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "none",
                backgroundColor: "#ccc",
                fontWeight: "bold",
                fontSize: 16,
                }}
            >
                {options.map((opt) => (
                <option key={opt} value={opt}>
                    {opt}
                </option>
                ))}
            </select>
        </div>
    );
    
}

//Component for selection using buttons
export const ButtonSelector = ({propertyName, options}) => {
    const [property, setProperty] = useState(options[0].value);

    return (
        <div style={{ marginBottom: 10 }}>
            <label
              style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}
            >
              {propertyName}
            </label>
            <div style={{ display: "flex", gap: 10 }}>
              {options.map(({ icon, value }) => (
                <button
                  key={value}
                  onClick={() => setProperty(value)}
                  style={{
                    padding: 8,
                    borderRadius: 6,
                    border: "none",
                    fontSize: 20,
                    width:35,
                    backgroundColor: property === value ? "#ccc" : "#eee",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
        </div>
    )
}
