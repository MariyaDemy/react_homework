import { useDispatch, useSelector, } from "react-redux";
import { useEffect, useState } from 'react';
import { fetchUsers, fetchUser } from './store/actions';
import { selectUser } from "./store/selectors";

const Users = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <div>
            <p>{user.id}</p>
            <p>{user.login}</p>
        </div>
    )

}


export default Users;