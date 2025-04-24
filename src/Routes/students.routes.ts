import { Router } from "express";
const router = Router();
import StudentController from "../App/Controllers/students.controller";
// import { validateRequest } from '@/App/Middlewares/validate';
// import { fullStudentCreateSchema } from "@/App/Validations/Students.validator";


router.get("/no-relatives", StudentController.getNoRelative);
router.get("/", StudentController.getStudent);
router.post("/", StudentController.createStudent);
router.get("/:ssn", StudentController.getStudentBySsn);
router.put("/:ssn", StudentController.put);
router.delete("/:ssn", StudentController.delete);


export default router;
