"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const students_controller_1 = __importDefault(require("../App/Controllers/students.controller"));
// import { validateRequest } from '@/App/Middlewares/validate';
// import { fullStudentCreateSchema } from "@/App/Validations/Students.validator";
router.get("/no-relatives", students_controller_1.default.getNoRelative);
router.get("/", students_controller_1.default.getStudent);
router.post("/", students_controller_1.default.createStudent);
router.get("/:ssn", students_controller_1.default.getStudentBySsn);
router.put("/:ssn", students_controller_1.default.put);
router.delete("/:ssn", students_controller_1.default.delete);
exports.default = router;
