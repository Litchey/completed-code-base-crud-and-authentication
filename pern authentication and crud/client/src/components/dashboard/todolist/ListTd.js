import React, {Fragment, useEffect, useState} from "react";
import EditTd from "./EditTd";


const ListTd = ({allTodo, setTodoChange  }) => {
    console.log(allTodo);

    const [todos, setTodos] = useState([]);

    // delete todo function

    const deleteTodo = async (id) => {
        try {

            const deleteTodo = await fetch(`http://localhost:5000/dashboard/todos/${id}`, {
                method : "DELETE",
                headers: {token : localStorage.token}

            });

            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (err) {
            console.error(err.message);
        }
    }

// const getTodos = async () => {
//     try {

//         const response =  await fetch("http://localhost:5000/todos");
//         const jsonData = await response.json();

//         setTodos(jsonData);
        
//     } catch (err) {
//         console.error(err.message);
//     }
// };

useEffect(() => {
  setTodos(allTodo);
}, [allTodo]);

console.log(todos);
    return (
        <Fragment>
                  
  <table className="table mt-5 text-center">
    <thead>
      <tr>
        
        <th>Store-name, products & business type</th>
        <th>Edit</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
        { todos.length !== 0 && todos[0].toso_id !== null &&
        todos.map(todo => (
           <tr key={todo.todo_id}>
               <td>{todo.description}</td>
               <td>
                   <EditTd todo={todo}  setTodoChange={setTodoChange} />
               </td>
               <td>
                   <button className = "btn btn-danger" 
                   onClick={() => deleteTodo(todo.todo_id)}
                   >
                       Delete</button></td>
           </tr> 
           
        ))}

        
      
    </tbody>
  </table>



        </Fragment>
    )
}

export default ListTd;