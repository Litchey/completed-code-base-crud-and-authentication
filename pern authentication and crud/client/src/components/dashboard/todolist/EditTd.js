import React, {Fragment, useState} from "react";

const EditTd= ({ todo, setTodoChange }) => {
const [description, setDescription] = useState(todo.description);

// edit description function
const updateDescription = async (e) => {
    e.preventDefault();
 try {

    const body = {description};

    const myHeadres = new Headers();
    myHeadres.append("Content-Type", "application/json");
    myHeadres.append("token", localStorage.token);

    const response = await fetch (`http://localhost:5000/dashboard/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: myHeadres,
        body: JSON.stringify(body)
    })

    setTodoChange(true);
    //  window.location = "/";

 } catch (err) {
     console.error(err.message);
 }
}


    return (
      <Fragment>
          
<button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
 Edit
</button>



<div className="modal" 
id={`id${todo.todo_id}`}
onClick={() => setDescription(todo.description)}
>
  <div className="modal-dialog">
    <div className="modal-content">

     
      <div className="modal-header">
        <h4 className="modal-title">Edit Todo</h4>
        <button type="button" className="close" data-dismiss="modal"
        onClick={() => setDescription(todo.description)}
        > 
         &times;
        </button>
      </div>

     
      <div className="modal-body">
        <input type="text" classNameName="form-control" value={description} onChange={e => 
        setDescription(e.target.value)
        }
        />
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-warning" data-dismiss="modal"
        onClick = {e => updateDescription(e)}
        >
        Edit</button>

        <button type="button" className="btn btn-danger" data-dismiss="modal"
        onClick={() => setDescription(todo.description)}
        >
        Close</button>

      </div>

    </div>
  </div>
</div>
      </Fragment>
    )
};

export default EditTd;



// import React, { Fragment, useState } from "react";

// const EditTodo = ({ todo, setTodosChange }) => {
//   //editText function

//   const editText = async id => {
//     try {
//       const body = { description };

//       const myHeaders = new Headers();

//       myHeaders.append("Content-Type", "application/json");
//       myHeaders.append("jwt_token", localStorage.token);

//       await fetch(`http://localhost:5000/dashboard/todos/${id}`, {
//         method: "PUT",
//         headers: myHeaders,
//         body: JSON.stringify(body)
//       });

//       setTodosChange(true);

//       // window.location = "/";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const [description, setDescription] = useState(todo.description);
//   return (
//     <Fragment>
//       <button
//         type="button"
//         className="btn btn-warning"
//         data-toggle="modal"
//         data-target={`#id${todo.todo_id}`}
//       >
//         Edit
//       </button>
//       {/* id = "id21"*/}
//       <div
//         className="modal"
//         id={`id${todo.todo_id}`}
//         onClick={() => setDescription(todo.description)}
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title">Edit Todo</h4>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 onClick={() => setDescription(todo.description)}
//               >
//                 &times;
//               </button>
//             </div>

//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={description}
//                 onChange={e => setDescription(e.target.value)}
//               />
//             </div>

//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-warning"
//                 data-dismiss="modal"
//                 onClick={() => editText(todo.todo_id)}
//               >
//                 Edit
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 data-dismiss="modal"
//                 onClick={() => setDescription(todo.description)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default EditTodo;