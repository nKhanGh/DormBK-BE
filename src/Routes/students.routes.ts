import express from 'express';
const router = express.Router();
import StudentController from '../App/Controllers/students.controller';

router.get('/api/students', StudentController.getStudent);
router.get('/api/students/:ssn', StudentController.getStudentBySsn);
router.post('/api/students', StudentController.post);
router.put('/api/students/:ssn', StudentController.put);
router.delete('/api/students/:ssn', StudentController.delete);
router.get('/api/students/no-relatives', StudentController.getNoRelative);







export default router;