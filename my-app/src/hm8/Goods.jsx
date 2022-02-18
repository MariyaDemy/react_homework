// import { useSelector, connect } from "react-redux";
// import { addGood } from './store/actions';
// import { selectGoods } from "./store/selectors";

// const Goods = ({ goods, addGood }) => {
// const goods = useSelector(selectGoods);
//     console.log(addGood);
//     return <div>Goods</div>
// }
// const mapStateToProps = (state) => {
//     return {
//         goods: selectGoods(state)
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addGood: (data) => dispatch(addGood(data))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Goods);





import { useDispatch, useSelector, } from "react-redux";
import { selectGoods } from "../store/selectors";
import { useEffect, useState } from 'react';
import { addGood } from '../store/actions';

const Goods = () => {

    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(addGood({ id: '4', name: 'good 4' }))
    //     }, 2000)
    // }, [])

    useEffect(async () => {
        let response = await fetch('https://api.github.com/users');
        let result = await response.json();
        setUsers(result);
    }, []);

    // return (
    //     <div>
    //         {users.map(item => <div>
    //             {item.id} {item.login}
    //         </div>)}
    //     </div>
    // )


    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleClick = (e) => {
        dispatch(addGood({ id: value, name: value }))

    }

    return (<div>
        {goods.map(item => <div>
            {item.id} + {item.name}
        </div>)}
        <input onChange={handleChange} value={value}></input>
        <button onClick={handleClick}>Add goods</button>
    </div>)
}


export default Goods;