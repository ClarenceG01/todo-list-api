// import express, todoList,router
const express = require("express");
const todoTasks = require("./data");
const { router } = require("./routes/todoRoutes");

// create express app
let app = express();
// use express.json()
app.use(express.json());
app.use("/", router); // use router
// create port
const port = 4000;
// start server
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
