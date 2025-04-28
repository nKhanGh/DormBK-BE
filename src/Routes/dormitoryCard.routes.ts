import express from 'express';
const router = express.Router();
import DormitoryCardController from '@/App/Controllers/dormitory.controller';
import { verifyToken } from '@/App/Middlewares/auth';

router.get(
  '/check/:ssn',
  verifyToken,
  DormitoryCardController.checkDormitoryCard,
);
router.put('/set/:ssn', verifyToken, DormitoryCardController.setDormitoryCard);
router.post('/set/:ssn', verifyToken, DormitoryCardController.setDormitoryCard);

export default router;
