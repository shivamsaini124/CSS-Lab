import { InputBoxSmall } from "./selector"

export const SizingOptions = () => {
    return (
        <div>
            {/* Sizing Header */}
            <div
            style={{
                borderBottom: "1px solid #ddd",
                paddingBottom: 5,
                marginBottom: 10,
            }}
            >
            Sizing
            </div>
            
            <InputBoxSmall propertyName={"Height"}/>
            <div style={{
                display:"flex",
                justifyContent: "space-between"
            }}>
                <InputBoxSmall propertyName={"Max"}/>
                <InputBoxSmall propertyName={"Min"}/>
            </div>


            <InputBoxSmall propertyName={"Width"}/>
            <div style={{
                display:"flex",
                justifyContent: "space-between"
            }}>
                <InputBoxSmall propertyName={"Max"}/>
                <InputBoxSmall propertyName={"Min"}/>
            </div>


        </div>
    )
}