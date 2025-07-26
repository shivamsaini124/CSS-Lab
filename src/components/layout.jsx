import { useState } from "react";
import { DropDownSelector, ButtonSelector, InputBox } from "./selector";
import { Title } from "./extras";

// Flexbox layout options component
const FlexLayoutOptions = () => {
    const options = {
        justifyContent: ["Center", "Start", "End", "Space Between"],
        alignItem: ["Center", "Start", "End", "Stretch"],
        alignContent: ["Center", "Start", "End", "Stretch"],
        wrap: ["No Wrap", "Wrap", "Wrap Reverse"],
        directions: [
            { icon: "→", value: "right" },
            { icon: "↓", value: "down" },
            { icon: "←", value: "left" },
            { icon: "↑", value: "up" }
        ]
    };

    return (
        <div>
            <ButtonSelector propertyName={"Direction"} options={options.directions} />
            <DropDownSelector propertyName={"Justify Content"} options={options.justifyContent} />
            <DropDownSelector propertyName={"Align Item"} options={options.alignItem} />
            <DropDownSelector propertyName={"Align Content"} options={options.alignContent} />
            <DropDownSelector propertyName={"Wrap"} options={options.wrap} />
            <InputBox propertyName={"Gap"} />
        </div>
    );
};

// Grid layout options component
const GridLayoutOptions = () => {
    const options = {
        gridTemplateColumns: ["1fr 1fr", "repeat(3, 1fr)", "auto auto", "100px 1fr"],
        gridTemplateRows: ["auto", "1fr 2fr", "repeat(2, 100px)", "minmax(100px, auto)"],
        justifyItems: ["start", "center", "end", "stretch"],
        alignItems: ["start", "center", "end", "stretch"]
    };

    return (
        <div>
            <DropDownSelector propertyName={"Grid Template Columns"} options={options.gridTemplateColumns} />
            <DropDownSelector propertyName={"Grid Template Rows"} options={options.gridTemplateRows} />
            <DropDownSelector propertyName={"Justify Items"} options={options.justifyItems} />
            <DropDownSelector propertyName={"Align Items"} options={options.alignItems} />
            <InputBox propertyName={"Gap"} />
        </div>
    );
};

// Main LayoutOptions component
export const LayoutOptions = () => {
    const options = {
        display: ["flex", "block", "grid", "inline"]
    };
    const [display, setDisplay] = useState(options.display[0]);

    return (
        <div>
            <Title sectionName={"Layout"} />
            <DropDownSelector
                propertyName={"Display"}
                options={options.display}
                state={display}
                setState={setDisplay}
            />
            {display === "flex" && <FlexLayoutOptions />}
            {display === "grid" && <GridLayoutOptions />}
        </div>
    );
};