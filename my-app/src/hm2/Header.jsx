import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.nav}>
            Header
            <ul className={s.list}>
                <li className={s.listItem}>One</li>
                <li className={s.listItem}>Two</li>
            </ul>


        </div>
    )
}

export default Header;