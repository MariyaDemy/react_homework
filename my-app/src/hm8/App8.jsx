import React from 'react';
import { store } from '../store';
import { Provider } from 'react-redux';
import Goods from './Goods';
import ToDoApp from './ToDoApp';



const App = () => {
    return (
        <Provider store={store}>
            {/* <Goods></Goods> */}
            <ToDoApp></ToDoApp>
        </Provider>
    )
}

export default App;