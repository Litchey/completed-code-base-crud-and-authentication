const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

//all todo and name   

router.get("/", authorize, async (req, res) => {
  try {
    // var user = await pool.query(
    //   "SELECT user_name, user_email FROM users WHERE user_id = $1",
     
    //   [req.user.id] 
    // ); 

    const user = await pool.query("SELECT u.user_name, t.todo_id, t.description FROM users AS u LEFT JOIN todo As t ON u.user_id = t.user_id WHERE u.user_id = $1", 
    [req.user.id]
    );
    
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//create a todo
router.post("/todos", authorize, async (req, res) => {
  try {
      const { description } = req.body;
      const newTodo = await pool.query("INSERT INTO todo (user_id, description) VALUES ($1, $2) RETURNING *",
      [req.user.id, description]
      );

      res.json(newTodo.rows[0]);
  } catch (err) {
      console.error(err.message);
  }
});


//update a todo
router.put("/todos/:id", authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING *",
        [description, id, req.user.id]
        );

        if(updateTodo.rows.length === 0) {
          return res.json("This todo is not yours")
        }

        res.json("Todo was updated");

    } catch (err) {
        console.error(err.message);
    }
});


//delete a todo
router.delete("/todos/:id", authorize, async(req, res) => {
  try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1 AND user_id = $2", 
      [id, req.user.id]
      );

      if(deleteTodo.rows.length === 0) {
        return res.json("This todo is not yours")
      }
      res.json("Todo was deleted");

  } catch(err) {
      console.log(err.message)
  }
});




module.exports = router;















