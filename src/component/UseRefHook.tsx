import { useEffect, useRef, useState } from "react";
import GoHome from "./GoHome";

export default function UseRefHook() {
    const inputRef = useRef('');
    const [name, setName] = useState('');
    const prevValue = useRef('');
    const [value, setValue] = useState('');

    useEffect(() => {
        prevValue.current = value;
    }, [value])

    return (
        <>
            <GoHome />
            <div>
                <label htmlFor="inputname">Enter Name : </label>
                <input type="text" id="inputname" ref={inputRef} value={name}
                    onChange={(e) => setName(e.currentTarget.value)}></input>
                <div>Updating Name is : {name}</div>
            </div>
            <div>
                <label htmlFor="inputprev">Current Input</label>
                <input type="text" id="inputprev" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
                <div>{prevValue.current}</div>
            </div>
        </>
    )
}