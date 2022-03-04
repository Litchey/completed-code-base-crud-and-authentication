
const express = require("express");
const app = express();
const cors = require("cors");
const path  = require("path");
const pool = require("../final_psql_project/db");
const PORT = process.env.PORT || 5000;




//middleware
app.use(express.json());   // request body
app.use(cors());

// app.use(express.static(path.join(__dirname, "client/build")));
// app.use(express.static("./client/build"));

if(process.env.NODE_ENV === "production") {
    //server static content
    // npm run build
    app.use(express.static(path.join(__dirname, "client/build")));
}

// console.log(__dirname);
// console.log(path.join(__dirname, "client/build"));
//routes

//register and login routes

app.use("/auth", require("./routes/jwtAuth"));


// dashboard 

app.use("/dashboard", require("./routes/dashboard"));





app.listen(PORT, () => {
    console.log(`server is starting on the port ${PORT}`);
});