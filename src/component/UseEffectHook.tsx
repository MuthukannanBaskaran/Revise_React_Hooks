import { useEffect, useState } from "react"
import GoHome from "./GoHome";

export default function UseEffectHook() {
    const baseURL = import.meta.env.VITE_USEEFFECT_URL;
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    function handleResize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>
            <GoHome />
            <div>
                <h1>UseEffect Hook</h1>
            </div>
            <div>
                Width and height should be handled in single UseState.<br />
                Window Width: {windowSize.width} & Height: {windowSize.height}
            </div>
            <div>Base URL: {baseURL}</div>
            <h2>JSON Placeholder API</h2>
        </>
    )
}