import { createPortal } from 'react-dom';
import './hm5/App5.css';
import { Fragment, useState, useContext, useRef, createContext, createRef } from 'react';
import Modal from './hm5/Modal'
import Accordion from './hm5/Accordion'


const App = () => {

    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    }
    return (
        <div>
            <button onClick={handleClick}>Toggle modal</button>
            <div className='App'>
                {isOpened && createPortal(<Modal title="title" content="content" id="warning"></Modal>, document.getElementById('notification'))}
            </div>


            <Accordion>
                <Accordion.Title>Title</Accordion.Title>
                <Accordion.Content>Content</Accordion.Content>
                <Accordion.Title>Title 2</Accordion.Title>
                <Accordion.Content>Content 2</Accordion.Content>
            </Accordion>
        </div >

    );
}

export default App;