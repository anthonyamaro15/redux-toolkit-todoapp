import {  useSelector } from 'react-redux';
import { Todos } from '../interfaces';
import DisplayTodos from './DisplayTodos';
import TodoForm from './TodoForm';

interface TodoData {
   todoData: Todos[];
}
interface ReducerProps {
   todoSlice: TodoData;
   name: string;
}

const MainApp = () => {
   const { todoData } = useSelector((state: ReducerProps) => state.todoSlice);
   
   return (
      <div>
         <TodoForm />
         <DisplayTodos todoData={todoData} />
      </div>
   )
}

export default MainApp
