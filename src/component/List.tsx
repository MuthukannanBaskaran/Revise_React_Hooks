import { useEffect, useState } from 'react'

export default function List({ getNumbers }: { getNumbers: () => number[] }) {
    const [numbers, setNumbers] = useState<number[]>([]);
    useEffect(() => {
        setNumbers(getNumbers());
        console.log("updating numbers");
    }, [getNumbers]);
    return (
        <>
            {numbers.map(number => <div key={number}>{number}</div>)}
        </>
    )
}
