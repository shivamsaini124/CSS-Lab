import { useContext } from "react";
import { Title } from "./extras.jsx"
import { InputBoxSmall } from "./selector.jsx"
import { styleContext } from "./context.jsx";

export const SizingOptions = ({ darkMode = false }) => {
    const { style, setStyle } = useContext(styleContext);

    // Helper function to update sizing properties
    const updateSizingProperty = (property, value) => {
        console.log(`Updating sizing ${property} to:`, value);
        const newStyle = {...style};
        
        // Ensure the structure exists
        if (!newStyle.sizing) newStyle.sizing = {};
        
        newStyle.sizing[property] = value;
        setStyle(newStyle);
        
        console.log('Updated sizing style:', newStyle);
    };

    // Get current values from context with safe fallbacks
    const getCurrentValue = (property, fallback) => {
        return style?.sizing?.[property] || fallback;
    };

    return (
        <div>
            {/* Sizing Header */}
            <Title sectionName={"Sizing"} darkMode={darkMode}/>
            
            <InputBoxSmall 
                propertyName={"Height"} 
                darkMode={darkMode}
                value={getCurrentValue('height', '100px')}
                onChange={(e) => updateSizingProperty('height', e.target.value)}
            />
            <div style={{
                display:"flex",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                <InputBoxSmall 
                    propertyName={"Max Height"} 
                    darkMode={darkMode}
                    value={getCurrentValue('maxHeight', '100px')}
                    onChange={(e) => updateSizingProperty('maxHeight', e.target.value)}
                />
                <InputBoxSmall 
                    propertyName={"Min Height"} 
                    darkMode={darkMode}
                    value={getCurrentValue('minHeight', '50px')}
                    onChange={(e) => updateSizingProperty('minHeight', e.target.value)}
                />
            </div>

            <InputBoxSmall 
                propertyName={"Width"} 
                darkMode={darkMode}
                value={getCurrentValue('width', '100px')}
                onChange={(e) => updateSizingProperty('width', e.target.value)}
            />
            <div style={{
                display:"flex",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                <InputBoxSmall 
                    propertyName={"Max Width"} 
                    darkMode={darkMode}
                    value={getCurrentValue('maxWidth', '100px')}
                    onChange={(e) => updateSizingProperty('maxWidth', e.target.value)}
                />
                <InputBoxSmall 
                    propertyName={"Min Width"} 
                    darkMode={darkMode}
                    value={getCurrentValue('minWidth', '50px')}
                    onChange={(e) => updateSizingProperty('minWidth', e.target.value)}
                />
            </div>
        </div>
    )
}