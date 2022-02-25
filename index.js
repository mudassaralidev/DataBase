const express = require("express");

const { sequelize, Student, Department } = require("./models");

const app = express();
app.use(express.json());

app.listen({ port: 5000 }, async () => {
  console.log("Server start on http://localhost:5000");
  await sequelize.authenticate();
  console.log("Databas connected");
});

app.post("/students", async (req, res) => {
  const { firstName, lastName, depCode } = req.body;

  try {
    const student = await Student.create({
      firstName,
      lastName,
      depCode,
    });
    return res.json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
});

// To show all students with their departments
app.get("/students", async (req, res) => {
  try {
    const students = await Student.findAll({ include: "department" });
    return res.json(students);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
});

// To show one user with his departments
app.get("/students/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findOne({
      where: { id },
      include: "department",
    });
    return res.json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
});

//To delete student
app.delete("/students/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findOne({
      where: { id },
    });
    await student.destroy();
    return res.json("Student has been deleted");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
});

//to update student
app.put("/students/:id", async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, depCode } = req.body;
  try {
    const student = await Student.findOne({ where: { id } });
    student.firstName = firstName;
    student.lastName = lastName;
    student.depCode = depCode;
    await student.save();
    return res.json(student);
  } catch (err) {
    console.log(err);
    return res.json("Something went wrong");
  }
});

//To create new department

app.post("/department", async (req, res) => {
  const { depName } = req.body;

  try {
    const department = await Department.create({ depName });

    return res.json(department);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//show all departments with their regarding students
app.get("/department", async (req, res) => {
  try {
    const department = await Department.findAll({ include: "student" });
    return res.json(department);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
});

//show one department regarding its students
app.get("/department/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const department = await Department.findOne({
      where: { id },
      include: "student",
    });
    return res.json(department);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
});
//delete departments
app.delete("/department/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const department = await Department.findOne({
      where: { id },
    });
    await department.destroy();
    return res.json("Department deleted successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
});
