import { NavLink } from 'react-router-dom';
import s from './Home.module.css'

const Home = () => {
    return (
        <div>
            <ul className={s.menu}>
                <li className={s.link}><NavLink to="/">Home</NavLink></li>
                <li className={s.link}><NavLink to="/about">About</NavLink></li>
                <li className={s.link}><NavLink to="/articles">Articles</NavLink></li>
            </ul>
            <h1>Headline</h1>
            Home page Text
        </div>
    )
}

export default Home;