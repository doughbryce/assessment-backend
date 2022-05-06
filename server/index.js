const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addGoal, deleteGoal, counter, getAllGoals } = require('./controller')

app.get("/api/", getAllGoals)
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/goal", addGoal);
app.put("/api/counter/:id", counter);
app.delete("/api/delete/", deleteGoal);

app.listen(4000, () => console.log("Server running on 4000"));