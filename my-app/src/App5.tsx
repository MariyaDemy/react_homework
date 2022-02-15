import { createPortal } from 'react-dom';
import './hm5/App5.css';
import { Fragment, useState, useContext, useRef, createContext, createRef } from 'react';
import Modal from './hm5/Modal'

// interface Props {
//     name: string,
//     title?: string,
//     element: ReactElement
// }

// type Item = { id: string, name: string }

// //at props only three elements from above
// const App = (props: Props) => {

//     const [items, setItems] = useState<string[]>(['first', 'second', 'third')]);
//     const countItems = items.length;

//     const [isOpened, setIsOpened] = useState(false);

//     const handleClick = () => {
//         setIsOpened(!isOpened);
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>Toggle modal</button>
//             <div className='App'>
//                 {isOpened && createPortal(<Modal title="title" content="content" id="warning"></Modal>, document.getElementById('notification'))}
//             </div>
//         </div >
//     );



// export default App;