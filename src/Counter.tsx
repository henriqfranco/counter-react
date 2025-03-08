import { useState } from "react"; //importing useState hook

function Counter(){
    const [count, setCount] = useState(0);

    const decreaseCount = () => {
        setCount(count - 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    const increaseCount = () => {
        setCount(count + 1);
    };

    return(
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={increaseCount}>Increase</button>
        </div>
    )
}

export default Counter;