import { Todos } from "../interfaces";

interface Props {
   todoData: Todos[];
}

const DisplayTodos: React.FC<Props> = ({ todoData }) => {
   return (
         <div className="todoData-container">
            {todoData.map((item, i) => (
               <div key={i}>
                  <p>{item.todo}</p>
                  <p>{item.isCompleted}</p>
               </div>
            ))}
         </div>
   )
}

export default DisplayTodos;
