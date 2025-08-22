import { useContext } from "react";
import { Title } from "./extras.jsx"
import { InputBoxSmall} from "./selector.jsx"
import { styleContext } from "./context.jsx";

export const SpacingOptions = ({ darkMode = false }) => {
    const { style, setStyle } = useContext(styleContext);

    // Helper function to update spacing properties
    const updateSpacingProperty = (property, value) => {
        console.log(`Updating spacing ${property} to:`, value);
        const newStyle = {...style};
        
        // Ensure the structure exists
        if (!newStyle.spacing) newStyle.spacing = {};
        
        newStyle.spacing[property] = value;
        setStyle(newStyle);
        
        console.log('Updated spacing style:', newStyle);
    };

    // Get current values from context with safe fallbacks
    const getCurrentValue = (property, fallback) => {
        return style?.spacing?.[property] || fallback;
    };

    return (
        <div>
            {/* Spacing Header */}
            <Title sectionName={"Spacing"} darkMode={darkMode}/>
            
            <label 
                style={{ 
                    fontWeight: "normal", 
                    display: "block", 
                    marginBottom: 6,
                    color: darkMode ? "#fff" : "#000",
                    transition: "color 0.3s ease"
                }}
            >
                Padding
            </label>
            <div style={{
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                <InputBoxSmall 
                    style={{width:"90%"}} 
                    propertyName={"Top"} 
                    darkMode={darkMode}
                    value={getCurrentValue('paddingTop', '10px')}
                    onChange={(e) => updateSpacingProperty('paddingTop', e.target.value)}
                />
                <InputBoxSmall 
                    style={{width:"90%"}} 
                    propertyName={"Bottom"} 
                    darkMode={darkMode}
                    value={getCurrentValue('paddingBottom', '10px')}
                    onChange={(e) => updateSpacingProperty('paddingBottom', e.target.value)}
                />
                <InputBoxSmall 
                    style={{width:"90%"}} 
                    propertyName={"Left"} 
                    darkMode={darkMode}
                    value={getCurrentValue('paddingLeft', '10px')}
                    onChange={(e) => updateSpacingProperty('paddingLeft', e.target.value)}
                />
                <InputBoxSmall 
                    style={{width:"90%"}} 
                    propertyName={"Right"} 
                    darkMode={darkMode}
                    value={getCurrentValue('paddingRight', '10px')}
                    onChange={(e) => updateSpacingProperty('paddingRight', e.target.value)}
                />
            </div>

            <label 
                style={{ 
                    fontWeight: "normal", 
                    display: "block", 
                    marginBottom: 6,
                    color: darkMode ? "#fff" : "#000",
                    transition: "color 0.3s ease"
                }}
            >
                Margin
            </label>
            <div style={{
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                <InputBoxSmall 
                    style={{width:"90%"}} 
                    propertyName={"Top"} 
                    darkMode={darkMode}
                    value={getCurrentValue('marginTop', '10px')}
                    onChange={(e) => updateSpacingProperty('marginTop', e.target.value)}
                />
                <InputBoxSmall 
                    style={{width:"90%"}} 
                    propertyName={"Bottom"} 
                    darkMode={darkMode}
                    value={getCurrentValue('marginBottom', '10px')}
                    onChange={(e) => updateSpacingProperty('marginBottom', e.target.value)}
                />
                <InputBoxSmall 
                    style={{width:"90%"}} 
                    propertyName={"Left"} 
                    darkMode={darkMode}
                    value={getCurrentValue('marginLeft', '10px')}
                    onChange={(e) => updateSpacingProperty('marginLeft', e.target.value)}
                />
                <InputBoxSmall 
                    style={{width:"90%"}} 
                    propertyName={"Right"} 
                    darkMode={darkMode}
                    value={getCurrentValue('marginRight', '10px')}
                    onChange={(e) => updateSpacingProperty('marginRight', e.target.value)}
                />
            </div>
        </div>
    )
}