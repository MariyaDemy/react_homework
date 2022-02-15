import { createStore, combineReducers } from 'redux';
import { addGood, changeGoods, addToDo } from './actions';
import {ADD, REMOVE, CHANGE} from './actionTypes';


let initialState = { goods: [{id: '1', name: 'name'}, {id: '2', name: 'name2'}] };
let reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state, goods: [...state.goods, action.payload]
            }
        }
        case REMOVE: {
            return {
                ...state, goods: state.goods.filter(item => item !== action.payload)
            };
        }
        case CHANGE: {
            let goods = state.goods;
            let items = action.payload.items;
            state.goods = [];
            return {
                ...state, goods: goods.map(good => {
                    let item = items.find(item => item.id === good.id);
                    if (item) {
                        return {
                            ...good,
                            name: item.name
                        }
                    }
                    return good;
                })
            }
        }
        default:
            return state;
    }
}




let initState = { todos: [] };
let toDoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        }
        case REMOVE: {
            return {
                ...state, todos: state.todos.filter(item => item.id !== action.payload)
            };
        }
        case "REMOVE_ALL":{
            return {
                todos:[]
            }
        }

        default:
            return state;
    }
}




const rootReducer = combineReducers({
    goodsReducer: reducer,
    todoReducer: toDoReducer,
})


export let store = createStore(toDoReducer);
