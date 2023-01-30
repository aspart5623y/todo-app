import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import todoSlice from "./todo-slice";
import uiSlice from "./ui-slice";


const rootReducer = combineReducers({ 
    todo: todoSlice.reducer,
    ui: uiSlice.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = configureStore({
    reducer: persistedReducer
})

export default store;
export const persistor = persistStore(store)