import {  useDispatch, useSelector } from 'react-redux';
import { Todos } from '../interfaces';
import { deleteTodo } from '../redux/slices/todoSlice';
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
   const dispatch = useDispatch();
   
   const removeTodo = (obj: Todos) => {
      const filterTodo = todoData.filter(todo => todo.id !== obj.id);
      dispatch(deleteTodo(filterTodo));
   } 
   
   return (
      <div>
         <TodoForm />
         <DisplayTodos todoData={todoData} removeTodo={removeTodo} />
      </div>
   )
}

export default MainApp
