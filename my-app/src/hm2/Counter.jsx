import { useState } from 'react';


const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    const handleClick = (value, counter, setCounter) => () => {
        setCounter(counter + value);
    }
    const handleClickMinus = () => {
        setCounter(counter - 1);
    }

    return <div>
        <button onClick={handleClick(1, counter, setCounter)}> + 1 {counter} </button>
        <button onClick={handleClick(2, counter2, setCounter2)}> + 2 {counter2} </button>
        <button onClick={handleClick(3, counter3, setCounter3)}> + 3 {counter3} </button>
        <button onClick={handleClickMinus}> - 1 </button>
        <h2>Sum: {counter + counter2 + counter3}</h2>
    </div>
}


export default Counter;