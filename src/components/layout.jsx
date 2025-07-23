import { useState } from "react"
import { DropDownSelector, ButtonSelector } from "./selector";

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

    return(<div>
        {/* Direction */}
        <ButtonSelector propertyName={"Direction"} options={options.directions}/>

        {/* Justify Content */}
        <DropDownSelector propertyName={"Justify Content"} options={options.justifyContent}/>

        {/* Align Item */}
        <DropDownSelector propertyName={"Align Item"} options={options.alignItem}/>

        {/* Align Content */}
        <DropDownSelector propertyName={"Align Content"} options={options.alignContent}/>

        {/* Wrap */}
        <DropDownSelector propertyName={"Wrap"} options={options.wrap}/>
    </div>)
    
}

export const LayoutOptions = ()=> {
    const options = {
        display: ["flex", "block", "grid", "inline"]
    }
    const [display, setDisplay] = useState(options.display[0]);

    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: 6,
            boxShadow: "0 0 2px rgba(0,0,0,0.1)",
            padding: 10,
            fontWeight: "bold",
            fontSize: 14,
            color: "#000",
          }}>
            {/* Layout Header */}
            <div
            style={{
                borderBottom: "1px solid #ddd",
                paddingBottom: 5,
                marginBottom: 10,
            }}
            >
            Layout
            </div>

            {/* Display */}
            <DropDownSelector propertyName={"Display"} options={options.display} state={display} setState={setDisplay}/>

            {(display === "flex") ?
                <FlexLayoutOptions/>
                : null
            }
        </div>
        
    )
}