import { useReducer } from "react";
import type { CountState, CountAction } from '../types/types'

const ACTIONS = {
    INCREMENT: 'increment', DECREMENT: "decrement"
} as const;

function incORdec(countState: CountState, countAction: CountAction): CountState {
    switch (countAction.type) {
        case ACTIONS.INCREMENT:
            return { count: countState.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: countState.count - 1 };
        default:
            return countState;
    }
}

export default function UseReducerHook() {
    const [count, countDispatch] = useReducer(incORdec, { count: 0 });

    function handleDecrement() {
        countDispatch({ type: ACTIONS.DECREMENT });
    }

    function handleIncrement() {
        countDispatch({ type: ACTIONS.INCREMENT });
    }

    return (
        <>
            <div>
                <h1>UseReducer Hook</h1>
            </div>
            <div>
                <button className="btn-usestate" onClick={handleDecrement}>Decrement</button>
                <span className="span-usestate">{count.count}</span>
                <button className="btn-usestate" onClick={handleIncrement}>Increment</button>
            </div>
        </>
    )
}