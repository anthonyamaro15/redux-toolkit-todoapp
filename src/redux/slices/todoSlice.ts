import { createSlice } from '@reduxjs/toolkit';
import { Todos } from '../../interfaces';
import { RootState } from '../store';

interface InitialStateProps {
   todoData: Todos[];
}

const initialState: InitialStateProps = {
   todoData: []
}

const todoSlice = createSlice({
   name: 'allTodos',
   initialState,
   reducers: {
      newTodo: (state, action) => {
         // copy everything from todoData and add new todo
         state.todoData = [...state.todoData, action.payload]
      },
      deleteTodo: (state, action) => {
         state.todoData = action.payload
      }
   }
});

export const { newTodo, deleteTodo } = todoSlice.actions;
export const todos = (state: RootState) => state.todoSlice.todoData
export default todoSlice.reducer;
