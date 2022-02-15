import { createPortal } from 'react-dom';
import './hm6/App6.css';
import { Fragment, useState, useContext, useRef, createContext, createRef, useEffect } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Articles from './Pages/Articles';

// const Layout = (props) => {
//     console.log(props);
//     let navigate = useNavigate();
//     let location = useLocation();
//     return <div>
//         <div>Header</div>
//         <button onClick={() => {
//             navigate('/')
//         }}>go to Home</button>
//         <Link to="/">Home</Link>
//         <Outlet></Outlet>
//     </div>
// }



// const App = () => {
//     return <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<div>Home Page
//                 <Link to="/about/next">Next Page</Link>
//             </div>}></Route>
//             <Route path="about" element={<Layout></Layout>}>
//                 <Route path="next" element={<div>New Page</div>}></Route>
//             </Route>
//             <Route path="*" element={<div> 404 Page not found</div>}></Route>
//         </Routes >
//     </BrowserRouter >
// }


// const App = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home></Home>}>Home</Route>
//                 <Route path="about" element={<About></About>}>About</Route>
//                 <Route path="articles" element={<Articles></Articles>}>About</Route>
//                 <Route path="*" element={<div> 404 Page not found</div>}></Route>
//             </Routes >
//         </BrowserRouter >
//     )
// }

const Profile = ({ isAuth }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    }, []);

    return isAuth && <div>
        User Info
    </div>
}

//when false in useState - /profile is blocked

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    return <BrowserRouter>
        <Link to='/profile'>go to profile</Link>
        <button onClick={() => { setIsAuth(!isAuth); }}>
            {isAuth ? 'We are auth' : 'We are not auth'}</button>
        <Routes>
            <Route path='/' element={<div>Home page</div>}></Route>
            <Route path='/profile' element={<Profile isAuth={isAuth}>Home page</Profile>}></Route>
        </Routes>
    </BrowserRouter>
}

export default App;