import { useState } from "react";

export default function UseStateHook() {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => setCount(prev => prev + 1);
    const handleDecrement = () => setCount(prev => prev - 1);

    return (
        <>
            <div>
                <h1>UseState Hook</h1>
            </div>
            <div>
                <button className="btn-usestate" onClick={handleDecrement}>Decrement</button>
                <span className="span-usestate">{count}</span>
                <button className="btn-usestate" onClick={handleIncrement}>Increment</button>
            </div>
        </>
    );
}