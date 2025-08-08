import { useState, useContext } from "react";
import { DropDownSelector, ButtonSelector, InputBox } from "./selector.jsx";
import { Title } from "./extras.jsx";
import {styleContext} from "./context.jsx"

// Flexbox layout options component
const FlexLayoutOptions = ({ darkMode = false }) => {
    const {style, setStyle} = useContext(styleContext);

    const options = {
        justifyContent: ["Center", "Start", "End", "Space Between"],
        alignItem: ["Center", "Start", "End", "Stretch"],
        alignContent: ["Center", "Start", "End", "Stretch"],
        wrap: ["No Wrap", "Wrap", "Wrap Reverse"],
        directions: [
            { icon: "→", value: "row" },
            { icon: "↓", value: "column" },
            { icon: "←", value: "row-reverse" },
            { icon: "↑", value: "column-reverse" }
        ]
    };

    return (
        <div>
            <ButtonSelector propertyName={"Direction"} options={options.directions} darkMode={darkMode} updateStyle={(val)=> {
                const newStyle = {...style};
                newStyle.layout.flex.flexDirection = val;
                setStyle(newStyle);
            }}/>
            <DropDownSelector propertyName={"Justify Content"} options={options.justifyContent} darkMode={darkMode} />
            <DropDownSelector propertyName={"Align Item"} options={options.alignItem} darkMode={darkMode} />
            <DropDownSelector propertyName={"Align Content"} options={options.alignContent} darkMode={darkMode} />
            <DropDownSelector propertyName={"Wrap"} options={options.wrap} darkMode={darkMode} />
            <InputBox propertyName={"Gap"} darkMode={darkMode} />
        </div>
    );
};

// Grid layout options component
const GridLayoutOptions = ({ darkMode = false }) => {
    const options = {
        gridTemplateColumns: ["1fr 1fr", "repeat(3, 1fr)", "auto auto", "100px 1fr"],
        gridTemplateRows: ["auto", "1fr 2fr", "repeat(2, 100px)", "minmax(100px, auto)"],
        justifyItems: ["start", "center", "end", "stretch"],
        alignItems: ["start", "center", "end", "stretch"]
    };

    return (
        <div>
            <DropDownSelector propertyName={"Grid Template Columns"} options={options.gridTemplateColumns} darkMode={darkMode} />
            <DropDownSelector propertyName={"Grid Template Rows"} options={options.gridTemplateRows} darkMode={darkMode} />
            <DropDownSelector propertyName={"Justify Items"} options={options.justifyItems} darkMode={darkMode} />
            <DropDownSelector propertyName={"Align Items"} options={options.alignItems} darkMode={darkMode} />
            <InputBox propertyName={"Gap"} darkMode={darkMode} />
        </div>
    );
};

// Main LayoutOptions component
export const LayoutOptions = ({ darkMode = false }) => {
    const options = {
        display: ["flex", "block", "grid", "inline"]
    };
    const [display, setDisplay] = useState(options.display[0]);

    return (
        <div>
            <Title sectionName={"Layout"} darkMode={darkMode} />
            <DropDownSelector
                propertyName={"Display"}
                options={options.display}
                state={display}
                setState={setDisplay}
                darkMode={darkMode}
            />
            {display === "flex" && <FlexLayoutOptions darkMode={darkMode} />}
            {display === "grid" && <GridLayoutOptions darkMode={darkMode} />}
        </div>
    );
};