import { Title } from "./extras"
import { DropDownSelector, InputBoxSmall} from "./selector"
import { useState } from "react";


export const PositionOptions = ({darkMode = false}) => {
    const options = {position : [
        "Static",
        "Relative",
        "Absolute",
        "Fixed",
        "Sticky"
    ]}

    const [position, setPosition] = useState(options.position[0]);
    
    return (
        <div>
            {/* Position Header */}
            <Title sectionName={"Position"} darkMode={darkMode} />
            <DropDownSelector
                propertyName={"Position"}
                options={options.position}
                state={position}
                setState={setPosition}
                darkMode={darkMode}
            />
            {position !== "Static" &&
                <div>
                    <div style={{
                        display:"grid",
                        gridTemplateColumns:"1fr 1fr",
                        justifyContent: "space-between",
                        marginBottom: 10
                    }}>
                        <InputBoxSmall style={{width:"90%"}} propertyName={"Top"} darkMode={darkMode}/>
                        <InputBoxSmall style={{width:"90%"}} propertyName={"Bottom"} darkMode={darkMode}/>
                        <InputBoxSmall style={{width:"90%"}} propertyName={"Left"} darkMode={darkMode}/>
                        <InputBoxSmall style={{width:"90%"}} propertyName={"Right"} darkMode={darkMode}/>
                    </div>

                    <InputBoxSmall propertyName={"Z-Index"} darkMode={darkMode}/>
                </div>
            }
        </div>
    )
}