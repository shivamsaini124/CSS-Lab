import { Title } from "./extras.jsx"
import { InputBoxSmall} from "./selector.jsx"

export const SpacingOptions = ({ darkMode = false }) => {
    return (
        <div>
            {/* Spacing Header */}
            <Title sectionName={"Spacing"} darkMode={darkMode}/>
            
            <label 
                style={{ 
                    fontWeight: "normal", 
                    display: "block", 
                    marginBottom: 6,
                    color: darkMode ? "#fff" : "#000",
                    transition: "color 0.3s ease"
                }}
            >
                Padding
            </label>
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


            <label 
                style={{ 
                    fontWeight: "normal", 
                    display: "block", 
                    marginBottom: 6,
                    color: darkMode ? "#fff" : "#000",
                    transition: "color 0.3s ease"
                }}
            >
                Margin
            </label>
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
        </div>
    )
}