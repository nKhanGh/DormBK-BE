import express from 'express';
const router = express.Router();
import StudentController from '../App/Controllers/students.controller';

router.get('/', StudentController.getStudent);
router.get('/:ssn', StudentController.getStudentBySsn);
router.post('', StudentController.post);
router.put('/:ssn', StudentController.put);
router.delete('/:ssn', StudentController.delete);
router.get('/no-relatives', StudentController.getNoRelative);

export default router;
