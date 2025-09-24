// server9.js
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jhansirambha:J05%407@collegetalenthub.47hm9a4.mongodb.net/student");

const Student = mongoose.model("Student", new mongoose.Schema({ name: String, age: Number }));

const app = express();
app.use(express.json());

app.get("/students/:id", async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send("Student not found");
    res.json(student);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => res.status(500).send("Server Error: " + err.message));

app.listen(3000, () => console.log("Error handling API running..."));
