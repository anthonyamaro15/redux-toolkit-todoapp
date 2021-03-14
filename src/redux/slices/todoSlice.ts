import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface TodosProps {
   todo: string;
   isCompleted: boolean;
}

interface InitialStateProps {
   todoData: TodosProps[];
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
      }
   }
});

export const { newTodo } = todoSlice.actions;
export const todos = (state: RootState) => state.todoSlice.todoData
export default todoSlice.reducer;
