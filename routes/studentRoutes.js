const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

router.get("/", controller.getStudents);
router.get("/students/new", controller.newStudentForm);
router.post("/students", controller.createStudent);
router.get("/students/:id/edit", controller.editStudentForm);
router.put("/students/:id", controller.updateStudent);
router.delete("/students/:id", controller.deleteStudent);

module.exports = router;