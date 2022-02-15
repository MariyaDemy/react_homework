import React from "react";
import './hm4/App4.css';


import { useState, useRef, useEffect, createRef, Fragment, createContext, Context, useContext } from 'react';



// const Textarea = () => {
//     const [value, setValue] = useState('');
//     const ref = useRef();
//     useEffect(() => {
//         ref.current.focus();
//     }, [])
//     const handleChange = (event) => {
//         setValue(event.target.value);
//     }
//     return <textarea value={value} ref={ref} onChange={handleChange}></textarea>
// }



// let CounterContext = createContext();

// const Counter = () => {
//     const { counter, setCounter } = useContext(CounterContext);

//     const handleClick = () => {
//         setCounter(counter + 1);
//     }
//     return <CounterContext.Consumer>
//         {({ counter, setCounter }) => <div>
//             Component Counter
//             <br />
//             <button type="button" onClick={() => {
//                 setCounter(counter + 1);
//             }}>increment</button>
//             {counter}
//         </div>}
//     </CounterContext.Consumer>;
// }


// const Main = () => {
//     return <div>
//         <Counter></Counter>
//     </div>
// }



// const App = () => {
//     const [arrInputs, setArrInputs] = useState([
//         { type: 'input', value: 'input' },
//         { type: 'textarea', value: 'textarea' }])


//     const addInput = () => {
//         setArrInputs([...arrInputs, { type: 'input', value: 'new input' }]);
//     }

//     const removeLast = () => {
//         setArrInputs(arrInputs.slice(0, arrInputs.length - 1))
//     }


// const [counter, setCounter] = useState(0);

//    

//     return (

//         <CounterContext.Provider value={{ counter, setCounter }}>

//             <div className="App">

//                 {arrInputs.map(item => <Fragment key={item.value}>
//                     {item.type === 'textarea' && <textarea value={item.value}></textarea>}
//                     {item.type === 'input' && <input value={item.value}></input>}
//                 </Fragment>)}

//                 <button onClick={addInput}>Add</button>
//                 <button onClick={removeLast}>Remove the last</button>

//                 <Textarea></Textarea>

// {/* <Main></Main> */}

//                 
//             </div>

//         </CounterContext.Provider>
//     )
// }



let LangSelectContext = createContext();

const LangSelect = () => {
    const { langSelect, setLangSelect } = useContext(LangSelectContext);

    const handleClick = (event) => {
        setLangSelect(event.target.value)
    };

    return (
        <div>
            <p><input name='Lang' type="radio" value='en' onChange={handleClick} />En</p>
            <p><input name='Lang' type="radio" value='ru' onChange={handleClick} />Ru</p>
            <p><input name='Lang' type="radio" value='by' onChange={handleClick} />By</p>
        </div>
    );
};

const Content = () => {
    const { langSelect } = useContext(LangSelectContext);
    return (
        <div>{langSelect}</div>)
}

const Header = () => {
    return <div>
        <LangSelect></LangSelect>
    </div>
};

function App4() {
    const [langSelect, setLangSelect] = useState('');

    return (
        <LangSelectContext.Provider value={{ langSelect, setLangSelect }}>
            <div className='App'>
                <Header></Header>
                <Content></Content>
            </div>
        </LangSelectContext.Provider >
    );
}

export default App4;



// export default App;
