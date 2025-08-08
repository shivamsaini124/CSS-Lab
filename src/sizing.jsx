import { Title } from "./extras.jsx"
import { InputBoxSmall } from "./selector.jsx"
import { useContext } from "react"
import {styleContext} from "./context.jsx"

export const SizingOptions = ({ darkMode = false }) => {
    const {style, setStyle} = useContext(styleContext);
    return (
        <div>
            {/* Sizing Header */}
            <Title sectionName={"Sizing"} darkMode={darkMode}/>
            
            <InputBoxSmall propertyName={"Height"} darkMode={darkMode} updateStyle={(val)=>{
                const newStyle = {...style};
                newStyle.sizing.height = val + "px";
                setStyle(newStyle);
            }}/>
            <div style={{
                display:"flex",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                <InputBoxSmall propertyName={"Max"} darkMode={darkMode}/>
                <InputBoxSmall propertyName={"Min"} darkMode={darkMode}/>
            </div>


            <InputBoxSmall propertyName={"Width"} darkMode={darkMode}/>
            <div style={{
                display:"flex",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                <InputBoxSmall propertyName={"Max"} darkMode={darkMode}/>
                <InputBoxSmall propertyName={"Min"} darkMode={darkMode}/>
            </div>


        </div>
    )
}