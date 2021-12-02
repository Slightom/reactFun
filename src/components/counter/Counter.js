import { render } from "@testing-library/react";
import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(prev => prev + 1);
    const decrement = () => setCounter(prev => prev - 1);

    return (
        <>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <span>count: {counter}</span>
            <label>
                Count:
                <input value={counter} onChange={e => setCounter(7)} name={'counter'} placeholder='aaa' />
            </label>

        </>
    )

}

export default Counter;