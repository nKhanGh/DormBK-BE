import express from 'express';
const router = express.Router();
import StatisticController from '../App/Controllers/statistics.controller';

router.get('/disciplined-students', StatisticController.getCountDisciplined);
router.get('/total-students/:buildingId', StatisticController.getTotalStudentByBuilding);
router.get('/valid-dormitory-cards', StatisticController.getNumValidityDormCard);


export default router;