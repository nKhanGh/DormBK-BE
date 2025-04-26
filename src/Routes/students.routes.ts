import { Router } from 'express';
const router = Router();
import StudentController from '../App/Controllers/students.controller';
import { validateAll } from '@/App/Middlewares/validate';
import { SsnParam, StudentBody } from '@/App/Validations/Students.validator';

router.get('/no-relatives', StudentController.getNoRelative);
router.get('/', StudentController.getStudent);
router.post(
  '/',
  validateAll({ body: StudentBody }),
  StudentController.createStudent,
);
router.get(
  '/:ssn',
  validateAll({ params: SsnParam }),
  StudentController.getStudentBySsn,
);
router.put(
  '/:ssn',
  validateAll({ params: SsnParam, body: StudentBody }),
  StudentController.put,
);
router.delete(
  '/:ssn',
  validateAll({ params: SsnParam }),
  StudentController.delete,
);

export default router;
