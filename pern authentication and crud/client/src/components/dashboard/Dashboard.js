import React,{ Fragment, useState, useEffect} from 'react';

// components
import InputTd from "./todolist/InputTd"
import ListTd from "./todolist/ListTd"

const Dashboard = ({setAuth}) => {

  const [name, setName] = useState("");
  const [allTodo, setAllTodo] = useState([]);
  const [todoChange, setTodoChange] = useState(false);

  // const [email, setEmail] = useState("");

  async function getName() {

    try {
      const response = await fetch("/dashboard/", {
        method : "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      setAllTodo(parseRes);

      setName(parseRes[0].user_name)
      // setEmail(parseRes.user_email)
    } catch (error) {
     console.error(error.message); 
    }
  }

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token");
    setAuth(false);
  }

  useEffect(() => {
    getName();
    
    setTodoChange(false);
  }, [todoChange]);

  
  

    return(                
      <Fragment> 
        <h2>{name}'s data page</h2>
        <div className="d-flex mt-1">
          
           <button className="btn btn-primary" 
            onClick={e => logout(e)}>Logout</button>
        </div>
        
        
        {/* <button className="btn btn-primary" onClick={()=>setAuth(false)} >Logout</button>  */}

      
      <InputTd setTodoChange={setTodoChange} />
      <ListTd allTodo={allTodo} setTodoChange={setTodoChange} />
      </Fragment>

      
    
    );
};

export default Dashboard;




