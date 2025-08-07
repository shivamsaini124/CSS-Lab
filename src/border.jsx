import {DropDownSelector, InputBox, InputBoxSmall, ColorInputBoxSmall} from "./selector.jsx"
import { Title } from "./extras.jsx"

export const BorderOptions = ({darkMode = false}) => {
    return (
        <div>
            {/* Border Header */}
            <Title sectionName={"Border"} darkMode={darkMode} />
            
            <InputBoxSmall propertyName={"Radius"} darkMode={darkMode}/>

            <div style={{display:"flex"}}>
                <InputBoxSmall propertyName={"Width"} darkMode={darkMode} />
                <ColorInputBoxSmall propertyName={"Color"} darkMode={darkMode} />
            </div>

            <DropDownSelector
                propertyName={"Style"}
                options={["Solid", "Dotted", "Right", "Bottom", "Left"]}
                darkMode={darkMode}
            />
            
            
        </div>
    )
}