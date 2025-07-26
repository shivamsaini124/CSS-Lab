import { Title } from "./extras"
import { InputBoxSmall} from "./selector"

export const SpacingOptions = () => {
    return (
        <div>
            {/* Spacing Header */}
            <Title sectionName={"Spacing"}/>
            
            <label 
                style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}
            >
                Padding
            </label>
            <div style={{
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                <InputBoxSmall style={{width:"90%"}} propertyName={"Top"}/>
                <InputBoxSmall style={{width:"90%"}} propertyName={"Bottom"}/>
                <InputBoxSmall style={{width:"90%"}} propertyName={"Left"}/>
                <InputBoxSmall style={{width:"90%"}} propertyName={"Right"}/>
            </div>


            <label 
                style={{ fontWeight: "normal", display: "block", marginBottom: 6 }}
            >
                Margin
            </label>
            <div style={{
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                <InputBoxSmall style={{width:"90%"}} propertyName={"Top"}/>
                <InputBoxSmall style={{width:"90%"}} propertyName={"Bottom"}/>
                <InputBoxSmall style={{width:"90%"}} propertyName={"Left"}/>
                <InputBoxSmall style={{width:"90%"}} propertyName={"Right"}/>
            </div>
        </div>
    )
}