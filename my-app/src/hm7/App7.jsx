import React from 'react';
import { createStore, combineReducers } from 'redux';

//COUNTER

// let initialState = { counter: 0 };

// let reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT': {
//             return {
//                 ...state, counter: state.counter + action.payload
//             }
//         }
//         case 'DECREMENT': {
//             return {
//                 ...state, counter: state.counter - action.payload
//             }
//         }
//         default:
//             return state;
//     }
// }

// let store = createStore(reducer); // to create a store (reducerName)

// console.log(store.getState());
// store.dispatch({ type: 'INCREMENT', payload: 5 });
// console.log(store.getState());
// store.dispatch({ type: 'DECREMENT' });
// console.log(store.getState());


//GOODS

// let initialState = { goods: [] };
// let reducerOne = (state = initialState, action) => {
//     switch (action.type) {
//         case 'GOODS_ADD': {
//             return {
//                 ...state, goods: [...state.goods, action.payload]
//             }
//         }
//         case 'GOODS_REMOVE': {
//             return {
//                 ...state, goods: state.goods.filter(item => item !== action.payload)
//             }
//         }
//         default:
//             return state;
//     }
// }

// const addGood = (good) => ({ type: 'GOODS_ADD', payload: good });
// const removeGood = (good) => ({ type: 'GOODS_REMOVE', payload: good });


// let reducerTwo = (state = { counter: 5 }, action) => {
//     return state
// }

// const rootReducer = combineReducers({
//     goodsReducer: reducerOne,
//     counterReducer: reducerTwo,
// })


// console.log(store.getState());
// store.dispatch(addGood('Ruler'));
// store.dispatch(addGood('Canny Fox'));
// console.log(store.getState());
// store.dispatch(removeGood('Ruler'));
// console.log(store.getState());


//TASK 7

let initialState = { hotels: [] };

let hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            return {
                ...state, hotels: [...state.hotels, action.payload]
            }
        }
        case 'REMOVE': {
            return {
                ...state, hotels: state.goods.filter(item => item !== action.payload)
            };
        }
        case 'CHANGE': {
            let hotels = state.hotels;
            let items = action.payload.items;
            state.hotels = [];
            return {
                ...state, hotels: hotels.map(hotel => {
                    let item = items.find(item => item.id === hotel.id);
                    if (item) {
                        return {
                            ...hotel,
                            name: item.name
                        }
                    }
                    return hotel;
                })
            }
        }
        default:
            return state;
    }
}

const addHotel = (data) => ({ type: 'ADD', payload: data });
const removeHotel = (data) => ({ type: 'REMOVE', payload: data });
const changeHotel = (data) => ({ type: 'CHANGE', payload: { items: data } });



const hotelOne = { id: 1, name: "Blue Star", rooms: 100, address: "Minsk" };
const hotelTwo = { id: 2, name: "Sleep grass", rooms: 4, address: "Minsk" };

export let store = createStore(hotelsReducer);

store.dispatch(addHotel(hotelOne));
store.dispatch(addHotel(hotelTwo));
store.dispatch(addHotel({ id: 3, name: 'name3' }));
console.log(store.getState());

store.dispatch(changeHotel([{ id: 3, name: 'name3333' }]));
console.log(store.getState());

const App = () => {
    return (
        <div>Hey</div>
    )
}

export default App;