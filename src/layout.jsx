import { useState, useContext } from "react";
import { DropDownSelector, ButtonSelector, InputBox } from "./selector.jsx";
import { Title } from "./extras.jsx";
import {styleContext} from "./context.jsx"

// Flexbox layout options component
const FlexLayoutOptions = ({ darkMode = false }) => {
    const {style, setStyle} = useContext(styleContext);

    const options = {
        justifyContent: ["center", "flex-start", "flex-end", "space-between"],
        alignItems: ["center", "flex-start", "flex-end", "stretch"],
        alignContent: ["center", "flex-start", "flex-end", "stretch"],
        flexWrap: ["nowrap", "wrap", "wrap-reverse"],
        directions: [
            { icon: "→", value: "row" },
            { icon: "↓", value: "column" },
            { icon: "←", value: "row-reverse" },
            { icon: "↑", value: "column-reverse" }
        ]
    };

    // Helper function to safely update flex properties
    const updateFlexProperty = (property, value) => {
        console.log(`Updating flex ${property} to:`, value);
        const newStyle = {...style};
        
        // Ensure the structure exists
        if (!newStyle.layout) newStyle.layout = {};
        if (!newStyle.layout.flex) newStyle.layout.flex = {};
        
        newStyle.layout.flex[property] = value;
        setStyle(newStyle);
        
        console.log('Updated style:', newStyle);
    };

    // Get current values from context with safe fallbacks
    const getCurrentValue = (property, fallback) => {
        return style?.layout?.flex?.[property] || fallback;
    };

    return (
        <div>
            <ButtonSelector 
                propertyName={"Direction"} 
                options={options.directions} 
                darkMode={darkMode} 
                state={getCurrentValue('flexDirection', 'row')}
                setState={(val) => updateFlexProperty('flexDirection', val)}
                updateStyle={(val) => updateFlexProperty('flexDirection', val)}
            />
            <DropDownSelector 
                propertyName={"Justify Content"} 
                options={options.justifyContent} 
                state={getCurrentValue('justifyContent', 'center')}
                setState={(val) => updateFlexProperty('justifyContent', val)}
                darkMode={darkMode} 
            />
            <DropDownSelector 
                propertyName={"Align Items"} 
                options={options.alignItems} 
                state={getCurrentValue('alignItems', 'center')}
                setState={(val) => updateFlexProperty('alignItems', val)}
                darkMode={darkMode} 
            />
            <DropDownSelector 
                propertyName={"Align Content"} 
                options={options.alignContent} 
                state={getCurrentValue('alignContent', 'center')}
                setState={(val) => updateFlexProperty('alignContent', val)}
                darkMode={darkMode} 
            />
            <DropDownSelector 
                propertyName={"Flex Wrap"} 
                options={options.flexWrap} 
                state={getCurrentValue('flexWrap', 'nowrap')}
                setState={(val) => updateFlexProperty('flexWrap', val)}
                darkMode={darkMode} 
            />
            <InputBox 
                propertyName={"Gap"} 
                darkMode={darkMode}
                value={getCurrentValue('gap', '10px')}
                onChange={(e) => updateFlexProperty('gap', e.target.value)}
            />
        </div>
    );
};

// Grid layout options component
const GridLayoutOptions = ({ darkMode = false }) => {
    const {style, setStyle} = useContext(styleContext);

    const options = {
        gridTemplateColumns: ["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"],
        gridTemplateRows: ["auto", "1fr", "1fr 1fr", "repeat(3, 1fr)"],
        justifyItems: ["start", "center", "end", "stretch"],
        alignItems: ["start", "center", "end", "stretch"]
    };

    // Helper function to safely update grid properties
    const updateGridProperty = (property, value) => {
        console.log(`Updating grid ${property} to:`, value);
        const newStyle = {...style};
        
        // Ensure the structure exists
        if (!newStyle.layout) newStyle.layout = {};
        if (!newStyle.layout.grid) newStyle.layout.grid = {};
        
        newStyle.layout.grid[property] = value;
        setStyle(newStyle);
        
        console.log('Updated style:', newStyle);
    };

    // Get current values from context with safe fallbacks
    const getCurrentValue = (property, fallback) => {
        return style?.layout?.grid?.[property] || fallback;
    };

    return (
        <div>
            <DropDownSelector 
                propertyName={"Grid Template Columns"} 
                options={options.gridTemplateColumns} 
                state={getCurrentValue('gridTemplateColumns', '1fr')}
                setState={(val) => updateGridProperty('gridTemplateColumns', val)}
                darkMode={darkMode} 
            />
            <DropDownSelector 
                propertyName={"Grid Template Rows"} 
                options={options.gridTemplateRows} 
                state={getCurrentValue('gridTemplateRows', 'auto')}
                setState={(val) => updateGridProperty('gridTemplateRows', val)}
                darkMode={darkMode} 
            />
            <DropDownSelector 
                propertyName={"Justify Items"} 
                options={options.justifyItems} 
                state={getCurrentValue('justifyItems', 'start')}
                setState={(val) => updateGridProperty('justifyItems', val)}
                darkMode={darkMode} 
            />
            <DropDownSelector 
                propertyName={"Align Items"} 
                options={options.alignItems} 
                state={getCurrentValue('alignItems', 'start')}
                setState={(val) => updateGridProperty('alignItems', val)}
                darkMode={darkMode} 
            />
            <InputBox 
                propertyName={"Gap"} 
                darkMode={darkMode}
                value={getCurrentValue('gap', '10px')}
                onChange={(e) => updateGridProperty('gap', e.target.value)}
            />
        </div>
    );
};

// Main LayoutOptions component
export const LayoutOptions = ({ darkMode = false }) => {
    const { style, setStyle } = useContext(styleContext);
    
    const options = {
        display: ["flex", "block", "grid", "inline"]
    };
    
    // Get current display value from context, fallback to flex
    const currentDisplay = style?.layout?.display || "flex";

    const handleDisplayChange = (newDisplay) => {
        console.log('Display changing to:', newDisplay);
        const newStyle = { ...style };
        if (!newStyle.layout) newStyle.layout = {};
        newStyle.layout.display = newDisplay;
        setStyle(newStyle);
        console.log('Display changed. New style:', newStyle);
    };

    return (
        <div>
            <Title sectionName={"Layout"} darkMode={darkMode} />
            <DropDownSelector
                propertyName={"Display"}
                options={options.display}
                state={currentDisplay}
                setState={handleDisplayChange}
                darkMode={darkMode}
            />
            {currentDisplay === "flex" && <FlexLayoutOptions darkMode={darkMode} />}
            {currentDisplay === "grid" && <GridLayoutOptions darkMode={darkMode} />}
        </div>
    );
};