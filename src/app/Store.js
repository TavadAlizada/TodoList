import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./feature/todoList/TodoReducer"

 export const store = configureStore({
    reducer:{
        todo : todoReducer
    }
});
