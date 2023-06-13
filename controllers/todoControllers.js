let todoTasks = require("../data");

module.exports = {
  home: (req, res) => {
    res.send("todo List API");
  },
  getTasks: (req, res) => {
    res.status(200).json({
      statusCodes: "OK",
      message: "Data retrieved successfully",
      results: todoTasks,
    });
  },
  addTasks: (req, res) => {
    console.log(req.body);
    todoTasks.push(req.body);
    res.status(200).json({
      statusCodes: "OK",
      message: "Data added successfully",
      results: todoTasks,
    });
  },
  updateTodo: (req, res) => {
    const { id } = req.params;
    const taskToUpdate = todoTasks.findIndex((task) => task.id === id);
    if (taskToUpdate === -1) {
      res.status(404).json({
        statusCodes: "NOT FOUND",
        message: "Task not found",
      });
    }
    const { task, dueDate, priority } = req.body; //get values from client
    // replace specified values in todoTasks
    if (task) {
      todoTasks[taskToUpdate].task = task;
    }
    if (dueDate) {
      todoTasks[taskToUpdate].dueDate = dueDate;
    }
    if (priority) {
      todoTasks[taskToUpdate].priority = priority;
    }
    res.status(200).json({
      statusCodes: "OK",
      message: "Task updated",
      results: todoTasks,
    });
  },
  singleTask: (req, res) => {
    const { id } = req.params;
    const findTask = todoTasks.findIndex((task) => task.id === id);
    console.log(findTask);
    if (findTask === -1) {
      res.status(404).json({
        statusCodes: "NOT FOUND",
        message: "Task not found",
      });
    } else {
      res.status(200).json({
        statusCodes: "OK",
        message: "Task retrieved",
        results: todoTasks[findTask],
      });
    }
  },
  deleteTask: (req, res) => {
    const { id } = req.params;
    const findTask = todoTasks.findIndex((task) => task.id === id);
    if (findTask === -1) {
      res.status(404).json({
        statusCodes: "NOT FOUND",
        message: "Task not found",
      });
    }
    todoTasks = todoTasks.filter((task) => task.id !== id);
    res.status(200).json({
      statusCodes: "OK",
      message: "Task deleted",
      results: todoTasks,
    });
  },
};
