import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Todos } from '../interfaces';
import { newTodo } from '../redux/slices/todoSlice';

const TodoForm = () => {
   const dispatch = useDispatch();
   const { register, handleSubmit, reset } = useForm();
   
   const addTodo = (value: Todos) => {
      dispatch(newTodo({...value, isCompleted: false }));
      reset();
   }

   return (
      <div className="addTodo-form">
         <form onSubmit={handleSubmit(addTodo)}>
            <label htmlFor="todo">
               <input type="text" name="todo" id="todo" ref={register} />
            </label>
            <button type="submit">add</button>
         </form>
      </div>
   )
}

export default TodoForm;
