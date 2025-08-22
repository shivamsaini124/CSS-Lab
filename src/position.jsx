import { useContext } from "react";
import { Title } from "./extras"
import { DropDownSelector, InputBoxSmall} from "./selector"
import { styleContext } from "./context.jsx";
import { useState } from "react";

export const PositionOptions = ({darkMode = false}) => {
    const { style, setStyle } = useContext(styleContext);
    
    const options = {position : [
        "static",
        "relative",
        "absolute",
        "fixed",
        "sticky"
    ]}

    // Helper function to update position properties
    const updatePositionProperty = (property, value) => {
        console.log(`Updating position ${property} to:`, value);
        const newStyle = {...style};
        
        // Ensure the structure exists
        if (!newStyle.position) newStyle.position = {};
        
        newStyle.position[property] = value;
        setStyle(newStyle);
        
        console.log('Updated position style:', newStyle);
    };

    // Get current values from context with safe fallbacks
    const getCurrentValue = (property, fallback) => {
        return style?.position?.[property] || fallback;
    };

    const currentPosition = getCurrentValue('position', 'static');
    
    return (
        <div>
            {/* Position Header */}
            <Title sectionName={"Position"} darkMode={darkMode} />
            <DropDownSelector
                propertyName={"Position"}
                options={options.position}
                state={currentPosition}
                setState={(val) => updatePositionProperty('position', val)}
                darkMode={darkMode}
            />
            {currentPosition !== "static" &&
                <div>
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
                            value={getCurrentValue('top', '0px')}
                            onChange={(e) => updatePositionProperty('top', e.target.value)}
                        />
                        <InputBoxSmall 
                            style={{width:"90%"}} 
                            propertyName={"Bottom"} 
                            darkMode={darkMode}
                            value={getCurrentValue('bottom', '0px')}
                            onChange={(e) => updatePositionProperty('bottom', e.target.value)}
                        />
                        <InputBoxSmall 
                            style={{width:"90%"}} 
                            propertyName={"Left"} 
                            darkMode={darkMode}
                            value={getCurrentValue('left', '0px')}
                            onChange={(e) => updatePositionProperty('left', e.target.value)}
                        />
                        <InputBoxSmall 
                            style={{width:"90%"}} 
                            propertyName={"Right"} 
                            darkMode={darkMode}
                            value={getCurrentValue('right', '0px')}
                            onChange={(e) => updatePositionProperty('right', e.target.value)}
                        />
                    </div>
                    <InputBoxSmall 
                        propertyName={"Z-Index"} 
                        darkMode={darkMode}
                        value={getCurrentValue('zIndex', '1')}
                        onChange={(e) => updatePositionProperty('zIndex', e.target.value)}
                    />
                </div>
            }
        </div>
    )
}