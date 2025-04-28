import { Router } from 'express';
const router = Router();
import StudentController from '../App/Controllers/students.controller';
import { validateAll } from '@/App/Middlewares/validate';
import { SsnParam, StudentBody } from '@/App/Validations/Students.validator';
import { verifyToken } from '@/App/Middlewares/auth';

router.get('/no-relatives', verifyToken, StudentController.getNoRelative);
router.get('/', verifyToken, StudentController.getStudent);
router.post(
  '/',
  validateAll({ body: StudentBody }),
  StudentController.createStudent,
);
router.get(
  '/:ssn',
  verifyToken,
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
  verifyToken,
  validateAll({ params: SsnParam }),
  StudentController.delete,
);

export default router;
