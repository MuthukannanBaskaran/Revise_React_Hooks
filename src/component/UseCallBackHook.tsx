import { useCallback, useState } from "react"
import List from "./List";

export default function UseCallBackHook() {
    const [number, setNumber] = useState(1);
    const [theme, setTheme] = useState(false);
    const getNumbers = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number])

    const themeStyle = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
    }

    return (
        <>
            <div style={themeStyle} className="div-callback">
                <input type="number" name="number-input" id="number-input" value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))} />
                <button className="btn-home" onClick={() => setTheme(prev => !prev)}>Toggle Theme</button>
                <p style={themeStyle}>Theme Change Happens</p>
            </div>
            <List getNumbers={getNumbers} />
        </>
    )
}


