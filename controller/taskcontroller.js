const getAllTask = (req, res) => {
  res.send("Get all Task");
};
const createTask = (req, res) => {
  res.send("create All task");
};
const getTask = (req, res) => {
  res.send("create Single Task");
};
const updateTask = (req, res) => {
  res.send("update Task");
};
const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
