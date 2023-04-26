import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slice/counterSlice"
import authReducer from "./slice/authSlice";
// import { createStore, combineReducers } from "redux"
// import countReducer from "./reducers/countReducer";
// import authReducer from "./reducers/authReducer";


// const reducers = combineReducers({
//     count: countReducer,
//     isLoggedIn: authReducer
// })

//create a store
const store = configureStore({
    reducer: {
        counter: countReducer,
        auth: authReducer
    }
})
// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;