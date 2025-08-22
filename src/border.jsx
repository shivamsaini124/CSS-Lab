import { useContext } from "react";
import {DropDownSelector, InputBox, InputBoxSmall, ColorInputBoxSmall} from "./selector.jsx"
import { Title } from "./extras.jsx"
import { styleContext } from "./context.jsx";

export const BorderOptions = ({darkMode = false}) => {
    const { style, setStyle } = useContext(styleContext);

    // Helper function to update border properties
    const updateBorderProperty = (property, value) => {
        console.log(`Updating border ${property} to:`, value);
        const newStyle = {...style};
        
        // Ensure the structure exists
        if (!newStyle.border) newStyle.border = {};
        
        newStyle.border[property] = value;
        setStyle(newStyle);
        
        console.log('Updated border style:', newStyle);
    };

    // Get current values from context with safe fallbacks
    const getCurrentValue = (property, fallback) => {
        return style?.border?.[property] || fallback;
    };

    return (
        <div>
            {/* Border Header */}
            <Title sectionName={"Border"} darkMode={darkMode} />
            
            <InputBoxSmall 
                propertyName={"Radius"} 
                darkMode={darkMode}
                value={getCurrentValue('borderRadius', '20px')}
                onChange={(e) => updateBorderProperty('borderRadius', e.target.value)}
            />

            <div style={{display:"flex"}}>
                <InputBoxSmall 
                    propertyName={"Width"} 
                    darkMode={darkMode}
                    value={getCurrentValue('borderWidth', '1px')}
                    onChange={(e) => updateBorderProperty('borderWidth', e.target.value)}
                />
                <ColorInputBoxSmall 
                    propertyName={"Color"} 
                    darkMode={darkMode}
                    value={getCurrentValue('borderColor', '#000000')}
                    onChange={(e) => updateBorderProperty('borderColor', e.target.value)}
                />
            </div>

            <DropDownSelector
                propertyName={"Style"}
                options={["solid","dashed","dotted","inset","outset"]}
                state={getCurrentValue('borderStyle', 'solid')}
                setState={(val) => updateBorderProperty('borderStyle', val)}
                darkMode={darkMode}
            />
        </div>
    )
}