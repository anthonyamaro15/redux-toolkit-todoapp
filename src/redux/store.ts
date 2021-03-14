import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';

const reducer = combineReducers({
   todos: todoSlice
});

const store = configureStore({
   reducer
});

export type RootState = ReturnType<typeof store.getState>
export default store;
