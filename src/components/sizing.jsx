import { Title } from "./extras"
import { InputBoxSmall } from "./selector"

export const SizingOptions = () => {
    return (
        <div>
            {/* Sizing Header */}
            <Title sectionName={"Sizing"}/>
            
            <InputBoxSmall propertyName={"Height"}/>
            <div style={{
                display:"flex",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                <InputBoxSmall propertyName={"Max"}/>
                <InputBoxSmall propertyName={"Min"}/>
            </div>


            <InputBoxSmall propertyName={"Width"}/>
            <div style={{
                display:"flex",
                justifyContent: "space-between",
                marginBottom: 10
            }}>
                <InputBoxSmall propertyName={"Max"}/>
                <InputBoxSmall propertyName={"Min"}/>
            </div>


        </div>
    )
}