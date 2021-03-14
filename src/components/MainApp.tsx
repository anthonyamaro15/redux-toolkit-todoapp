import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { newTodo } from '../redux/slices/todoSlice';

interface Todos {
   todo: string;
   isCompleted: boolean;
}
interface TodoData {
   todoData: Todos[];
}
interface ReducerProps {
   todoSlice: TodoData;
   name: string;
}

const MainApp = () => {
   const dispatch = useDispatch();
   const { register, handleSubmit, reset } = useForm();
   const { todoData } = useSelector((state: ReducerProps) => state.todoSlice);
   
   const addTodo = (value: Todos) => {
      dispatch(newTodo({...value, isCompleted: false }));
      reset();
   }

   return (
      <div>
         <div className="addTodo-form">
            <form onSubmit={handleSubmit(addTodo)}>
               <label htmlFor="todo">
                  <input type="text" name="todo" id="todo" ref={register} />
               </label>
               <button type="submit">add</button>
            </form>
         </div>
         <div className="todoData-container">
            {todoData.map((item, i) => (
               <div key={i}>
                  <p>{item.todo}</p>
                  <p>{item.isCompleted}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default MainApp
