
import { useEffect, useState, useMemo } from "react"

export default function UseMemoHook() {
    const [count, setCount] = useState<number>(0);
    const [theme, setTheme] = useState<boolean>(false);
    const sumNumber: number = useMemo(() => {
        return sum(count);
    }, [count]);
    const themeStyle = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "black" : "white",
    }

    const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _input = e.currentTarget.value;
        if (!Number.isNaN(_input)) {
            setCount(Number(_input));
        }
    }

    const handleThemeChange = () => {
        setTheme(prev => !prev);
    };

    return (
        <>
            <div style={themeStyle} className="div-UseMemo">
                <input type="number" value={count} onChange={handleCount} style={themeStyle} />
                <button onClick={handleThemeChange}> Change Theme</button>
                <br />
                <span>{count}</span>
            </div>
        </>
    )
}

function sum(num: number): number {
    console.log("sum called start", new Date().toUTCString());
    for (let i = 0; i < 1000000000; i++) {
        num += i;
    }
    console.log("sum called end", new Date().toUTCString());
    console.log(num)
    return num;
}