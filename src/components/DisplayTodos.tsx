import { Todos } from "../interfaces";

interface Props {
   todoData: Todos[];
   removeTodo: (obj: Todos) => void;
}

const DisplayTodos: React.FC<Props> = ({ todoData, removeTodo }) => {
   return (
      <div className="todoData-container">
         {todoData.map((item, i) => (
            <div key={i}>
               <p className="single-todo" onClick={() => removeTodo(item)}>
                  {item.todo}
               </p>
               <p>{item.isCompleted}</p>
            </div>
         ))}
      </div>
   );
};

export default DisplayTodos;
