import s from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            Sidebar
            <a>
                Link 1
            </a>
            <a>
                Link 2
            </a>
            <a>
                Link 3
            </a>
        </div>
    )
}

export default Sidebar;