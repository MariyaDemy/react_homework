import React from "react";
import './hm1/App1.css';
import HelloReact from './hm1/HelloReact';
import UserList from './hm1/UserList';
import ComposableUserList from './hm1/ComposableUserList';



const App = () => {
  return (
    <div className="App">
      <div>
        <HelloReact></HelloReact>
        <div />
        <div>
          <UserList></UserList>
        </div>
        <div>
          <ComposableUserList></ComposableUserList>
        </div>
      </div>
    </div>
  );

}

export default App;

