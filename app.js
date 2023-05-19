const express = require("express");

const app = express();
const task = require("./routes/task.js");

const PORT = 3000;

//middleare
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("tASKmaNAGER");
});

app.use("/api/v1/tasks", task);

app.listen(PORT, console.log(`App is Listing on port ${PORT}`));
