
import { useDispatch, useSelector, } from "react-redux";
import { selectTodos } from "../store/selectors";
import { useEffect, useState } from 'react';
import { addToDo, deleteTask } from '../store/actions';
import styles from './ToDoApp.module.css';

const ToDoApp = () => {

    const todos = useSelector(selectTodos);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleClick = (e) => {
        dispatch(addToDo({ id: Math.floor(Math.random() * 1000), todos: value }));

    }

    const deleteAll = (e) => {
        dispatch(deleteTask({}));
    }

    return (
        <div className={styles.wrapper}>


            <h1>ToDo App</h1>
            <div>
                <input onChange={handleChange}
                    value={value}
                    placeholder="Add your new todo"
                    className={styles.input}>
                </input>
                <button onClick={handleClick} className={styles.inputBtn}>+</button>
            </div>
            {todos.map(item => <div className={styles.taskItem}>{item.todos}</div>)}
            <div>
                You have <span className={styles.taskCount}>{todos.length}</span> pending tasks
                <button onClick={deleteAll} className={styles.deleteAllBtn}>Clear all</button>
            </div>
        </div>
    )
}

export default ToDoApp;