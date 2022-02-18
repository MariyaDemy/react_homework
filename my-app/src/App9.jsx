import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import Users from './Users';



const App = () => {
    return (
        <Provider store={store}>
            <Users></Users>
        </Provider>
    )
}

export default App;