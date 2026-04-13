import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function UseContextHook() {
    const systemTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: systemTheme ? "#333" : "#CCC",
        color: systemTheme ? "#CCC" : "#333",
        padding: "2rem", margin: "2rem"
    }
    return (
        <>
            <button className='btn-usecontext' onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>use context hook</div>
        </>
    )
}