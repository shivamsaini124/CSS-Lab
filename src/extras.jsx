export const Title = ({sectionName, darkMode = false}) => {
    return (
        <div
            style={{
                borderBottom: `1px solid ${darkMode ? "#4a5568" : "#ddd"}`,
                paddingBottom: 5,
                marginBottom: 10,
                color: darkMode ? "#fff" : "#000",
                transition: "border-color 0.3s ease, color 0.3s ease",
                fontWeight: "bold"
            }}
        >
            {sectionName}
        </div>
    )
}