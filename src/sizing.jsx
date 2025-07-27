import { Title } from "./extras.jsx"
import { InputBoxSmall } from "./selector.jsx"

export const SizingOptions = ({ darkMode = false }) => {
    return (
        <div>
            {/* Sizing Header */}
            <Title sectionName={"Sizing"} darkMode={darkMode}/>
            
            <InputBoxSmall propertyName={"Height"} darkMode={darkMode}/>
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