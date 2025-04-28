import express from 'express';
const router = express.Router();
import DormitoryCardController from '@/App/Controllers/dormitory.controller';

router.get('/check/:ssn', DormitoryCardController.checkDormitoryCard);
router.post('/set/:ssn', DormitoryCardController.setDormitoryCard);

export default router;
