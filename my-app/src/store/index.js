// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { addGood, changeGoods, addToDo } from './actions';
// import {ADD, REMOVE, CHANGE, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST} from './actionTypes';
// import thunk from 'redux-thunk';
// import { isContentEditable } from '@testing-library/user-event/dist/utils';
// import { configure } from '@testing-library/react';


// let initialState = { goods: [{id: '1', name: 'name'}, {id: '2', name: 'name2'}] };
// let reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD: {
//             return {
//                 ...state, goods: [...state.goods, action.payload]
//             }
//         }
//         case REMOVE: {
//             return {
//                 ...state, goods: state.goods.filter(item => item !== action.payload)
//             };
//         }
//         case CHANGE: {
//             let goods = state.goods;
//             let items = action.payload.items;
//             state.goods = [];
//             return {
//                 ...state, goods: goods.map(good => {
//                     let item = items.find(item => item.id === good.id);
//                     if (item) {
//                         return {
//                             ...good,
//                             name: item.name
//                         }
//                     }
//                     return good;
//                 })
//             }
//         }
//         default:
//             return state;
//     }
// }


 
//   import {configureStore, createSlice} from '@reduxjs/toolkit';
//   import {fetchUsers} from './actions';
  
//   let initialState = {
//     users: [],
//     loading: false,
//     error: null
//   };
  

// let usersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_USERS_REQUEST: {
//             return {
//                 ...state, loading: true
//             }
//         }
//         case FETCH_USERS_SUCCESS: {
//             return {
//                 ...state, 
//                 users: action.payload,
//                 loading: true
//             };
//         }
//         case FETCH_USERS_ERROR: {
//             return {
//                 ...state, 
//                 error: action.payload,
//                 loading: false
//             }
//         }
//         default:
//             return state;
//     }
// }






// const slice = createSlice({
//   name: 'slice',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchUsers.pending, (state, action) => {
//       state.loading = true;
//     }).addCase(fetchUsers.fulfilled, (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//     }).addCase(fetchUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     })
//   }
// });




// homeTASK 8

// let initState = { todos: [] };
// let toDoReducer = (state = initState, action) => {
//     switch (action.type) {
//         case ADD: {
//             return {
//                 ...state, todos: [...state.todos, action.payload]
//             }
//         }
//         case REMOVE: {

//             return {
//                 ...state, todos: [...state.todos.filter((item) => item.id !== action.payload)]
//             };
//         }
//         case "REMOVE_ALL":{
//             return {
//                 todos: []
//             }
//         }

//         default:
//             return state;
//     }
// }



// const rootReducer = combineReducers({
//   goodsReducer: reducer,
//   todoReducer: toDoReducer,
// })


// export let store = createStore(toDoReducer);


// export let store = createStore(usersReducer, applyMiddleware(thunk));















import {configureStore,createSlice,applyMiddleware} from '@reduxjs/toolkit';
import {fetchUsers} from './actions';
import createSagaMiddleware from 'redux-saga'
import rootSaga, {rootSaga2} from './saga'
  
  let initialState = {
    users: [],
    loading: false,
    error: null,
    user: {}
  };
  
  const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        fetchUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        fetchUsersRequest: (state, action) => {
            state.loading = true;
        },
        fetchUsersError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        fetchUserRequest: (state, action) => {
            state.loading = true;
        },
        fetchUserError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }

    }});
  
  export const {
    fetchUsersSuccess,
    fetchUsersRequest,
    fetchUsersError,
    fetchUserSuccess,
    fetchUserRequest,
    fetchUserError,

  } = slice.actions;
  



  const sagaMiddleware = createSagaMiddleware();

  export const store = configureStore({
    reducer: slice.reducer,
    middleware: (defaultMiddleware) => {
      return defaultMiddleware().concat(sagaMiddleware);
    },
    devTools: true
  })

  sagaMiddleware.run(rootSaga)

